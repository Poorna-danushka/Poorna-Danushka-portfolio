import { portfolio } from '../data/portfolio'
import { SocialLinks } from './SocialLinks'
import { scrollToId } from '../lib/utils'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
              Poorna Danushka Jayasundara
            </h3>
            <p className="text-xs font-semibold text-accent">Full-Stack Developer & Software Engineer</p>
          </div>

          {/* Quick Nav Links */}
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-muted">
              {portfolio.navigation.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollToId(item.id)}
                    className="hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-8 border-t border-border/60 pt-6 text-center text-xs text-muted">
          <p>© 2026 Poorna Danushka Jayasundara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
