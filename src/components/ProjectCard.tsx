import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Github } from './icons'
import type { Project } from '../types/portfolio'
import { cn, isPlaceholder } from '../lib/utils'
import { Button } from './Button'

type Props = {
  project: Project
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, onOpen }: Props) {
  const github = isPlaceholder(project.links.github) ? undefined : project.links.github
  const live = isPlaceholder(project.links.live) ? undefined : project.links.live
  const featured = Boolean(project.featured)

  return (
    <article
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-border bg-elevated/80 transition duration-300',
        'hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_20px_50px_var(--glow)] motion-reduce:transform-none',
        featured && 'lg:col-span-2 lg:grid lg:grid-cols-2',
      )}
    >
      {featured ? (
        <p className="absolute left-4 top-4 z-10 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-fg">
          Featured
        </p>
      ) : null}
      <div className={cn('overflow-hidden', featured ? 'aspect-[16/10] lg:aspect-auto lg:h-full' : 'aspect-[16/10]')}>
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transform-none"
        />
      </div>
      <div className="flex flex-col space-y-4 p-6 lg:justify-center">
        <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          <span>{project.number}</span>
          <span className="text-right">
            {project.year} · {project.category}
          </span>
        </div>
        <h3 className="font-display text-2xl leading-tight sm:text-3xl">{project.title}</h3>
        <p className="text-sm leading-relaxed text-muted sm:text-base">{project.description}</p>
        {project.technologies.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech} className="rounded-full border border-border bg-bg/70 px-2.5 py-1 text-xs text-fg">
                {tech}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-muted">Technologies can be added in the data file.</p>
        )}
        <div className="flex flex-wrap gap-2 pt-2">
          <Button
            variant="secondary"
            href={github}
            external
            disabled={!github}
            className="opacity-90 group-hover:opacity-100"
            ariaLabel={github ? `${project.title} GitHub` : `${project.title} GitHub not configured`}
          >
            <Github size={16} />
            GitHub
          </Button>
          <Button
            variant="secondary"
            href={live}
            external
            disabled={!live}
            className="opacity-90 group-hover:opacity-100"
            ariaLabel={live ? `${project.title} live demo` : `${project.title} live demo not configured`}
          >
            <ExternalLink size={16} />
            Live Demo
          </Button>
          <Button variant="primary" onClick={() => onOpen(project)} className="opacity-90 group-hover:opacity-100">
            View Details
            <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>
      </div>
    </article>
  )
}
