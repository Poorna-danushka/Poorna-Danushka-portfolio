import { portfolioImages } from '../config/images'
import { useTilt } from '../hooks/useTilt'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { cn } from '../lib/utils'

export function ProfileMark({ className }: { className?: string }) {
  const src = portfolioImages.hero
  const alt = portfolioImages.heroAlt
  const reduced = usePrefersReducedMotion()
  const { style, glowStyle, onMouseMove, onMouseLeave } = useTilt(10, reduced)

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
      className={cn('relative mx-auto w-full max-w-[260px] min-[380px]:max-w-[300px] sm:max-w-sm lg:max-w-md p-1.5 sm:p-2 group cursor-pointer', className)}
    >
      {/* Dynamic Ambient Backlight Glow */}
      <div
        className="absolute -inset-2 sm:-inset-3 rounded-[2.5rem] sm:rounded-[2.75rem] bg-gradient-to-tr from-accent/35 via-indigo-500/25 to-sky-400/35 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"
        aria-hidden
      />

      {/* Decorative Outer Corner Accent Line Bracket (Bottom Left) - Hidden on very small mobile */}
      <div
        className="hidden min-[380px]:block absolute -bottom-1.5 sm:-bottom-2 -left-1.5 sm:-left-2 h-14 sm:h-20 w-14 sm:w-20 rounded-bl-[1.75rem] sm:rounded-bl-[2.25rem] border-b-2 border-l-2 border-accent/70 transition-all duration-300 group-hover:-bottom-2 sm:group-hover:-bottom-3 group-hover:-left-2 sm:group-hover:-left-3 group-hover:border-accent"
        aria-hidden
      />

      {/* Floating Info Chip - Repositioned for mobile */}
      <div
        className="glass-panel animate-float absolute -right-0.5 min-[380px]:-right-1 sm:-right-2 top-3 sm:top-6 z-30 rounded-lg sm:rounded-xl px-2 sm:px-3 py-1 sm:py-1.5 shadow-lg rotate-[2deg]"
        aria-hidden
      >
        <p className="font-mono text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-muted">2026</p>
        <p className="text-[10px] sm:text-xs font-bold text-fg leading-tight">B.Sc. IT</p>
      </div>

      {/* Main Hero Image Container Card */}
      <div className="hero-image-container relative overflow-hidden rounded-[2rem] sm:rounded-[2.25rem] transition-all duration-500 shadow-2xl aspect-[4/5] w-full">
        {/* Dynamic Cursor-Following Glow Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-50 sm:opacity-60 transition-opacity duration-300" style={glowStyle} />

        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          width={960}
          height={1200}
          loading="eager"
        />

        {/* Bottom Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none z-10" />

        {/* Bottom-Left Overlay Text - Compact on mobile */}
        <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 space-y-0.5 sm:space-y-1 text-left pointer-events-none z-20">
          <p className="text-[8px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.28em] text-slate-300/90 font-mono leading-tight">
            POORNA DANUSHKA
          </p>
          <h3 className="font-display text-base sm:text-2xl font-bold tracking-tight text-white leading-tight">
            Full-Stack Developer
          </h3>
        </div>
      </div>
    </div>
  )
}
