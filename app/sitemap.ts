import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().toString().replace(/\/$/, '')
  const now = new Date()

  const routes = [
    '',
    '/about',
    '/programs',
    '/stories',
    '/donate',
    '/contact',
    '/privacy',
    '/terms',
    '/cookies',
    '/transparency',
    '/volunteer',
  ]

  const result: MetadataRoute.Sitemap = routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }))

  return result
}


