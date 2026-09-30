import { portfolio } from '../data/portfolio'
import { portfolioImages, portfolioImageAlts } from '../data/images'
import { cn } from '../lib/utils'

export function ProfileMark({ className }: { className?: string }) {
  const src = portfolioImages.hero || portfolio.person.profileImage
  const alt = portfolioImageAlts.hero || (portfolio.person.profileImageAlt ?? `${portfolio.person.name} portrait`)

  return (
    <div className={cn('relative mx-auto w-full max-w-md', className)}>
      <div className="portrait-wash absolute -inset-8" aria-hidden />
      <div className="relative overflow-hidden border border-border bg-elevated shadow-[0_30px_100px_var(--glow)] [clip-path:polygon(8%_0,100%_0,92%_100%,0_100%)]">
        {src ? <img src={src} alt={alt} className="aspect-[4/5] w-full object-cover object-center saturate-[.9]" width={960} height={1200} fetchPriority="high" /> : <div className="grid aspect-[4/5] place-items-center"><p className="font-display text-5xl text-accent">PD</p></div>}
      </div>
      <div className="absolute -bottom-5 -left-5 size-20 border-b border-l border-accent" aria-hidden />
      <div className="absolute -right-3 top-8 size-6 rounded-full border border-accent bg-bg" aria-hidden />
    </div>
  )
}
