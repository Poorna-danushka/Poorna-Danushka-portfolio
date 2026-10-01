import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, stagger } from '../lib/motion'

export function Journey() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="journey" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Milestones & Timeline"
          title="Engineering Journey"
          description="Key progression steps across software development, degree studies, and hardware robotics."
        />

        <motion.div
          variants={stagger(reduced, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 relative max-w-3xl mx-auto space-y-8 before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-border/60"
        >
          {portfolio.journey.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp(reduced)}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline Node Icon */}
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-accent bg-surface text-accent shadow shrink-0 z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <CheckCircle2 size={16} />
              </div>

              {/* Card Container */}
              <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] rounded-3xl border border-border bg-surface p-5 sm:p-6 shadow-sm transition hover:border-accent/40">
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent">{item.context}</span>
                <h3 className="mt-1 font-display text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
