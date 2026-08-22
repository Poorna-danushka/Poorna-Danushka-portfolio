import type { ReactNode } from 'react'
import { cn } from '../lib/utils'

type ButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  type?: 'button' | 'submit'
  className?: string
  disabled?: boolean
  ariaLabel?: string
  external?: boolean
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  className,
  disabled,
  ariaLabel,
  external,
}: ButtonProps) {
  const styles = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-300',
    'hover:scale-[1.02] active:scale-[0.98] motion-reduce:transform-none disabled:pointer-events-none disabled:opacity-50',
    variant === 'primary' &&
      'bg-accent text-accent-fg shadow-[0_10px_30px_var(--glow)] hover:shadow-[0_14px_36px_var(--glow)]',
    variant === 'secondary' &&
      'border border-border bg-elevated/70 text-fg hover:border-accent/40',
    variant === 'ghost' && 'text-muted hover:text-fg',
    className,
  )

  if (href) {
    return (
      <a
        href={href}
        className={styles}
        aria-label={ariaLabel}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={styles} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
