import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { portfolioImages, portfolioImageAlts } from '../data/images'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const practices = ['Understand the problem', 'Design clear boundaries', 'Build reusable systems', 'Secure and validate', 'Test the edges', 'Deploy with intent']

export function Engineering() {
  const reduced = usePrefersReducedMotion()
  return <section id="engineering" className="section-band py-16 sm:py-24 lg:py-32">
    <Container>
      <SectionHeading eyebrow="Beyond the browser" title="Engineering with range." description="Web platforms are my core, but I enjoy the whole system: hardware, computer vision, infrastructure, and the decisions between them." />
      <div className="mt-10 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-14">
        <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: reduced ? 0 : .6 }} className="relative overflow-hidden border border-border bg-bg">
          <img src={portfolioImages.secondary} alt={portfolioImageAlts.secondary} loading="lazy" className="aspect-[4/5] w-full object-cover object-center grayscale-[15%] transition duration-700 hover:scale-[1.02]" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between border border-white/20 bg-black/45 px-4 py-3 text-xs text-white backdrop-blur-md"><span>Systems thinker</span><span>02</span></div>
        </motion.div>
        <div>
          <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">From the Autonomous Chess-Playing Robot to secure full-stack systems, I like understanding how software behaves when it meets people, data, and the physical world.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">{practices.map((practice, index) => <div key={practice} className="flex items-center gap-3 border-t border-border py-3 text-sm"><span className="font-mono text-xs text-accent">0{index + 1}</span><span>{practice}</span></div>)}</div>
          <a href="#projects" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:gap-3">Explore the work <ArrowUpRight size={16} /></a>
          <p className="mt-8 text-xs uppercase tracking-[.16em] text-muted">Currently learning · {portfolio.currentlyLearning.slice(0, 3).join(' · ')}</p>
        </div>
      </div>
    </Container>
  </section>
}
