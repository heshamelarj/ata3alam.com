import type { APIRoute } from "astro";
import { SITE } from "@config";

const robots = `
User-agent: Googlebot
Disallow: /nogooglebot/
Disallow: /tags/
Disallow: /posts/1/
Disallow: /posts/2/
Disallow: /posts/3/
Disallow: /posts/4/
Disallow: /posts/5/

User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", SITE.website).href}
`.trim();

export const GET: APIRoute = () =>
  new Response(robots, {
    headers: { "Content-Type": "text/plain" },
  });
