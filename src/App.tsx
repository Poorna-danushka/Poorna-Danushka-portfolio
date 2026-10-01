import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Education } from './sections/Education'
import { EngineeringApproach } from './sections/EngineeringApproach'
import { Hero } from './sections/Hero'
import { Journey } from './sections/Journey'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

export default function App() {
  return (
    <div className="relative min-h-svh bg-background text-foreground ambient-bg">
      <ScrollProgress />
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <EngineeringApproach />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
