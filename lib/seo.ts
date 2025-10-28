export const SITE_NAME = "Smile 'n Win — Special-Needs Children's Home"

export function getSiteUrl(): URL {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL
  if (envUrl) {
    try {
      return new URL(envUrl)
    } catch {}
  }

  const vercelUrl = process.env.VERCEL_URL
  if (vercelUrl) {
    try {
      const withProtocol = vercelUrl.startsWith('http') ? vercelUrl : `https://${vercelUrl}`
      return new URL(withProtocol)
    } catch {}
  }

  return new URL('http://localhost:3000')
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl()
  const url = new URL(path, base)
  return url.toString()
}


