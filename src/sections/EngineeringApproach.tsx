import { motion } from 'motion/react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, stagger } from '../lib/motion'

export function EngineeringApproach() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="approach" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Engineering Philosophy"
          title="How I Build Software"
          description="A disciplined, security-first 6-step methodology for turning real-world requirements into maintainable, production-ready systems."
        />

        <motion.div
          variants={stagger(reduced, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolio.engineeringSteps.map((step) => (
            <motion.div
              key={step.step}
              variants={fadeUp(reduced)}
              className="group relative flex flex-col justify-between rounded-3xl border border-border bg-surface/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl font-black text-accent/30 group-hover:text-accent transition-colors">
                    {step.step}
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 text-[11px] font-bold text-muted uppercase">
                    {step.subtitle}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap gap-1.5">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border/60 bg-background/60 px-2 py-0.5 text-[11px] font-semibold text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
