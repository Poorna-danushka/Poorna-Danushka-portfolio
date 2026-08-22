import { useCallback, useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectModal } from '../components/ProjectModal'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'
import type { Project } from '../types/portfolio'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <section id="projects" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Projects"
          description="The Elderly Care Management System is the primary full-stack system, followed by Orbit and other selected work."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {portfolio.projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setActive} />
          ))}
        </div>
      </Container>
      <ProjectModal project={active} onClose={close} />
    </section>
  )
}
