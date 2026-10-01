import { motion } from 'motion/react'
import { Container } from '../components/Container'
import { OrbitalTechRadar } from '../components/OrbitalTechRadar'
import { curatedTechnologies, portfolio, toolbelt } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, stagger } from '../lib/motion'

export function Skills() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="skills" className="relative overflow-hidden py-16 sm:py-20 lg:flex lg:min-h-[100svh] lg:items-center lg:pt-16 lg:pb-8">
      <Container>
        <OrbitalTechRadar technologies={curatedTechnologies} projects={portfolio.projects} />

        <motion.div
          variants={fadeUp(reduced)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 sm:mt-12 lg:hidden"
        >
          <div className="flex items-center gap-4">
            <h3 className="font-display text-xl font-semibold tracking-tight text-fg sm:text-2xl">
              Also in the toolbelt
            </h3>
            <span aria-hidden className="h-px flex-1 bg-border" />
            <span className="font-mono text-xs font-semibold text-muted">{toolbelt.length} more</span>
          </div>
          <motion.ul
            variants={stagger(reduced, 0.035)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="no-scrollbar mt-5 flex flex-wrap gap-2.5 lg:flex-nowrap lg:overflow-x-auto"
          >
            {toolbelt.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp(reduced)}
                className="shrink-0 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-xs font-medium text-muted transition duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-fg"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </Container>
    </section>
  )
}
