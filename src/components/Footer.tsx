import { portfolio } from '../data/portfolio'
import { scrollToId } from '../lib/utils'
import { Container } from './Container'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-2xl">{portfolio.person.name}</p>
          <p className="mt-2 text-sm text-muted">{portfolio.person.shortTitle}</p>
          <SocialLinks className="mt-5" />
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            {portfolio.navigation.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  className="text-muted transition hover:text-fg"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container className="mt-10">
        <p className="text-sm text-muted">
          © 2026 {portfolio.person.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
