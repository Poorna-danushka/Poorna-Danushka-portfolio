import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, type Variants } from 'motion/react'
import { ExternalLink, X } from 'lucide-react'
import { Github, Linkedin } from './icons'
import type { Project } from '../types/portfolio'
import { useFocusTrap } from '../hooks/useFocusTrap'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { isPlaceholder } from '../lib/utils'
import { ease } from '../lib/motion'
import { Button } from './Button'

type Props = {
  project: Project | null
  onClose: () => void
}

const contentVariants = (reduced: boolean): Variants => ({
  hidden: {},
  visible: { transition: reduced ? {} : { staggerChildren: 0.05, delayChildren: 0.12 } },
})

const itemVariants = (reduced: boolean): Variants => ({
  hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: reduced ? { duration: 0 } : { duration: 0.45, ease } },
})

export function ProjectModal({ project, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  useFocusTrap(Boolean(project), dialogRef, onClose)

  const github = project && !isPlaceholder(project.links.github) ? project.links.github : undefined
  const live = project && !isPlaceholder(project.links.live) ? project.links.live : undefined
  const isLinkedIn = Boolean(live && (live.includes('linkedin.com') || live.includes('lnkd.in')))
  const item = itemVariants(reduced)

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-modal"
          className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6"
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            aria-label="Close project details"
            onClick={onClose}
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0, transition: { duration: 0.18 } }}
            transition={{ duration: 0.25 }}
          />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            initial={reduced ? false : { opacity: 0, y: 44, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? undefined : { opacity: 0, y: 24, scale: 0.97, transition: { duration: 0.18, ease } }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-border bg-elevated p-6 shadow-2xl sm:p-8"
          >
            <motion.div variants={contentVariants(reduced)} initial="hidden" animate="visible">
              <motion.div variants={item} className="flex items-start justify-between gap-4">
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
              </motion.div>

              {/* Device/Browser Window Container showcasing full image */}
              <motion.div
                variants={item}
                className="mt-6 overflow-hidden rounded-2xl border border-border/80 bg-neutral-950 shadow-xl"
              >
                <div className="flex items-center justify-between border-b border-border/60 bg-bg/80 px-4 py-2.5 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="truncate font-mono text-[11px] text-muted">
                    {project.title} — Full Image Preview
                  </span>
                  <span className="font-mono text-[10px] font-bold text-accent">
                    {project.category}
                  </span>
                </div>

                <div className="relative flex max-h-[440px] w-full items-center justify-center p-3 sm:p-5">
                  <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--accent)_10%,transparent),transparent_75%)]" />
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="max-h-[390px] w-full object-contain rounded-lg shadow-lg relative z-10"
                  />
                </div>
              </motion.div>

              <section className="mt-6 space-y-6 text-sm leading-relaxed text-muted">
                {/* Role Pill Banner */}
                {project.role ? (
                  <motion.div
                    variants={item}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-accent/30 bg-accent/5 px-4 py-3"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Key Role</span>
                    <span className="font-semibold text-fg text-sm">{project.role}</span>
                  </motion.div>
                ) : null}

                {/* Overview */}
                <motion.div variants={item}>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-fg">Project Overview</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{project.overview}</p>
                </motion.div>

                {/* Key Impact & Contributions */}
                {project.myContributions && project.myContributions.length > 0 ? (
                  <motion.div variants={item}>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-fg">Key Contributions & Architecture</h4>
                    <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {project.myContributions.map((contrib, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 rounded-2xl border border-border bg-bg/60 p-3.5 text-xs sm:text-sm text-fg leading-relaxed">
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                          <span>{contrib}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ) : null}

                {/* Problem & Solution 2-Column Card */}
                {project.problem || project.solution ? (
                  <motion.div variants={item} className="grid gap-3 sm:grid-cols-2">
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
                  </motion.div>
                ) : null}

                {/* Technologies Stack */}
                {project.technologies.length > 0 ? (
                  <motion.div variants={item}>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-fg">Core Technologies</h4>
                    <ul className="mt-2.5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <li key={tech} className="rounded-lg border border-border bg-bg/80 px-3 py-1 text-xs font-medium text-fg">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ) : null}

                {/* Learnings / Takeaways */}
                {project.learnings ? (
                  <motion.div variants={item} className="rounded-2xl border border-border bg-bg/40 p-4">
                    <h5 className="text-xs font-semibold uppercase tracking-[0.16em] text-fg">Engineering Learnings</h5>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">{project.learnings}</p>
                  </motion.div>
                ) : null}
              </section>

              <motion.div
                variants={item}
                className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-5"
              >
                <div className="flex flex-wrap gap-2.5">
                  <Button href={github} external disabled={!github} ariaLabel="GitHub">
                    <Github size={16} />
                    GitHub
                  </Button>
                  <Button href={live} variant="secondary" external disabled={!live} ariaLabel={isLinkedIn ? 'LinkedIn post' : 'Live demo'}>
                    {isLinkedIn ? <Linkedin size={16} /> : <ExternalLink size={16} />}
                    {isLinkedIn ? 'LinkedIn Post' : 'Live Demo'}
                  </Button>
                </div>
                <Button variant="ghost" onClick={onClose} ariaLabel="Close dialog">
                  Close
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
