import { portfolio } from '../data/portfolio'
import { portfolioImages, portfolioImageAlts } from '../data/images'
import { cn } from '../lib/utils'

export function ProfileMark({ className }: { className?: string }) {
  const src = portfolioImages.hero || portfolio.person.profileImage
  const alt = portfolioImageAlts.hero || (portfolio.person.profileImageAlt ?? `${portfolio.person.name} portrait`)

  return (
    <div className={cn('relative', className)}>
      <div className="portrait-frame relative overflow-hidden rounded-[2rem] border border-border bg-elevated shadow-[0_28px_90px_var(--glow)]">
        <div className="portrait-wash pointer-events-none absolute inset-0 z-10" aria-hidden />
        {src ? <img src={src} alt={alt} className="aspect-[4/5] w-full object-cover object-center transition duration-700 hover:scale-[1.03]" width={960} height={1200} fetchPriority="high" /> : <div className="grid aspect-[4/5] place-items-center"><p className="font-display text-5xl text-accent">PD</p></div>}
        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/75 to-transparent px-6 pb-5 pt-20 text-white"><p className="font-mono text-[10px] uppercase tracking-[.2em] text-white/70">Poorna Danushka Jayasundara</p><p className="mt-1 text-sm">Full-stack developer</p></div>
      </div>
      <div className="portrait-corner absolute -bottom-4 -left-4 size-20 rounded-bl-3xl border-b border-l border-accent" aria-hidden />
      <div className="absolute -right-4 top-8 rounded-full border border-accent bg-bg px-3 py-2 font-mono text-[9px] uppercase tracking-[.16em] text-accent">Sri Lanka</div>
    </div>
  )
}
