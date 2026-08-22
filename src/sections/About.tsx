import { motion } from 'motion/react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, stagger } from '../lib/motion'

export function About() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Profile" title="About Me" />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>{portfolio.person.introduction}</p>
            <p>
              As an IT undergraduate at {portfolio.person.university}, I am interested in software
              engineering and full-stack development — from web and backend systems to databases,
              cloud technologies, cybersecurity, software architecture, and problem solving.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-elevated/80 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Currently Learning</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {portfolio.currentlyLearning.map((item) => (
                <li key={item} className="rounded-full border border-border px-3 py-1.5 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <motion.ul
          variants={stagger(reduced)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {portfolio.stats.map((stat) => (
            <motion.li
              key={stat.label}
              variants={fadeUp(reduced)}
              className="rounded-3xl border border-border bg-elevated/80 p-6"
            >
              <p className="font-display text-4xl text-accent">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  )
}
