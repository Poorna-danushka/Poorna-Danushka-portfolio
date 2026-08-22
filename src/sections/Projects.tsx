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
    <section id="projects" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Projects"
          description="The Elderly Care Management System is the primary full-stack system, followed by Orbit and other selected work."
        />
        <div className="mt-8 flex max-w-full flex-nowrap gap-2 overflow-x-auto pb-2" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-semibold transition',
                filter === category ? 'border-accent bg-accent text-accent-fg' : 'border-border text-muted hover:border-accent/50 hover:text-fg',
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setActive} />
          ))}
        </div>
      </Container>
      <ProjectModal project={active} onClose={close} />
    </section>
  )
}
