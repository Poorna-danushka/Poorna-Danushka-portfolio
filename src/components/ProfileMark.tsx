import { portfolio } from '../data/portfolio'
import { cn } from '../lib/utils'

export function ProfileMark({ className }: { className?: string }) {
  const src = portfolio.person.profileImage
  const alt = portfolio.person.profileImageAlt ?? `${portfolio.person.name} portrait`

  return (
    <div className={cn('relative mx-auto w-full max-w-md', className)}>
      <div className="absolute -inset-2 rounded-[2.25rem] bg-accent/20 blur-xl sm:-inset-4 sm:rounded-[2.75rem] sm:blur-3xl" aria-hidden />
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-elevated shadow-[0_20px_60px_var(--glow)] sm:rounded-[2.25rem] sm:shadow-[0_30px_80px_var(--glow)]">
        {src ? (
          <img
            src={src}
            alt={alt}
            className="aspect-[4/5] w-full object-cover object-center"
            width={960}
            height={1200}
            fetchPriority="high"
          />
        ) : (
          <div className="grid aspect-[4/5] place-items-center">
            <p className="font-display text-5xl sm:text-7xl text-accent">PD</p>
          </div>
        )}
      </div>
    </div>
  )
}
