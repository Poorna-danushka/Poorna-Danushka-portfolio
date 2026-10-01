import { motion } from 'motion/react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function HeroBackdrop() {
  const reduced = usePrefersReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Grid Pattern */}
      <div className="grid-pattern absolute inset-0 opacity-60" />

      {/* Floating Animated Gradient Orbs */}
      <motion.div
        animate={reduced ? undefined : { y: [0, -25, 0], x: [0, 15, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-20 top-10 h-96 w-96 rounded-full bg-accent/20 blur-[100px]"
      />

      <motion.div
        animate={reduced ? undefined : { y: [0, 20, 0], x: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-0 top-32 h-[30rem] w-[30rem] rounded-full bg-indigo-500/15 blur-[120px]"
      />

      <motion.div
        animate={reduced ? undefined : { y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/3 bottom-10 h-80 w-80 rounded-full bg-sky-400/15 blur-[90px]"
      />

      {/* Interactive Floating Nodes */}
      <svg className="absolute inset-x-0 bottom-6 mx-auto h-72 w-full max-w-6xl opacity-30" viewBox="0 0 800 240">
        <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6">
          <circle cx="400" cy="120" r="40" />
          <ellipse cx="400" cy="120" rx="150" ry="42" transform="rotate(16 400 120)" />
          <ellipse cx="400" cy="120" rx="230" ry="58" transform="rotate(-14 400 120)" />
        </g>
        {Array.from({ length: 24 }).map((_, i) => (
          <circle
            key={i}
            className="motion-safe:animate-pulse"
            cx={28 + i * 33}
            cy={24 + ((i * 43) % 180)}
            r={i % 3 === 0 ? 2.5 : 1.5}
            fill="currentColor"
            opacity={0.35}
          />
        ))}
      </svg>
    </div>
  )
}
