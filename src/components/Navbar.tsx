import { useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, FileText, Sparkles } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { useFocusTrap } from '../hooks/useFocusTrap'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useScrolled } from '../hooks/useScrolled'
import { cn, scrollToId } from '../lib/utils'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const ids = portfolio.navigation.map((item) => item.id)
  const active = useActiveSection(ids)
  const scrolled = useScrolled()
  const reduced = usePrefersReducedMotion()

  const toggleMobile = () => setMobileOpen((prev) => !prev)
  const closeMobile = useCallback(() => setMobileOpen(false), [])

  const go = (id: string) => {
    scrollToId(id)
    closeMobile()
  }

  useFocusTrap(mobileOpen, mobileMenuRef, closeMobile)

  return (
    <>
      <motion.header
        initial={reduced ? false : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduced ? 0 : 0.5 }}
        className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-6 lg:px-8"
      >
        <div
          className={cn(
            'mx-auto flex max-w-[1440px] items-center justify-between rounded-2xl border px-3 py-2 transition-all duration-300 sm:rounded-full sm:px-4 sm:py-2.5',
            scrolled
              ? 'border-border bg-background/85 shadow-lg backdrop-blur-xl'
              : 'border-transparent bg-background/40 backdrop-blur-md',
          )}
        >
          {/* Logo Brand */}
          <button
            type="button"
            onClick={() => go('home')}
            className="group min-w-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Poorna Danushka Portfolio Home"
          >
            <span className="truncate font-display text-sm font-bold tracking-tight text-foreground sm:text-base">
              Poorna Danushka
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary Desktop Navigation">
            <ul className="flex items-center gap-1">
              {portfolio.navigation.map((item) => {
                const isActive = active === item.id
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => go(item.id)}
                      aria-current={isActive ? 'true' : undefined}
                      className={cn(
                        'relative rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide transition duration-200',
                        isActive
                          ? 'text-accent font-semibold'
                          : 'text-muted hover:text-foreground',
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activePill"
                          className="absolute inset-0 rounded-full bg-accent/15 border border-accent/30"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Desktop Controls (Theme Toggle & Resume Button) */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={portfolio.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-foreground shadow-sm transition hover:border-accent hover:text-accent"
            >
              <FileText size={14} className="text-accent" />
              <span>Résumé</span>
            </a>
          </div>

          {/* Mobile Right Controls (Theme Toggle + Hamburger) */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={toggleMobile}
              aria-label={mobileOpen ? 'Close menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              aria-hidden
            />

            {/* Slide-Down Menu Drawer */}
            <motion.div
              ref={mobileMenuRef}
              id="mobile-navigation-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-3 top-16 z-50 rounded-3xl border border-border bg-surface/95 p-6 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-accent" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">Navigation</span>
                </div>
                <button
                  type="button"
                  onClick={closeMobile}
                  aria-label="Close navigation menu"
                  className="rounded-full p-2 text-muted transition hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <X size={18} />
                </button>
              </div>

              <ul className="mt-4 space-y-1">
                {portfolio.navigation.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => go(item.id)}
                      aria-current={active === item.id ? 'page' : undefined}
                      className={cn(
                        'flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition',
                        active === item.id
                          ? 'bg-accent/15 text-accent'
                          : 'text-foreground hover:bg-background/60',
                      )}
                    >
                      <span>{item.label}</span>
                      {active === item.id && <span className="h-2 w-2 rounded-full bg-accent" />}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                <a
                  href={portfolio.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-xs font-bold text-accent-fg shadow"
                >
                  <FileText size={15} />
                  <span>Download Résumé</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
