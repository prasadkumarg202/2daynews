// ─────────────────────────────────────────────────────────────
//  Vaarta ingestion Edge Function
//  Deno runtime (Supabase Edge Functions)
//  Poll RSS sources ▸ dedup ▸ Gemini rewrite/classify ▸ insert
// ─────────────────────────────────────────────────────────────
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { fetchRss } from "../_shared/rss.ts";
import { rewriteWithGemini } from "../_shared/gemini.ts";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

// normalise a title into a coarse dedup key (merges the same story
// arriving from many publishers)
function dedupHash(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .split(/\s+/).slice(0, 8).sort().join(" ");
}

async function processSource(src: any, langMap: Map<string, string>) {
  let items;
  try {
    items = await fetchRss(src.url);
  } catch (e) {
    console.error("rss fail", src.name, e.message);
    return 0;
  }

  let inserted = 0;
  for (const item of items.slice(0, 12)) {
    const hash = dedupHash(item.title);

    // dedup — skip if we already have this story cluster
    const { data: dup } = await supabase
      .from("articles").select("id").eq("dedup_hash", hash).maybeSingle();
    if (dup) {
      await supabase.from("article_sources").upsert({
        article_id: dup.id, source_id: src.id, raw_url: item.link,
      });
      continue;
    }

    // ── AI stage: rewrite + classify + safety, one structured call ──
    let ai;
    try {
      ai = await rewriteWithGemini({
        title: item.title,
        body: item.content ?? item.summary ?? "",
        languageCode: src.language_code, // hint; Gemini confirms
      });
    } catch (e) {
      console.error("gemini fail", e.message);
      continue;
    }

    // fake-news gate → hold for human review instead of publishing
    const status = ai.fake_score > 0.5 ? "review" : "published";

    const { data: art, error } = await supabase.from("articles").insert({
      language_id:   langMap.get(ai.language_code) ?? src.language_id,
      region_id:     src.region_id ?? null,
      primary_source: src.id,
      category:      ai.category,
      is_national:   ai.is_national,
      is_breaking:   ai.is_breaking,
      priority:      ai.is_breaking ? 10 : 0,
      headline:      ai.headline,
      short_headline: ai.short_headline,
      summary:       ai.summary,
      body:          ai.body,
      seo_title:     ai.seo_title,
      meta_desc:     ai.meta_desc,
      slug:          ai.slug + "-" + hash.slice(0, 6).replace(/\s/g, ""),
      faq:           ai.faq,
      tags:          ai.tags,
      image_prompt:  ai.image_prompt,
      fake_score:    ai.fake_score,
      dedup_hash:    hash,
      confidence:    ai.confidence,
      status,
      published_at:  status === "published" ? new Date().toISOString() : null,
    }).select("id").single();

    if (error) { console.error("insert fail", error.message); continue; }

    await supabase.from("article_sources").insert({
      article_id: art.id, source_id: src.id, raw_url: item.link,
    });
    inserted++;
  }

  await supabase.from("sources")
    .update({ last_polled: new Date().toISOString() }).eq("id", src.id);
  return inserted;
}

Deno.serve(async () => {
  // language code → uuid lookup
  const { data: langs } = await supabase
    .from("languages").select("id, code");
  const langMap = new Map((langs ?? []).map((l: any) => [l.code, l.id]));

  // active sources joined with their language code
  const { data: sources } = await supabase
    .from("sources")
    .select("id, name, url, type, region_id, language_id, languages(code)")
    .eq("is_active", true).eq("type", "rss");

  let total = 0;
  for (const s of sources ?? []) {
    total += await processSource(
      { ...s, language_code: (s as any).languages?.code }, langMap,
    );
  }

  return new Response(JSON.stringify({ ok: true, inserted: total }), {
    headers: { "Content-Type": "application/json" },
  });
});
