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

  return (
    <div className="border-y border-border bg-elevated/50 py-6 sm:py-7">
      <Container>
        <div className="mb-5 flex items-center gap-3">
          <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
          <p className="eyebrow">Tools I build with</p>
        </div>
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12"
        >
          {technologies.map((name) => (
            <div
              key={name}
              className="group flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-bg/60 px-2 py-3 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-bg"
            >
              <img
                src={logos[name]}
                alt={`${name} logo`}
                className="size-8 object-contain grayscale transition duration-300 group-hover:grayscale-0"
                loading="lazy"
              />
              <span className="text-center text-[11px] font-medium leading-tight text-muted group-hover:text-fg">{name}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </div>
  )
}
