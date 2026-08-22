export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="grid-bg absolute inset-0 opacity-70" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute right-8 top-24 h-80 w-80 rounded-full bg-accent/12 blur-3xl" />
      <svg className="absolute inset-x-0 bottom-8 mx-auto h-64 w-full max-w-5xl opacity-35" viewBox="0 0 800 240">
        <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7">
          <circle cx="400" cy="120" r="36" />
          <ellipse cx="400" cy="120" rx="130" ry="38" transform="rotate(16 400 120)" />
          <ellipse cx="400" cy="120" rx="200" ry="50" transform="rotate(-14 400 120)" />
        </g>
        {Array.from({ length: 20 }).map((_, i) => (
          <circle
            key={i}
            className="motion-safe:animate-pulse"
            cx={36 + i * 38}
            cy={36 + ((i * 41) % 168)}
            r={i % 3 === 0 ? 2.3 : 1.3}
            fill="currentColor"
            opacity={0.32}
          />
        ))}
      </svg>
    </div>
  )
}
