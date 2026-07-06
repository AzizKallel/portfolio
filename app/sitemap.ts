import { MetadataRoute } from "next";
import { projects } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  const projectUrls = projects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: base, lastModified: new Date() },
    ...projectUrls,
  ];
}
