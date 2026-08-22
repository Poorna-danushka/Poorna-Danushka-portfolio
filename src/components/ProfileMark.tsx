import { portfolio } from '../data/portfolio'

export function ProfileMark() {
  const src = portfolio.person.profileImage
  const alt = portfolio.person.profileImageAlt ?? `${portfolio.person.name} portrait placeholder`

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-2 rounded-[2.75rem] bg-accent/20 blur-2xl sm:-inset-4 sm:blur-3xl" aria-hidden />
      <div className="relative overflow-hidden rounded-[2.25rem] border border-border bg-elevated shadow-[0_30px_80px_var(--glow)]">
        {src ? (
          <img
            src={src}
            alt={alt}
            className="aspect-[4/5] w-full object-cover object-left"
            width={960}
            height={1200}
            fetchPriority="high"
          />
        ) : (
          <div className="grid aspect-[4/5] place-items-center">
            <p className="font-display text-7xl">PD</p>
          </div>
        )}
      </div>
    </div>
  )
}
