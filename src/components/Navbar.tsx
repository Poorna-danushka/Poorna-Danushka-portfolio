import { motion } from 'motion/react'
import { portfolio } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useScrolled } from '../hooks/useScrolled'
import { cn, scrollToId } from '../lib/utils'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const ids = portfolio.navigation.map((item) => item.id)
  const active = useActiveSection(ids)
  const scrolled = useScrolled()
  const reduced = usePrefersReducedMotion()
  const go = (id: string) => {
    scrollToId(id)
  }

  return (
    <motion.header
      initial={reduced ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.5 }}
      className="fixed inset-x-0 top-0 z-50 hidden lg:block"
    >
      <div
        className={cn(
          'mx-2 mt-2 max-w-6xl rounded-full border px-2 py-2 transition duration-300 sm:mx-4 sm:mt-3 sm:px-4 lg:mx-auto',
          scrolled
            ? 'border-border bg-bg/85 shadow-lg backdrop-blur-xl'
            : 'border-transparent bg-bg/25 backdrop-blur-md',
        )}
      >
        <nav className="flex items-center justify-center gap-3" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {portfolio.navigation.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => go(item.id)}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={cn(
                    'rounded-full px-3 py-1.5 text-sm transition',
                    active === item.id ? 'bg-accent/15 font-semibold text-accent' : 'text-muted hover:text-fg',
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </motion.header>
  )
}
