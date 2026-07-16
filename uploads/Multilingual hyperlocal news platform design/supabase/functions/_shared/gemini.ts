// Gemini rewrite + classify — one structured-JSON call per story.
// Enforces the brief's rules: 100% rewrite, preserve facts, never
// invent, detect language/geo/category/priority, score fake-news.

const MODEL = "gemini-2.0-flash"; // fast + cheap; use gemini-1.5-pro for depth
const ENDPOINT =
  `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

const CATEGORIES = [
  "breaking","politics","crime","district","state","national","international",
  "business","finance","technology","health","education","jobs","cinema","ott",
  "celebrity","sports","cricket","weather","religion","lifestyle","automobile",
  "travel","agriculture","factcheck","opinion",
];

export interface AiResult {
  language_code: string;   // te | ta | hi | kn | en ...
  category: string;
  is_national: boolean;
  is_breaking: boolean;
  headline: string;
  short_headline: string;
  summary: string;
  body: string;
  seo_title: string;
  meta_desc: string;
  slug: string;
  faq: { q: string; a: string }[];
  tags: string[];
  image_prompt: string;
  fake_score: number;      // 0..1  (>0.5 => hold for review)
  confidence: number;      // 0..1
}

const SYSTEM = `You are Vaarta's newsroom AI for a multilingual hyperlocal
Indian news app. Rules you must never break:
- Rewrite the article 100% in your own words. Never copy sentences.
- Preserve every fact. Never invent names, numbers, quotes, or events.
- Output in the SAME language/script as the source article.
- is_national = true only for pan-India stories (PM, President, Supreme
  Court, Parliament, ISRO, Army, Election Commission, NEET/UPSC/CBSE,
  Railways, RBI, SEBI, Budget, cyclones, national elections). Otherwise
  it is local and must stay inside its state.
- fake_score: 0 = credible/corroborated, 1 = likely misinformation
  (unsourced viral claim, no attribution, sensational). When unsure, raise it.
- Headlines must read human, not clickbait. slug is lowercase-hyphen ASCII.`;

const schema = {
  type: "object",
  properties: {
    language_code: { type: "string" },
    category: { type: "string", enum: CATEGORIES },
    is_national: { type: "boolean" },
    is_breaking: { type: "boolean" },
    headline: { type: "string" },
    short_headline: { type: "string" },
    summary: { type: "string" },
    body: { type: "string" },
    seo_title: { type: "string" },
    meta_desc: { type: "string" },
    slug: { type: "string" },
    faq: {
      type: "array",
      items: { type: "object", properties: { q: { type: "string" }, a: { type: "string" } }, required: ["q","a"] },
    },
    tags: { type: "array", items: { type: "string" } },
    image_prompt: { type: "string" },
    fake_score: { type: "number" },
    confidence: { type: "number" },
  },
  required: [
    "language_code","category","is_national","is_breaking","headline",
    "short_headline","summary","body","seo_title","meta_desc","slug",
    "tags","image_prompt","fake_score","confidence",
  ],
};

export async function rewriteWithGemini(input: {
  title: string; body: string; languageCode?: string;
}): Promise<AiResult> {
  const key = Deno.env.get("GEMINI_API_KEY");
  if (!key) throw new Error("GEMINI_API_KEY not set");

  const prompt =
    `Source language hint: ${input.languageCode ?? "auto"}\n\n` +
    `TITLE: ${input.title}\n\nBODY:\n${input.body}`;

  const res = await fetch(`${ENDPOINT}?key=${key}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: SYSTEM }] },
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.4,
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    }),
  });

  if (!res.ok) throw new Error(`gemini ${res.status}: ${await res.text()}`);
  const json = await res.json();
  const text = json.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("gemini: empty response");
  return JSON.parse(text) as AiResult;
}
