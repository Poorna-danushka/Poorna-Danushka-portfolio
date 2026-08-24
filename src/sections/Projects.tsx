import { useCallback, useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectModal } from '../components/ProjectModal'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'
import type { Project } from '../types/portfolio'
import { cn } from '../lib/utils'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const [filter, setFilter] = useState('All')
  const close = useCallback(() => setActive(null), [])
  const categories = ['All', ...new Set(portfolio.projects.map((project) => project.category))]
  const visibleProjects = filter === 'All' ? portfolio.projects : portfolio.projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32">
      <Container className="max-w-7xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Projects"
          description="Explore a curated showcase of full-stack web platforms, software engineering systems, and embedded IoT projects built with modern architectures."
        />
        <div className="mt-6 flex max-w-full flex-wrap gap-2.5 sm:mt-8" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={cn(
                'rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200',
                filter === category
                  ? 'border-accent bg-accent text-accent-fg shadow-sm'
                  : 'border-border bg-elevated/40 text-muted hover:border-accent/40 hover:text-fg',
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 items-stretch gap-6 sm:mt-10 md:grid-cols-2 lg:gap-8">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setActive} />
          ))}
        </div>
      </Container>
      <ProjectModal project={active} onClose={close} />
    </section>
  )
}
