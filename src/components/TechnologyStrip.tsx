import { motion } from 'motion/react'
import { portfolio } from '../data/portfolio'
import { Container } from './Container'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const logos: Record<string, string> = {
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  NestJS: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  AWS: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  Flutter: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
}

export function TechnologyStrip() {
  const reduced = usePrefersReducedMotion()
  const technologies = portfolio.skills.flatMap((group) => group.skills.map((skill) => skill.name)).filter((name) => logos[name]).filter((name, index, all) => all.indexOf(name) === index).slice(0, 10)
  return <div className="border-y border-border bg-elevated/50 py-5"><Container><div className="mb-4 flex items-center justify-between"><p className="eyebrow">Tools I build with</p><p className="font-mono text-[10px] uppercase tracking-[.18em] text-muted">Selected stack</p></div><motion.div initial={reduced ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-2 sm:grid-cols-5 lg:grid-cols-10">{technologies.map((name) => <div key={name} className="group flex min-h-20 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-bg/60 px-2 py-3 transition hover:-translate-y-1 hover:border-accent/50"><img src={logos[name]} alt={`${name} logo`} className="size-7 object-contain grayscale transition group-hover:grayscale-0" loading="lazy" /><span className="text-center text-[11px] font-medium text-muted group-hover:text-fg">{name}</span></div>)}</motion.div></Container></div>
}
