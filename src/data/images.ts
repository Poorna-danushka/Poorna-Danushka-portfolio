export const portfolioImages = {
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-30%20at%2023.43.00-5CCkHCkimEOJ6iB98pQ62joPalbRnW.jpeg',
  secondary: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-30%20at%2023.44.08-V94WevImZadPcEhcekVbkvenmcsT5F.jpeg',
} as const

export const portfolioImageAlts = {
  hero: 'Poorna Danushka in a tailored black suit, arms crossed against a dark studio background',
  secondary: 'Poorna Danushka in a black suit, standing confidently against a dark studio background',
} as const

export type PortfolioImageKey = keyof typeof portfolioImages

export function getPortfolioImage(key: PortfolioImageKey) {
  return portfolioImages[key]
}

// Replace only the URLs above when the portraits are uploaded to Cloudinary.
// Components intentionally consume this module so image sources stay centralized.
