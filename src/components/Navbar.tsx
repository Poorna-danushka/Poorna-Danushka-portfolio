import { Menu, X } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
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
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const go = (id: string) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <motion.header
      initial={reduced ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.5 }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-8"
    >
      <div className={cn('mx-auto max-w-7xl border transition duration-300', scrolled ? 'border-border bg-bg/88 shadow-lg backdrop-blur-xl' : 'border-transparent bg-bg/30 backdrop-blur-md')}>
        <nav className="flex items-center justify-between px-4 py-3 sm:px-5" aria-label="Primary">
          <button type="button" onClick={() => go('home')} className="flex items-center gap-3 text-left">
            <span className="grid size-8 place-items-center rounded-full bg-accent text-xs font-bold text-accent-fg">PD</span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">Poorna Danushka</span>
          </button>
          <div className="hidden items-center gap-1 lg:flex">
            {portfolio.navigation.filter((item) => item.id !== 'home').map((item) => (
              <button key={item.id} type="button" onClick={() => go(item.id)} aria-current={active === item.id ? 'page' : undefined} className={cn('relative px-3 py-2 text-xs font-semibold transition', active === item.id ? 'text-accent' : 'text-muted hover:text-fg')}>
                {item.label}
                {active === item.id && <motion.span layoutId="nav-active" className="absolute inset-x-3 -bottom-1 h-px bg-accent" />}
              </button>
            ))}
            <span className="mx-2 h-5 w-px bg-border" aria-hidden />
            <ThemeToggle />
            <a href={portfolio.cvUrl} target="_blank" rel="noreferrer" className="ml-2 border border-border px-3 py-2 text-xs font-semibold transition hover:border-accent hover:text-accent">Resume</a>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} className="grid size-9 place-items-center border border-border">
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>
        {open && <div id="mobile-menu" className="border-t border-border px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {portfolio.navigation.map((item) => <button key={item.id} type="button" onClick={() => go(item.id)} className={cn('px-3 py-3 text-left text-sm font-semibold', active === item.id ? 'bg-accent/10 text-accent' : 'text-muted')}>{item.label}</button>)}
          </div>
        </div>}
      </div>
    </motion.header>
  )
}
