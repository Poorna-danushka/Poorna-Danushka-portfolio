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
    <section id="services" className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Focus" title="What I Do" />
        <motion.div
          variants={stagger(reduced)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-5 sm:grid-cols-2"
        >
          {portfolio.services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <motion.article
                key={service.id}
                variants={fadeUp(reduced)}
                className="rounded-3xl border border-border bg-elevated/80 p-6 transition hover:-translate-y-1 hover:border-accent/35 motion-reduce:transform-none"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-border text-accent">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
