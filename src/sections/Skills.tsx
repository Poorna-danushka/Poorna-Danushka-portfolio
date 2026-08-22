import { motion } from 'motion/react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { SkillCard } from '../components/SkillCard'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, stagger } from '../lib/motion'

export function Skills() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Technical Skills"
          description="Technologies grouped by how I use them — without fake percentage scores."
        />
        <motion.div
          variants={stagger(reduced, 0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2"
        >
          {portfolio.skills.map((group) => (
            <motion.article
              key={group.id}
              variants={fadeUp(reduced)}
              className="rounded-3xl border border-border bg-elevated/80 p-5 sm:p-6 transition hover:-translate-y-0.5 hover:border-accent/30 motion-reduce:transform-none"
            >
              <h3 className="text-base font-semibold sm:text-lg">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
