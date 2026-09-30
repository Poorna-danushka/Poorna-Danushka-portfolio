import { motion } from 'motion/react'
import { Container } from './Container'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const logos: Record<string, string> = {
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  NestJS: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  AWS: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  Flutter: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
}

export function TechnologyStrip() {
  const reduced = usePrefersReducedMotion()
  const selectedStack = ['React', 'TypeScript', 'JavaScript', 'Node.js', 'NestJS', 'PostgreSQL', 'AWS', 'Python', 'Git', 'Flutter']
  const technologies = selectedStack.filter((name) => logos[name])
  const loop = [...technologies, ...technologies]

  return (
    <section aria-labelledby="tools-heading" className="border-y border-border bg-elevated/50 py-7 sm:py-9">
      <Container>
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 flex items-end justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <motion.span
              aria-hidden="true"
              className="size-2 rounded-full bg-accent"
              animate={reduced ? undefined : { scale: [1, 1.5, 1], opacity: [1, 0.55, 1] }}
              transition={reduced ? undefined : { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <h2 id="tools-heading" className="eyebrow">Tools I build with</h2>
          </div>
        </motion.div>

        <div className="tools-marquee" aria-label="Technology stack">
          <motion.div
            className="tools-marquee-track"
            animate={reduced ? undefined : { x: ['0%', '-50%'] }}
            transition={reduced ? undefined : { duration: 24, repeat: Infinity, ease: 'linear' }}
          >
            {loop.map((name, index) => (
              <motion.div
                key={`${name}-${index}`}
                whileHover={reduced ? undefined : { y: -7, scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                className="tools-card group"
              >
                <span className="tools-card-icon"><img src={logos[name]} alt="" aria-hidden="true" loading="lazy" /></span>
                <span>{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
