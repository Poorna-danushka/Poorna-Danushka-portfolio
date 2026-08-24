import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Github, Linkedin } from './icons'
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
  const isLinkedIn = Boolean(live && (live.includes('linkedin.com') || live.includes('lnkd.in')))

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-elevated/90 backdrop-blur-sm transition-all duration-300',
        'hover:-translate-y-1.5 hover:border-accent/45 hover:shadow-[0_20px_45px_var(--glow)] motion-reduce:transform-none',
      )}
    >
      {/* Wider Full-bleed Media Container */}
      <div className="relative aspect-[16/8] w-full overflow-hidden border-b border-border/50 bg-bg/50">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
        />

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute left-3.5 right-3.5 top-3 flex items-center justify-between gap-2 pointer-events-none">
          <span className="inline-flex items-center rounded-full bg-black/60 px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-white backdrop-blur-md border border-white/15 shadow-sm">
            {project.number}
          </span>
          {featured ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-semibold text-accent-fg shadow-sm">
              Featured
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full bg-black/60 px-2.5 py-0.5 text-[11px] font-medium text-white/90 backdrop-blur-md border border-white/15 shadow-sm">
              {project.category}
            </span>
          )}
        </div>

        {/* Year Pill */}
        <div className="absolute bottom-2.5 right-3.5 pointer-events-none">
          <span className="inline-flex items-center rounded-md bg-black/60 px-2 py-0.5 text-[11px] font-semibold text-white/90 backdrop-blur-md border border-white/15">
            {project.year}
          </span>
        </div>
      </div>

      {/* Card Content - Compact & Streamlined */}
      <div className="flex flex-1 flex-col justify-between p-4.5 sm:p-5.5">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            <span>{project.category}</span>
          </div>

          <h3 className="font-display text-lg sm:text-xl font-bold leading-snug text-fg transition-colors group-hover:text-accent line-clamp-1">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm leading-relaxed text-muted line-clamp-2 min-h-[2.5rem]">
            {project.description}
          </p>

          {/* Technologies Chips */}
          <div className="pt-0.5">
            {project.technologies.length > 0 ? (
              <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
                {project.technologies.slice(0, 4).map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border/80 bg-bg/75 px-2 py-0.5 text-[11px] font-medium text-fg/90"
                  >
                    {tech}
                  </li>
                ))}
                {project.technologies.length > 4 ? (
                  <li className="rounded-md border border-border/60 bg-bg/40 px-1.5 py-0.5 text-[11px] font-medium text-muted">
                    +{project.technologies.length - 4} more
                  </li>
                ) : null}
              </ul>
            ) : null}
          </div>
        </div>

        {/* Card Actions Footer */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border/50 pt-3.5">
          <div className="flex items-center gap-1.5">
            <Button
              variant="secondary"
              href={github}
              external
              disabled={!github}
              className="px-3 py-1.5 text-xs opacity-90 group-hover:opacity-100"
              ariaLabel={github ? `${project.title} GitHub repository` : `${project.title} GitHub not available`}
            >
              <Github size={14} />
              <span className="hidden min-[380px]:inline">GitHub</span>
            </Button>
            <Button
              variant="secondary"
              href={live}
              external
              disabled={!live}
              className="px-3 py-1.5 text-xs opacity-90 group-hover:opacity-100"
              ariaLabel={live ? (isLinkedIn ? `${project.title} LinkedIn post` : `${project.title} live demo`) : `${project.title} live link not available`}
            >
              {isLinkedIn ? <Linkedin size={14} /> : <ExternalLink size={14} />}
              <span className="hidden min-[380px]:inline">{isLinkedIn ? 'LinkedIn' : 'Live'}</span>
            </Button>
          </div>

          <Button
            variant="primary"
            onClick={() => onOpen(project)}
            className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold opacity-95 group-hover:opacity-100 shadow-sm"
          >
            <span>Details</span>
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>
      </div>
    </article>
  )
}
