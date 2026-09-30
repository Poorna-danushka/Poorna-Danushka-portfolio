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
    <section id="home" className="hero-shell relative overflow-hidden pt-28 pb-12 sm:pt-36 lg:min-h-[calc(100svh-4.5rem)] lg:pt-24 lg:pb-8">
      <div className="hero-orbit" aria-hidden="true" />
      <Container className="relative grid items-end gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-8">
        <div className="relative z-10 pb-2 lg:pb-16">
          <motion.div variants={fadeUp(reduced)} initial="hidden" animate="visible" className="mb-8 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.2em] text-accent">
            <span className="inline-block size-2 rounded-full bg-accent shadow-[0_0_18px_var(--accent)]" /> Available for select projects
          </motion.div>
          <motion.p variants={fadeUp(reduced)} initial="hidden" animate="visible" className="mb-4 font-mono text-xs uppercase tracking-[.24em] text-muted">01 — Introduction</motion.p>
          <motion.h1 variants={fadeUp(reduced)} initial="hidden" animate="visible" transition={{ delay: reduced ? 0 : .08 }} className="max-w-4xl font-display text-[clamp(4.2rem,10.5vw,10.5rem)] leading-[.78] tracking-[-.075em]">
            Poorna<br /><span className="text-accent">Danushka</span>
          </motion.h1>
          <motion.div variants={fadeUp(reduced)} initial="hidden" animate="visible" transition={{ delay: reduced ? 0 : .16 }} className="mt-9 grid max-w-2xl gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-md text-lg leading-relaxed text-muted sm:text-xl">{person.heroDescription} I build digital products that feel as considered as they function.</p>
            <div className="hidden text-right font-mono text-[10px] uppercase leading-loose tracking-[.18em] text-muted sm:block">Full-stack<br />engineering<br /><span className="text-accent">with intent</span></div>
          </motion.div>
          <motion.div variants={fadeUp(reduced)} initial="hidden" animate="visible" transition={{ delay: reduced ? 0 : .24 }} className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => scrollToId('projects')}>Explore my work <ArrowUpRight data-icon="inline-end" /></Button>
            <Button href={portfolio.cvUrl} variant="secondary" external>Resume <FileDown data-icon="inline-end" /></Button>
          </motion.div>
          <motion.div variants={fadeUp(reduced)} initial="hidden" animate="visible" transition={{ delay: reduced ? 0 : .3 }} className="mt-10 flex flex-wrap items-center gap-4 text-xs text-muted">
            <span className="inline-flex items-center gap-2"><MapPin className="text-accent" />{person.location}</span><span className="h-4 w-px bg-border" aria-hidden /><span>{person.university}</span>
          </motion.div>
        </div>
        <motion.div variants={scaleIn(reduced)} initial="hidden" animate="visible" className="relative mx-auto w-full max-w-[530px] lg:mr-0">
          <div className="portrait-label absolute -left-4 top-12 z-20 hidden -rotate-90 origin-left font-mono text-[10px] uppercase tracking-[.2em] text-muted sm:block">Portrait / 2026</div>
          <ProfileMark />
          <div className="mt-4 flex items-center justify-between border-t border-border pt-3 font-mono text-[10px] uppercase tracking-[.2em] text-muted"><span>Based in {person.location}</span><button type="button" onClick={() => scrollToId('about')} className="inline-flex items-center gap-2 text-accent transition-transform hover:translate-x-1">Scroll to explore <ArrowDown /></button></div>
        </motion.div>
      </Container>
      <div className="absolute bottom-6 right-8 hidden lg:block"><SocialLinks /></div>
    </section>
  )
}
