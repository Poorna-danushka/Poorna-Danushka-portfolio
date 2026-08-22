import type { ReactNode } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Github, Linkedin } from '../components/icons'
import { ContactForm } from '../components/ContactForm'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'
import { isPlaceholder, resolveSocialHref } from '../lib/utils'

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: (props: { size?: number; className?: string }) => ReactNode
  label: string
  value: string
  href?: string
}) {
  const content = href ? (
    <a href={href} className="text-fg hover:text-accent" target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer noopener">
      {value}
    </a>
  ) : (
    <span className="text-muted">{value}</span>
  )

  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-elevated/80 p-4">
      <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-accent">
        <Icon size={18} />
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
        <p className="mt-1 text-sm">{content}</p>
      </div>
    </div>
  )
}

export function Contact() {
  const github = resolveSocialHref('github', portfolio.contact.github)
  const linkedin = resolveSocialHref('linkedin', portfolio.contact.linkedin)
  const email = resolveSocialHref('email', portfolio.contact.email)

  return (
    <section id="contact" className="section-band py-24 sm:py-32">
      <Container>
        <SectionHeading
          title="Let's Build Something Together"
          description="Have a project idea, collaboration opportunity, or just want to connect? Feel free to reach out."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            <ContactRow
              icon={Mail}
              label="Email"
              value={isPlaceholder(portfolio.contact.email) ? 'YOUR_EMAIL' : portfolio.contact.email}
              href={email}
            />
            <ContactRow
              icon={Phone}
              label="Phone"
              value={portfolio.contact.phone}
              href={`tel:+94${portfolio.contact.phone.replace(/\s+/g, '').replace(/^0/, '')}`}
            />
            <ContactRow icon={MapPin} label="Location" value={portfolio.contact.location} />
            <ContactRow
              icon={Github}
              label="GitHub"
              value={isPlaceholder(portfolio.contact.github) ? 'YOUR_GITHUB_URL' : portfolio.contact.github}
              href={github}
            />
            <ContactRow
              icon={Linkedin}
              label="LinkedIn"
              value={isPlaceholder(portfolio.contact.linkedin) ? 'YOUR_LINKEDIN_URL' : portfolio.contact.linkedin}
              href={linkedin}
            />
          </div>
          <ContactForm />
        </div>
      </Container>
    </section>
  )
}
