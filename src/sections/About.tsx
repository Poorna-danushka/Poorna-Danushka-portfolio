import { motion } from 'motion/react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, stagger } from '../lib/motion'

export function About() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Developer Identity"
          title="About Me"
          description="Building scalable software systems with a focus on clean client-server architecture, enterprise-grade security, and real-time user experiences."
        />

        <div className="mt-12 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Main Story & Introduction */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 rounded-3xl border border-border bg-surface/80 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-muted">
              <p className="font-semibold text-foreground text-lg sm:text-xl">
                I'm Poorna Danushka — an Information Technology undergraduate at the University of Moratuwa and a passionate Full-Stack Developer & Software Engineer.
              </p>
              <p>
                My engineering focus revolves around crafting end-to-end web applications, designing robust REST/NestJS backends, modeling relational database schemas, and embedding multi-role security mechanics (JWT HttpOnly cookies, RBAC, CSRF protection).
              </p>
              <p>
                Whether building real-time collaborative platforms like Orbit, healthcare platforms like ECMS, or autonomous physical computing systems, I aim for production cleanliness, resilience, and speed.
              </p>
            </div>

            <div className="pt-4 border-t border-border/60">
              <p className="text-xs font-bold uppercase tracking-wider text-accent mb-3">Core Engineering Focus</p>
              <div className="flex flex-wrap gap-2">
                {['Full-Stack Development', 'Clean Architecture', 'API & Database Security', 'Real-Time WebSockets', 'Cloud Deployment'].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground shadow-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Currently Learning & Quick Stats */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-3xl border border-border bg-surface/80 p-6 shadow-sm backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-accent mb-3">Currently Expanding Expertise</p>
              <ul className="space-y-2.5">
                {portfolio.currentlyLearning.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* University & Degree Highlight */}
            <div className="rounded-3xl border border-accent/20 bg-accent/5 p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">Academic Foundation</p>
              <h3 className="mt-2 font-display text-lg font-bold text-foreground">{portfolio.person.university}</h3>
              <p className="text-sm font-medium text-muted">{portfolio.person.degree}</p>
              <p className="mt-2 text-xs text-muted">Focus on software engineering, system architecture, database modeling, and algorithms.</p>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <motion.ul
          variants={stagger(reduced, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {portfolio.stats.map((stat) => (
            <motion.li
              key={stat.label}
              variants={fadeUp(reduced)}
              className="rounded-2xl border border-border bg-surface/90 p-5 text-center shadow-sm transition hover:border-accent/40"
            >
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-accent">{stat.value}</p>
              <p className="mt-2 text-xs font-semibold text-muted leading-tight">{stat.label}</p>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  )
}
