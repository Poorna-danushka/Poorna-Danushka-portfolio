import { motion } from 'motion/react'
import { GraduationCap, MapPin, Award } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, stagger } from '../lib/motion'

export function Education() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="education" className="py-20 sm:py-28 bg-surface/30 border-y border-border/50">
      <Container>
        <SectionHeading
          eyebrow="Academic Background"
          title="Education & Certifications"
          description="Formal degree studies at the University of Moratuwa and specialized full-stack product engineering bootcamp qualifications."
        />

        <motion.div
          variants={stagger(reduced, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 space-y-6 max-w-4xl mx-auto"
        >
          {portfolio.education.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp(reduced)}
              className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-sm transition hover:border-accent/40"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border/60 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">{item.institution}</h3>
                    <p className="text-xs font-semibold text-accent">{item.qualification}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                    <Award size={12} />
                    {item.status}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted leading-relaxed">{item.description}</p>

              {item.subjects && item.subjects.length > 0 && (
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted mb-2">Subject Performance</p>
                  <div className="flex flex-wrap gap-2">
                    {item.subjects.map((sub) => (
                      <span
                        key={sub.name}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background px-3 py-1 text-xs font-semibold text-foreground"
                      >
                        <span>{sub.name}:</span>
                        <span className="text-accent font-bold">{sub.grade}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4 flex items-center gap-1.5 text-xs text-muted">
                <MapPin size={13} className="text-accent" />
                <span>{item.location}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
