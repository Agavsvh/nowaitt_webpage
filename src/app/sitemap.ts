import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://nowaitt.com'

  const routes = [
    { url: base, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/features`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/how-it-works`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/industries`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/businesses`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/faq`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${base}/download`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/contact`, priority: 0.6, changeFrequency: 'yearly' as const },
  ]

  return routes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
