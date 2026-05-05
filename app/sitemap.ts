import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { SERVICES, SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");

  const staticPaths = [
    "/",
    "/about",
    "/contact",
    "/services",
    "/blog",
    "/privacy",
    "/terms",
  ];

  const now = new Date();

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));

  for (const s of SERVICES) {
    entries.push({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  for (const p of BLOG_POSTS) {
    entries.push({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.publishedAt + "T12:00:00"),
      changeFrequency: "monthly",
      priority: 0.65,
    });
  }

  return entries;
}
