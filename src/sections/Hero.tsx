import { ArrowDown, ArrowRight, ArrowDownRight, FileText, MapPin, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { HeroBackdrop } from '../components/HeroBackdrop'
import { ProfileMark } from '../components/ProfileMark'
import { SocialLinks } from '../components/SocialLinks'
import { TechIcon } from '../components/TechIcons'
import { TypewriterText } from '../components/TypewriterText'
import { curatedTechnologies, portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, scaleIn } from '../lib/motion'
import { scrollToId } from '../lib/utils'

export function Hero() {
  const reduced = usePrefersReducedMotion()

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-14 sm:pt-16 lg:min-h-[88svh] lg:pt-24"
    >
      <HeroBackdrop />

      <Container className="relative flex flex-1 flex-col justify-center my-auto pb-8 sm:pb-10 lg:pb-12">
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* MOBILE: Image First, Desktop: Image Right */}
          <motion.div
            variants={scaleIn(reduced)}
            initial="hidden"
            animate="visible"
            className="w-full lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last"
          >
            <ProfileMark className="w-full" />
          </motion.div>

          {/* CONTENT COLUMN */}
          <div className="flex flex-col items-center gap-3.5 sm:gap-5 lg:gap-6 text-center lg:col-span-7 lg:items-start lg:text-left">
            {/* Status Pill */}
            <motion.div
              variants={fadeUp(reduced)}
              initial="hidden"
              animate="visible"
              whileHover={reduced ? undefined : { scale: 1.03 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 sm:px-3.5 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-wider text-emerald-400 uppercase shadow-sm cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available
            </motion.div>

            {/* Main Title - Cleaner, Bigger Impact */}
            <motion.div
              variants={fadeUp(reduced)}
              initial="hidden"
              animate="visible"
              transition={{ delay: reduced ? 0 : 0.08 }}
              className="space-y-2 sm:space-y-3"
            >
              <h1 className="font-display text-3xl min-[380px]:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-indigo-500 via-accent to-accent-secondary bg-clip-text text-transparent">
                  Poorna
                </span>
              </h1>

              {/* Typewriter Role */}
              <div className="flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-2 text-xl min-[380px]:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-muted">
                <span aria-hidden className="hidden sm:inline font-mono text-sm min-[380px]:text-base sm:text-lg lg:text-xl font-semibold text-accent/70 select-none">
                  ~/
                </span>
                <TypewriterText
                  words={[
                    'Full-Stack Developer',
                    'Software Engineer',
                    'System Architect',
                    'Problem Solver',
                  ]}
                />
              </div>
            </motion.div>

            {/* Short Description - Only on Desktop */}
            <motion.p
              variants={fadeUp(reduced)}
              initial="hidden"
              animate="visible"
              transition={{ delay: reduced ? 0 : 0.14 }}
              className="hidden lg:block max-w-2xl text-base lg:text-lg xl:text-xl text-muted leading-relaxed"
            >
              Specializing in scalable web applications, enterprise security, real-time systems, and cloud infrastructure.
            </motion.p>

            {/* Location & University - Compact on Mobile */}
            <motion.div
              variants={fadeUp(reduced)}
              initial="hidden"
              animate="visible"
              transition={{ delay: reduced ? 0 : 0.2 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 text-[11px] sm:text-xs text-muted font-medium"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface/60 backdrop-blur-sm px-2.5 sm:px-3 py-1.5 shadow-sm transition hover:border-accent/40">
                <MapPin size={12} className="text-accent shrink-0" />
                <span className="font-semibold">Gampaha, LK</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface/60 backdrop-blur-sm px-2.5 sm:px-3 py-1.5 shadow-sm transition hover:border-accent/40">
                <Sparkles size={12} className="text-accent shrink-0" />
                <span className="font-semibold">University of Moratuwa · 2026</span>
              </span>
            </motion.div>

            {/* CTA Buttons - Mobile Optimized */}
            <motion.div
              variants={fadeUp(reduced)}
              initial="hidden"
              animate="visible"
              transition={{ delay: reduced ? 0 : 0.26 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-2 w-full sm:w-auto"
            >
              <motion.div 
                whileHover={reduced ? undefined : { scale: 1.05, y: -2 }} 
                whileTap={reduced ? undefined : { scale: 0.98 }} 
                className="w-full sm:w-auto"
              >
                <Button 
                  onClick={() => scrollToId('projects')} 
                  className="w-full sm:w-auto px-6 sm:px-7 py-3.5 text-sm font-bold shadow-lg shadow-accent/20"
                >
                  View Projects
                  <ArrowRight size={17} />
                </Button>
              </motion.div>

              <motion.div 
                whileHover={reduced ? undefined : { scale: 1.05, y: -2 }} 
                whileTap={reduced ? undefined : { scale: 0.98 }} 
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="secondary" 
                  onClick={() => scrollToId('contact')} 
                  className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold"
                >
                  Get in Touch
                  <ArrowDownRight size={17} />
                </Button>
              </motion.div>

              <motion.div 
                whileHover={reduced ? undefined : { scale: 1.05, y: -2 }} 
                whileTap={reduced ? undefined : { scale: 0.98 }} 
                className="w-full sm:w-auto lg:hidden"
              >
                <Button 
                  href={portfolio.cvUrl} 
                  variant="ghost" 
                  external 
                  className="w-full sm:w-auto px-5 py-3.5 text-sm font-semibold border border-border/60"
                >
                  <FileText size={16} className="text-accent" />
                  Résumé
                </Button>
              </motion.div>

              {/* Desktop: Resume button separate */}
              <motion.div 
                whileHover={reduced ? undefined : { scale: 1.05, y: -2 }} 
                whileTap={reduced ? undefined : { scale: 0.98 }} 
                className="hidden lg:block"
              >
                <Button 
                  href={portfolio.cvUrl} 
                  variant="secondary" 
                  external 
                  className="px-5 py-3.5 text-sm font-semibold"
                >
                  <FileText size={16} className="text-accent" />
                  Résumé
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp(reduced)}
              initial="hidden"
              animate="visible"
              transition={{ delay: reduced ? 0 : 0.32 }}
              className="pt-1"
            >
              <SocialLinks />
            </motion.div>
          </div>
        </div>
      </Container>

      {/* SCROLL DOWN INDICATOR */}
      <div className="relative mx-auto mb-6 sm:mb-8 flex flex-col items-center">
        <button
          type="button"
          onClick={() => scrollToId('about')}
          className="group flex flex-col items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-muted transition hover:text-accent focus:outline-none"
          aria-label="Scroll down to About section"
        >
          <span>Scroll</span>
          <span className="flex h-7 sm:h-8 w-5 items-center justify-center rounded-full border border-border group-hover:border-accent">
            <ArrowDown size={12} className="animate-bounce text-accent" />
          </span>
        </button>
      </div>

      {/* TECH MARQUEE DIVIDER */}
      <div
        aria-hidden
        className="relative border-y border-border bg-surface/40 py-2.5 sm:py-3 lg:py-3.5 backdrop-blur-sm [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="animate-marquee">
          {[...curatedTechnologies, ...curatedTechnologies].map((tech, i) => (
            <span
              key={`${tech.name}-${i}`}
              className="mx-4 sm:mx-6 inline-flex items-center gap-2 sm:gap-2.5 whitespace-nowrap text-xs sm:text-sm font-semibold text-muted"
            >
              <TechIcon iconKey={tech.iconKey} size={18} className="sm:w-5 sm:h-5" />
              <span className="hidden xs:inline">{tech.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
