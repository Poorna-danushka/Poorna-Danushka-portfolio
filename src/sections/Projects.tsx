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
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Projects"
          description="The Elderly Care Management System is the primary full-stack system, followed by Orbit and other selected work."
        />
        <div className="mt-6 flex max-w-full flex-wrap gap-2 sm:mt-8" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={cn(
                'rounded-full border px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm',
                filter === category ? 'border-accent bg-accent text-accent-fg' : 'border-border text-muted hover:border-accent/50 hover:text-fg',
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-6 sm:mt-8 sm:gap-8 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setActive} />
          ))}
        </div>
      </Container>
      <ProjectModal project={active} onClose={close} />
    </section>
  )
}
