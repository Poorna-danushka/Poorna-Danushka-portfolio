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

        <div className="mt-6 flex w-full items-center justify-center overflow-hidden rounded-2xl border border-border">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="h-auto w-full object-contain"
          />
        </div>

        <section className="mt-6 space-y-6 text-sm leading-relaxed text-muted">
          {/* Role Pill Banner */}
          {project.role ? (
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-accent/30 bg-accent/5 px-4 py-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Key Role</span>
              <span className="font-semibold text-fg text-sm">{project.role}</span>
            </div>
          ) : null}

          {/* Overview */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-fg">Project Overview</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{project.overview}</p>
          </div>

          {/* Key Impact & Contributions */}
          {project.myContributions && project.myContributions.length > 0 ? (
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-fg">Key Contributions & Architecture</h4>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {project.myContributions.map((contrib, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 rounded-2xl border border-border bg-bg/60 p-3.5 text-xs sm:text-sm text-fg leading-relaxed">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* Problem & Solution 2-Column Card */}
          {project.problem || project.solution ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {project.problem ? (
                <div className="rounded-2xl border border-border bg-bg/50 p-4">
                  <h5 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">The Challenge</h5>
                  <p className="mt-2 text-xs sm:text-sm text-fg leading-relaxed">{project.problem}</p>
                </div>
              ) : null}
              {project.solution ? (
                <div className="rounded-2xl border border-accent/25 bg-accent/[0.04] p-4">
                  <h5 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">The Solution</h5>
                  <p className="mt-2 text-xs sm:text-sm text-fg leading-relaxed">{project.solution}</p>
                </div>
              ) : null}
            </div>
          ) : null}

          {/* Technologies Stack */}
          {project.technologies.length > 0 ? (
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-fg">Core Technologies</h4>
              <ul className="mt-2.5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li key={tech} className="rounded-lg border border-border bg-bg/80 px-3 py-1 text-xs font-medium text-fg">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* Learnings / Takeaways */}
          {project.learnings ? (
            <div className="rounded-2xl border border-border bg-bg/40 p-4">
              <h5 className="text-xs font-semibold uppercase tracking-[0.16em] text-fg">Engineering Learnings</h5>
              <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">{project.learnings}</p>
            </div>
          ) : null}
        </section>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-5">
          <div className="flex flex-wrap gap-2.5">
            <Button href={github} external disabled={!github} ariaLabel="GitHub">
              <Github size={16} />
              GitHub
            </Button>
            <Button href={live} variant="secondary" external disabled={!live} ariaLabel="Live demo">
              <ExternalLink size={16} />
              Live Demo
            </Button>
          </div>
          <Button variant="ghost" onClick={onClose} ariaLabel="Close dialog">
            Close
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
