import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy", "/support", "/terms"].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7
  }));
}
