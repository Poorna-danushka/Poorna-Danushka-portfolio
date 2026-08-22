import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { ExternalLink, X } from 'lucide-react'
import { Github } from './icons'
import type { Project } from '../types/portfolio'
import { useFocusTrap } from '../hooks/useFocusTrap'
import { isPlaceholder } from '../lib/utils'
import { Button } from './Button'

type Props = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)
  useFocusTrap(Boolean(project), dialogRef, onClose)

  if (!project) return null

  const github = isPlaceholder(project.links.github) ? undefined : project.links.github
  const live = isPlaceholder(project.links.live) ? undefined : project.links.live

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
        aria-label="Close project details"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-border bg-elevated p-6 shadow-2xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              {project.number} · {project.category}
            </p>
            <h3 id="project-dialog-title" className="mt-2 font-display text-3xl">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full border border-border"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <img
          src={project.image}
          alt={project.imageAlt}
          className="mt-6 aspect-[16/9] w-full rounded-2xl object-cover"
        />

        <section className="mt-6 space-y-5 text-sm leading-relaxed text-muted">
          <div>
            <h4 className="text-base font-semibold text-fg">Project overview</h4>
            <p className="mt-2">{project.overview}</p>
          </div>
          {project.problem ? (
            <div>
              <h4 className="text-base font-semibold text-fg">Problem</h4>
              <p className="mt-2">{project.problem}</p>
            </div>
          ) : null}
          {project.solution ? (
            <div>
              <h4 className="text-base font-semibold text-fg">Solution</h4>
              <p className="mt-2">{project.solution}</p>
            </div>
          ) : null}
          {project.technologies.length > 0 ? (
            <div>
              <h4 className="text-base font-semibold text-fg">Technologies</h4>
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li key={tech} className="rounded-full border border-border px-3 py-1 text-fg">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {project.features.length > 0 ? (
            <div>
              <h4 className="text-base font-semibold text-fg">Key features</h4>
              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="rounded-2xl border border-border bg-bg/50 px-3 py-2 text-fg">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {project.challenges ? (
            <div>
              <h4 className="text-base font-semibold text-fg">Challenges</h4>
              <p className="mt-2">{project.challenges}</p>
            </div>
          ) : null}
          {project.learnings ? (
            <div>
              <h4 className="text-base font-semibold text-fg">What I learned</h4>
              <p className="mt-2">{project.learnings}</p>
            </div>
          ) : null}
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={github} external disabled={!github} ariaLabel="GitHub">
            <Github size={16} />
            GitHub
          </Button>
          <Button href={live} variant="secondary" external disabled={!live} ariaLabel="Live demo">
            <ExternalLink size={16} />
            Live Demo
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
