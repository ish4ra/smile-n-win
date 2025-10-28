import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl().toString()

  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: [`${base.replace(/\/$/, '')}/sitemap.xml`],
    host: base.replace(/\/$/, ''),
  }
}


