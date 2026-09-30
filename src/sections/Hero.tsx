import { ArrowDownRight, ArrowRight, FileDown, MapPin } from 'lucide-react'
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
    <section id="home" className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20 lg:min-h-[100svh] lg:pt-32 lg:pb-10">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.72fr)] lg:gap-20">
        <div>
          <motion.p variants={fadeUp(reduced)} initial="hidden" animate="visible" className="eyebrow flex items-center gap-3"><span className="h-px w-8 bg-accent" aria-hidden />Available for opportunities</motion.p>
          <motion.h1 variants={fadeUp(reduced)} initial="hidden" animate="visible" transition={{ delay: reduced ? 0 : 0.08 }} className="mt-6 max-w-3xl font-display text-[clamp(3.2rem,8vw,7.5rem)] leading-[.92] tracking-[-.05em]">Hi, I&apos;m <span className="text-accent">{person.firstName}.</span></motion.h1>
          <motion.p variants={fadeUp(reduced)} initial="hidden" animate="visible" transition={{ delay: reduced ? 0 : 0.16 }} className="mt-7 max-w-xl text-xl font-medium tracking-tight sm:text-2xl">{person.shortTitle}</motion.p>
          <motion.p variants={fadeUp(reduced)} initial="hidden" animate="visible" transition={{ delay: reduced ? 0 : 0.22 }} className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{person.heroDescription} I care about clear architecture, thoughtful interfaces, and software that holds up in the real world.</motion.p>
          <motion.div variants={fadeUp(reduced)} initial="hidden" animate="visible" transition={{ delay: reduced ? 0 : 0.28 }} className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => scrollToId('projects')}>View selected work <ArrowRight size={16} /></Button>
            <Button variant="secondary" onClick={() => scrollToId('contact')}>Let&apos;s connect <ArrowDownRight size={16} /></Button>
            <Button href={portfolio.cvUrl} variant="ghost" external>Resume <FileDown size={16} /></Button>
          </motion.div>
          <motion.div variants={fadeUp(reduced)} initial="hidden" animate="visible" transition={{ delay: reduced ? 0 : 0.34 }} className="mt-8 flex flex-wrap items-center gap-4 text-xs text-muted sm:text-sm">
            <span className="inline-flex items-center gap-2"><MapPin size={14} className="text-accent" />{person.location}</span><span className="h-4 w-px bg-border" aria-hidden /><span>{person.university}</span>
          </motion.div>
          <motion.div variants={fadeUp(reduced)} initial="hidden" animate="visible" transition={{ delay: reduced ? 0 : 0.4 }} className="mt-7"><SocialLinks /></motion.div>
        </div>
        <motion.div variants={scaleIn(reduced)} initial="hidden" animate="visible" className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
          <div className="absolute -right-8 top-8 hidden border border-border bg-bg/80 px-4 py-3 text-xs backdrop-blur sm:block"><span className="block text-accent">01 / 04</span><span className="mt-1 block text-muted">Selected portrait</span></div>
          <ProfileMark />
          <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-[10px] font-semibold uppercase tracking-[.2em] text-muted"><span>Software engineer</span><span>2026</span></div>
        </motion.div>
      </Container>
    </section>
  )
}
