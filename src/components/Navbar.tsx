import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
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
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (id: string) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <motion.header
      initial={reduced ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.5 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          'mx-auto mt-3 max-w-6xl rounded-full border px-3 py-2 transition duration-300 sm:px-4',
          scrolled
            ? 'border-border bg-bg/85 shadow-lg backdrop-blur-xl'
            : 'border-transparent bg-bg/25 backdrop-blur-md',
        )}
      >
        <nav className="flex items-center justify-between gap-3" aria-label="Primary">
          <button
            type="button"
            onClick={() => go('home')}
            className="flex items-center gap-2 rounded-full px-2 py-1 text-left"
            aria-label="Go to home"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-xs font-bold text-accent-fg">
              PD
            </span>
            <span className="hidden text-sm font-semibold sm:block">{portfolio.person.firstName}</span>
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
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

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      {open ? (
        <div className="lg:hidden">
          <button
            type="button"
            className="fixed inset-0 z-40 bg-bg/70 backdrop-blur-sm"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-nav"
            className="relative z-50 mx-4 mt-3 rounded-3xl border border-border bg-elevated p-4 shadow-2xl"
          >
            <ul className="flex flex-col gap-1">
              {portfolio.navigation.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => go(item.id)}
                    aria-current={active === item.id ? 'true' : undefined}
                    className={cn(
                      'w-full rounded-2xl px-4 py-3 text-left text-base',
                      active === item.id ? 'bg-accent/15 font-semibold text-accent' : 'text-fg',
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </motion.header>
  )
}
