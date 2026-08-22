import { Cloud, Database, Layers, Server } from 'lucide-react'
import { motion } from 'motion/react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, stagger } from '../lib/motion'

const icons = {
  layers: Layers,
  server: Server,
  database: Database,
  cloud: Cloud,
}

export function Services() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow="Focus" title="What I Do" />
        <motion.div
          variants={stagger(reduced)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 sm:grid-cols-2"
        >
          {portfolio.services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <motion.article
                key={service.id}
                variants={fadeUp(reduced)}
                className="rounded-3xl border border-border bg-elevated/80 p-5 sm:p-6 transition hover:-translate-y-1 hover:border-accent/35 motion-reduce:transform-none"
              >
                <span className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-2xl border border-border text-accent">
                  <Icon size={18} />
                </span>
                <h3 className="mt-3.5 text-lg font-semibold sm:mt-4 sm:text-xl">{service.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">{service.description}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
