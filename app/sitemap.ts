import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://shivanshpateria.vercel.app"
  const now = new Date()
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/#work`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#skating`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/#skills`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/#resume`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ]
}
