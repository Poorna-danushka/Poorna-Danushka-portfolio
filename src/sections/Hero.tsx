import { ArrowDown, ArrowUpRight, FileDown, MapPin } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
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
    <section id="home" className="hero-shell relative overflow-hidden border-b border-border pt-28 sm:pt-36 lg:pt-24">
      <div className="hero-grid" aria-hidden="true" />
      <Container className="relative grid min-h-[calc(100svh-6rem)] items-center gap-12 pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.78fr)] lg:gap-20 lg:pb-20">
        <div className="relative z-10 max-w-3xl">
          <motion.div variants={fadeUp(reduced)} initial="hidden" animate="visible" className="eyebrow mb-7 flex items-center gap-3">
            <span className="size-2 rounded-full bg-accent shadow-[0_0_18px_var(--accent)]" /> Available for select projects
          </motion.div>
          <motion.p variants={fadeUp(reduced)} initial="hidden" animate="visible" className="mb-5 font-mono text-xs uppercase tracking-[.24em] text-muted">01 / Full-stack developer</motion.p>
          <motion.h1 variants={fadeUp(reduced)} initial="hidden" animate="visible" transition={{ delay: reduced ? 0 : .08 }} className="font-display text-[clamp(3.8rem,9vw,8.8rem)] leading-[.86] tracking-[-.075em]">
            Building digital<br /><span className="text-accent">systems with intent.</span>
          </motion.h1>
          <motion.p variants={fadeUp(reduced)} initial="hidden" animate="visible" transition={{ delay: reduced ? 0 : .16 }} className="mt-8 max-w-xl text-base leading-8 text-muted sm:text-lg">{person.heroDescription} Thoughtful interfaces, secure APIs, and resilient foundations for products people rely on.</motion.p>
          <motion.div variants={fadeUp(reduced)} initial="hidden" animate="visible" transition={{ delay: reduced ? 0 : .24 }} className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => scrollToId('projects')}>View selected work <ArrowUpRight data-icon="inline-end" /></Button>
            <Button href={portfolio.cvUrl} variant="secondary" external>Download résumé <FileDown data-icon="inline-end" /></Button>
          </motion.div>
          <motion.div variants={fadeUp(reduced)} initial="hidden" animate="visible" transition={{ delay: reduced ? 0 : .3 }} className="mt-12 flex flex-wrap items-center gap-4 text-xs text-muted">
            <span className="inline-flex items-center gap-2"><MapPin className="text-accent" /> {person.location}</span><span className="h-4 w-px bg-border" aria-hidden /><span>{person.university}</span>
          </motion.div>
        </div>
        <motion.div variants={scaleIn(reduced)} initial="hidden" animate="visible" className="relative mx-auto w-full max-w-[500px] lg:mx-0 lg:justify-self-end">
          <ProfileMark />
          <div className="mt-5 flex items-center justify-between border-t border-border pt-3 font-mono text-[10px] uppercase tracking-[.18em] text-muted"><span>Portrait / 2026</span><button type="button" onClick={() => scrollToId('about')} className="inline-flex items-center gap-2 text-accent transition-transform hover:translate-x-1">Explore <ArrowDown /></button></div>
        </motion.div>
      </Container>
      <div className="absolute bottom-8 right-8 hidden lg:block"><SocialLinks /></div>
    </section>
  )
}
