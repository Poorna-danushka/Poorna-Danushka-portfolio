import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, FileText, Sparkles } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useScrolled } from '../hooks/useScrolled'
import { cn, scrollToId } from '../lib/utils'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
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

  // Handle ESC key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        closeMobile()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileOpen, closeMobile])

  // Prevent scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

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
            'mx-auto flex max-w-[1440px] items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300',
            scrolled
              ? 'border-border bg-background/85 shadow-lg backdrop-blur-xl'
              : 'border-transparent bg-background/40 backdrop-blur-md',
          )}
        >
          {/* Logo Brand */}
          <button
            type="button"
            onClick={() => go('home')}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
            aria-label="Poorna Danushka Portfolio Home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-fg font-bold text-sm shadow-md transition-transform duration-300 group-hover:scale-105">
              PD
            </div>
            <span className="hidden font-display text-base font-bold tracking-tight text-foreground sm:inline-block">
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
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={toggleMobile}
              aria-label={mobileOpen ? 'Close menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground transition hover:border-accent"
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
                  className="rounded-full p-1 text-muted hover:text-foreground"
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
