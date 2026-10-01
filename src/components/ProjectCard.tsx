import { motion } from 'motion/react'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Github } from './icons'
import type { Project } from '../types/portfolio'
import { isPlaceholder } from '../lib/utils'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type Props = {
  project: Project
  onOpen: (project: Project) => void
  inactive?: boolean
}

export function ProjectCard({ project, onOpen, inactive = false }: Props) {
  const reduced = usePrefersReducedMotion()
  const github = isPlaceholder(project.links.github) ? undefined : project.links.github
  const live = isPlaceholder(project.links.live) ? undefined : project.links.live

  return (
    <div className="h-full">
      <motion.article
        whileHover={reduced ? undefined : inactive ? { y: -4 } : { y: -6 }}
        whileTap={reduced ? undefined : { scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-md transition-all duration-300 hover:border-accent/45 hover:shadow-xl hover:shadow-accent/10"
      >
        {/* Window Chrome Header Bar */}
        <div className="flex items-center gap-2 border-b border-border/70 bg-bg/75 px-4 py-2.5 backdrop-blur-sm">
          <span aria-hidden className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80 transition-opacity group-hover:opacity-100" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80 transition-opacity group-hover:opacity-100" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80 transition-opacity group-hover:opacity-100" />
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onOpen(project)
            }}
            className="mx-1 min-w-0 flex-1 truncate rounded-md border border-border/50 bg-surface/60 px-2.5 py-0.5 font-mono text-[10px] text-muted transition hover:border-accent/50 hover:text-accent"
          >
            https://{project.id}.dev
          </button>
          <span className="font-mono text-[10px] font-bold text-muted transition-colors duration-300 group-hover:text-accent">
            {project.number}
          </span>
        </div>

        {/* Card Thumbnail Image Area - Studio Showcase Box (Fits full image inside without cropping) */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950 p-2.5 sm:p-3.5 flex items-center justify-center border-b border-border/60">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--accent)_14%,transparent),transparent_70%)]" />
          
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />

          {/* Floating Badges */}
          <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2 pointer-events-none z-10">
            <span className="rounded-full border border-white/20 bg-black/75 px-2.5 py-0.5 font-mono text-[10px] font-bold text-white backdrop-blur-md shadow-sm">
              {project.year}
            </span>
            <span className="rounded-full border border-accent/40 bg-accent/90 px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-md shadow-sm">
              {project.category}
            </span>
          </div>

          <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 pointer-events-none z-10">
            <div className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/75 px-3 py-1 backdrop-blur-md">
              <p className="truncate text-[11px] font-medium text-white/95">{project.subtitle}</p>
            </div>
            <span className="hidden shrink-0 rounded-xl bg-accent px-2.5 py-1 text-[10px] font-bold text-accent-fg shadow-md transition-all duration-300 group-hover:inline-flex">
              {inactive ? 'Focus' : 'Explore'}
            </span>
          </div>
        </div>

        {/* Card Content & Meta */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="font-display text-xl font-bold leading-snug tracking-tight text-fg transition-colors duration-200 group-hover:text-accent sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-muted sm:text-sm sm:leading-relaxed">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap content-start gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border/80 bg-bg/80 px-2.5 py-1 text-[10px] font-medium text-fg"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="rounded-lg border border-dashed border-border px-2 py-1 text-[10px] font-medium text-muted">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="relative z-20 mt-auto flex items-center gap-2 border-t border-border/70 pt-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer noopener"
                title="View Source Code on GitHub"
                aria-label={`${project.title} GitHub repository`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 rounded-full border border-border bg-bg/60 px-3 py-1 text-xs font-semibold text-muted transition hover:border-accent hover:text-accent hover:bg-accent/10"
              >
                <Github size={13} />
                <span>Code</span>
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer noopener"
                title={live.includes('linkedin') ? 'View LinkedIn Post' : 'View Live Demo'}
                aria-label={`${project.title} live demo`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 rounded-full border border-border bg-bg/60 px-3 py-1 text-xs font-semibold text-muted transition hover:border-accent hover:text-accent hover:bg-accent/10"
              >
                <ExternalLink size={13} />
                <span>{live.includes('linkedin') ? 'Post' : 'Live'}</span>
              </a>
            )}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onOpen(project)
              }}
              className="ml-auto inline-flex items-center gap-1 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent transition hover:bg-accent hover:text-accent-fg shadow-sm"
            >
              Case study
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>

        {/* Full Card Trigger Overlay */}
        <button
          type="button"
          onClick={() => onOpen(project)}
          aria-label={`Open ${project.title} case study`}
          className="absolute inset-0 z-10 cursor-pointer rounded-[inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
        />
      </motion.article>
    </div>
  )
}
