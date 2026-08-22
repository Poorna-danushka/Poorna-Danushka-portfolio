import { PLACEHOLDER_PREFIX } from '../data/portfolio'

export function isPlaceholder(value: string): boolean {
  return value.startsWith(PLACEHOLDER_PREFIX)
}

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

export function scrollToId(id: string): void {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function resolveSocialHref(id: string, href: string): string | undefined {
  if (isPlaceholder(href)) return undefined
  if (id === 'email') return href.startsWith('mailto:') ? href : `mailto:${href}`
  return href
}
