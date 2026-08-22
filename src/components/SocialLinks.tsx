import { Mail } from 'lucide-react'
import { Github, Linkedin } from './icons'
import { portfolio } from '../data/portfolio'
import { cn, resolveSocialHref } from '../lib/utils'

const icons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
}

type Props = {
  className?: string
  size?: number
}

export function SocialLinks({ className, size = 18 }: Props) {
  return (
    <ul className={cn('flex items-center gap-2', className)}>
      {portfolio.social.map((item) => {
        const Icon = icons[item.id]
        const href = resolveSocialHref(item.id, item.href)
        const configured = Boolean(href)

        return (
          <li key={item.id}>
            {configured ? (
              <a
                href={href}
                aria-label={item.label}
                target={item.id === 'email' ? undefined : '_blank'}
                rel={item.id === 'email' ? undefined : 'noreferrer noopener'}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-fg transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
              >
                <Icon size={size} />
              </a>
            ) : (
              <span
                aria-label={`${item.label} link not configured yet`}
                title="Update this link in src/data/portfolio.ts"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-border text-muted"
              >
                <Icon size={size} />
              </span>
            )}
          </li>
        )
      })}
    </ul>
  )
}
