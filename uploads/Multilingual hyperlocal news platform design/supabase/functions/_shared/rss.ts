// Dependency-free RSS 2.0 / Atom parser for Deno.
// Good enough for Google News + publisher feeds; swap for a full
// XML lib if you hit exotic feeds.

export interface RssItem {
  title: string;
  link: string;
  summary?: string;
  content?: string;
  published?: string;
}

function tag(block: string, name: string): string | undefined {
  // handles <name>..</name> and <name ...>..</name>, CDATA-aware
  const re = new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i");
  const m = block.match(re);
  if (!m) return undefined;
  return m[1]
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .trim();
}

function attrLink(block: string): string | undefined {
  // Atom: <link href="..."/>
  const m = block.match(/<link[^>]*href="([^"]+)"/i);
  return m?.[1];
}

export async function fetchRss(url: string): Promise<RssItem[]> {
  const res = await fetch(url, {
    headers: { "User-Agent": "VaartaBot/1.0 (+news aggregator)" },
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const xml = await res.text();

  const blocks =
    xml.match(/<item[\s\S]*?<\/item>/gi) ??
    xml.match(/<entry[\s\S]*?<\/entry>/gi) ??
    [];

  return blocks.map((b) => ({
    title: tag(b, "title") ?? "",
    link: tag(b, "link") ?? attrLink(b) ?? "",
    summary: tag(b, "description") ?? tag(b, "summary"),
    content: tag(b, "content:encoded") ?? tag(b, "content"),
    published: tag(b, "pubDate") ?? tag(b, "updated"),
  })).filter((i) => i.title);
}
