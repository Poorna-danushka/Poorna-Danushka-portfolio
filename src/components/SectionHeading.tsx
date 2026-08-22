import { motion } from 'motion/react'
import { fadeUp } from '../lib/motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type Props = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: Props) {
  const reduced = usePrefersReducedMotion()

  return (
    <motion.div
      variants={fadeUp(reduced)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-4xl leading-tight text-fg sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p> : null}
    </motion.div>
  )
}
