import { ArrowDown, ArrowDownRight, ArrowRight, MapPin } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { HeroBackdrop } from '../components/HeroBackdrop'
import { ProfileMark } from '../components/ProfileMark'
import { SocialLinks } from '../components/SocialLinks'
import { ThemeToggle } from '../components/ThemeToggle'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, scaleIn } from '../lib/motion'
import { scrollToId } from '../lib/utils'

export function Hero() {
  const reduced = usePrefersReducedMotion()
  const { person } = portfolio

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden py-4 sm:py-6 lg:justify-between lg:pt-28 lg:pb-8"
    >
      <HeroBackdrop />

      {/* MOBILE TOP-RIGHT THEME TOGGLE (< lg) */}
      <div className="absolute top-3 right-4 z-30 lg:hidden">
        <ThemeToggle />
      </div>

      <Container className="relative flex flex-1 flex-col justify-center items-center my-auto lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:py-0">
        {/* MOBILE / TABLET CENTERED FIRST VIEW (< lg) */}
        <div className="flex flex-col items-center justify-center text-center my-auto w-full max-w-lg lg:hidden">
          {/* 1. HELLO / INTRO AT TOP (with generous top padding) */}
          <motion.p
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-accent sm:text-sm pt-1 sm:pt-2"
          >
            <span className="h-px w-6 bg-accent sm:w-8" aria-hidden />
            {person.greeting}
            <span className="h-px w-6 bg-accent sm:w-8" aria-hidden />
          </motion.p>

          {/* 2. PROFILE IMAGE (with generous padding before and after image) */}
          <motion.div
            variants={scaleIn(reduced)}
            initial="hidden"
            animate="visible"
            className="mt-6 mb-5 w-[clamp(145px,38vw,210px)] shrink-0 sm:mt-8 sm:mb-7 sm:w-52"
          >
            <ProfileMark className="max-w-none" />
          </motion.div>

          {/* 3. NAME (with comfortable spacing) */}
          <motion.h1
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.08 }}
            className="font-display text-[clamp(1.65rem,5.2vw,2.75rem)] leading-[1.15] tracking-tight text-fg sm:text-5xl"
          >
            {person.name}
          </motion.h1>

          {/* 4. PROFESSIONAL / STUDENT TITLE (with padding after name) */}
          <motion.p
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.14 }}
            className="mt-3 text-xs font-semibold text-accent min-[380px]:text-sm sm:mt-4 sm:text-lg"
          >
            {person.shortTitle}
          </motion.p>

          {/* 5. SHORT INTRODUCTION / HERO DESCRIPTION (with padding after title) */}
          <motion.p
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.2 }}
            className="mt-3.5 max-w-md text-xs leading-relaxed text-muted min-[380px]:text-sm sm:mt-4 sm:text-base px-2"
          >
            {person.heroDescription}
          </motion.p>

          {/* 6. MAIN CONTACT / DETAILS (Location & University badges with padding after description) */}
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.26 }}
            className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-muted sm:mt-5 sm:text-sm"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-elevated/70 px-3 py-1.5">
              <MapPin size={13} className="text-accent shrink-0" />
              {person.location}
            </span>
            <span className="rounded-full border border-border bg-elevated/70 px-3 py-1.5">
              {person.university}
            </span>
          </motion.div>

          {/* 7. CTA BUTTONS (with padding after badges) */}
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.32 }}
            className="mt-5 flex w-full max-w-xs flex-row items-center justify-center gap-3 sm:mt-6 sm:max-w-sm"
          >
            <Button onClick={() => scrollToId('projects')} className="flex-1 text-xs sm:text-sm py-2.5">
              View Work
              <ArrowRight size={15} />
            </Button>
            <Button variant="secondary" onClick={() => scrollToId('contact')} className="flex-1 text-xs sm:text-sm py-2.5">
              Connect
              <ArrowDownRight size={15} />
            </Button>
          </motion.div>

          {/* 8. SOCIAL LINKS (with padding after buttons) */}
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.38 }}
            className="mt-4.5 sm:mt-6"
          >
            <SocialLinks />
          </motion.div>
        </div>

        {/* DESKTOP TWO-COLUMN COMPOSITION (lg:) */}
        <div className="hidden lg:block">
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
            className="mt-4 font-display text-6xl leading-[1.05] xl:text-7xl"
          >
            {person.name}
          </motion.h1>
          <motion.p
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.16 }}
            className="mt-5 text-xl text-muted"
          >
            {person.shortTitle}
          </motion.p>
          <motion.p
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.22 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {person.heroDescription}
          </motion.p>
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.26 }}
            className="mt-7 flex flex-wrap gap-2 text-sm text-muted"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-elevated/70 px-3 py-1">
              <MapPin size={14} className="text-accent" />
              {person.location}
            </span>
            <span className="rounded-full border border-border bg-elevated/70 px-3 py-1">
              {person.university}
            </span>
          </motion.div>
          <motion.div
            variants={fadeUp(reduced)}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduced ? 0 : 0.34 }}
            className="mt-8 flex items-center gap-4"
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

        {/* DESKTOP PROFILE IMAGE (lg:) */}
        <motion.div
          variants={scaleIn(reduced)}
          initial="hidden"
          animate="visible"
          className="hidden w-full min-w-0 self-center lg:block"
        >
          <ProfileMark />
        </motion.div>
      </Container>

      {/* SCROLL INDICATOR */}
      <button
        type="button"
        onClick={() => scrollToId('about')}
        className="relative mx-auto mt-1 flex flex-col items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-muted transition hover:text-accent sm:text-xs"
        aria-label="Scroll to about section"
      >
        <span className="grid h-7 w-4.5 place-items-center rounded-full border border-border sm:h-8 sm:w-5">
          <ArrowDown size={11} className="motion-safe:animate-bounce" />
        </span>
        Scroll
      </button>
    </section>
  )
}
