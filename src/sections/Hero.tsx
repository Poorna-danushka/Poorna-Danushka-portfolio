import { ArrowDown, ArrowDownRight, ArrowRight, CheckCircle2, MapPin } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { HeroBackdrop } from '../components/HeroBackdrop'
import { ProfileMark } from '../components/ProfileMark'
import { SocialLinks } from '../components/SocialLinks'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, scaleIn } from '../lib/motion'
import { scrollToId } from '../lib/utils'

export function Hero() {
  const reduced = usePrefersReducedMotion()
  const { person } = portfolio

  return (
    <section id="home" className="relative flex min-h-svh flex-col overflow-hidden pt-24 sm:pt-28">
      <HeroBackdrop />
      <Container className="relative grid flex-1 items-center gap-12 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-8 lg:pt-6">
        <div>
          <motion.p
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.32em] text-accent"
          >
            <span className="h-px w-8 bg-accent" aria-hidden />
            {person.greeting}
          </motion.p>
          <motion.h1
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.08 }}
            className="mt-4 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            {person.name}
          </motion.h1>
          <motion.p
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.16 }}
            className="mt-5 text-lg text-muted sm:text-xl"
          >
            {person.shortTitle}
          </motion.p>
          <motion.p
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.22 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {person.heroDescription}
          </motion.p>
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.26 }}
            className="mt-5 flex flex-wrap gap-2 text-sm text-muted"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-elevated/70 px-3 py-1">
              <MapPin size={14} className="text-accent" />
              {person.location}
            </span>
            <span className="rounded-full border border-border bg-elevated/70 px-3 py-1">{person.university}</span>
          </motion.div>
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent">
              <CheckCircle2 size={14} aria-hidden />
              Open to opportunities
            </span>
          </motion.div>
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.34 }}
            className="flex flex-col items-stretch gap-3 min-[380px]:flex-row min-[380px]:flex-wrap min-[380px]:items-center"
          >
            <Button onClick={() => scrollToId('projects')}>
              View My Work
              <ArrowRight size={16} />
            </Button>
            <Button variant="secondary" onClick={() => scrollToId('contact')}>
              Let's Connect
              <ArrowDownRight size={16} />
            </Button>
          </motion.div>
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.38 }}
            className="mt-8"
          >
            <SocialLinks />
          </motion.div>
        </div>
        <motion.div variants={scaleIn(reduced)} initial="hidden" animate="visible">
          <ProfileMark />
        </motion.div>
      </Container>
      <button
        type="button"
        onClick={() => scrollToId('about')}
        className="relative mx-auto mb-8 flex flex-col items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted"
        aria-label="Scroll to about section"
      >
        <span className="grid h-10 w-6 place-items-center rounded-full border border-border">
          <ArrowDown size={14} className="motion-safe:animate-bounce" />
        </span>
        Scroll
      </button>
    </section>
  )
}
