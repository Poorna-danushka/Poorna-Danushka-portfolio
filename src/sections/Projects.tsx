import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react'
import { motion, useInView } from 'motion/react'
import { ChevronLeft, ChevronRight, FolderGit2, MousePointerClick, Sparkles } from 'lucide-react'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectModal } from '../components/ProjectModal'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'
import type { Project } from '../types/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { cn } from '../lib/utils'

const projects = portfolio.projects
const TOTAL = projects.length

// Refined carousel layout settings:
// Controlled offset spacing, subtle 3D depth tilt, and smooth card scaling
const SPACING = 68
const TILT_DEG = 6
const PUSH = 140
const SIDE_SHRINK = 0.12
const DRAG_THRESHOLD = 10
const SWIPE_DISTANCE = 55
const AUTOPLAY_MS = 6000

const glide = { type: 'spring' as const, stiffness: 240, damping: 26, mass: 0.8 }

const wrap = (value: number, total: number) => ((value % total) + total) % total

// Shortest signed step count from `from` to `to` around the ring.
const signedDelta = (from: number, to: number, total: number) => {
  const delta = wrap(to - from, total)
  return delta > total / 2 ? delta - total : delta
}

// Offset relative to the active slot; the far half of the ring folds into
// negative values so every card travels in one consistent direction.
const offsetFor = (index: number, position: number, total: number) => {
  const raw = wrap(index - position, total)
  return raw >= total / 2 ? raw - total : raw
}

interface CarouselCardProps {
  project: Project
  index: number
  position: number
  entered: boolean
  reduced: boolean
  onSelect: (index: number, offset: number) => void
}

function CarouselCard({ project, index, position, entered, reduced, onSelect }: CarouselCardProps) {
  const offset = offsetFor(index, position, TOTAL)
  const distance = Math.min(Math.abs(offset), 2)
  const hidden = distance >= 2

  // Snap seamless wrap-around jumps when looping cards around the ring
  const previousOffset = useRef(offset)
  const warped = Math.abs(offset - previousOffset.current) > 2.5
  const entering = warped && offset === 1
  const exiting = warped && offset === -2
  useEffect(() => {
    previousOffset.current = offset
  }, [offset])

  const jump = { duration: 0, delay: exiting ? 0.18 : 0 }

  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${TOTAL}: ${project.title}`}
      inert={hidden}
      className="absolute left-1/2 top-1/2 w-[min(80vw,460px)] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]"
      style={{ zIndex: 10 - distance }}
    >
      <motion.div
        initial={false}
        animate={entered ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 32, scale: 0.95 }}
        transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 200, damping: 24, delay: index * 0.06 }}
        className="[transform-style:preserve-3d]"
      >
        <motion.div
          initial={false}
          animate={{
            x: `${offset * SPACING}%`,
            rotateY: offset * TILT_DEG,
            z: -distance * PUSH,
            scale: 1 - distance * SIDE_SHRINK,
            opacity: hidden ? 0 : distance === 1 ? 0.78 : 1,
            filter: distance === 0 ? 'brightness(1)' : 'brightness(0.78)',
          }}
          transition={
            reduced
              ? { duration: 0 }
              : {
                  default: glide,
                  x: warped ? jump : glide,
                  z: warped ? jump : glide,
                  rotateY: warped ? jump : glide,
                  opacity: { duration: entering ? 0.22 : exiting ? 0.18 : 0.35 },
                  filter: { duration: warped ? 0.22 : 0.35 },
                }
          }
          style={{ pointerEvents: hidden ? 'none' : 'auto' }}
          className="[transform-style:preserve-3d]"
        >
          <ProjectCard project={project} onOpen={() => onSelect(index, offset)} inactive={offset !== 0} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const [position, setPosition] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduced = usePrefersReducedMotion()
  const close = useCallback(() => setActive(null), [])

  const stageRef = useRef<HTMLDivElement>(null)
  const enteredOnce = useInView(stageRef, { once: true, amount: 0.2 })
  const inViewNow = useInView(stageRef, { amount: 0.35 })
  const entered = enteredOnce || reduced
  const current = wrap(position, TOTAL)

  const move = useCallback((delta: number) => setPosition((value) => value + delta), [])

  const goTo = useCallback(
    (target: number) => setPosition((value) => value + signedDelta(wrap(value, TOTAL), target, TOTAL)),
    [],
  )

  const handleSelect = useCallback(
    (index: number, offset: number) => {
      if (offset === 0) setActive(projects[index])
      else goTo(index)
    },
    [goTo],
  )

  useEffect(() => {
    if (reduced || !inViewNow || paused || active) return
    const timer = window.setTimeout(() => setPosition((value) => value + 1), AUTOPLAY_MS)
    return () => window.clearTimeout(timer)
  }, [reduced, inViewNow, paused, active, position])

  const drag = useRef<{ from: number | null; moved: boolean; captured: boolean }>({
    from: null,
    moved: false,
    captured: false,
  })
  const skipClick = useRef(false)

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    drag.current = { from: event.clientX, moved: false, captured: false }
    skipClick.current = false
  }

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const state = drag.current
    if (state.from === null) return
    if (!state.moved && Math.abs(event.clientX - state.from) > DRAG_THRESHOLD) {
      state.moved = true
      skipClick.current = true
      event.currentTarget.setPointerCapture(event.pointerId)
      state.captured = true
    }
  }

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const state = drag.current
    if (state.from === null) return
    const delta = event.clientX - state.from
    if (state.moved && Math.abs(delta) > SWIPE_DISTANCE) move(delta < 0 ? 1 : -1)
    drag.current = { from: null, moved: false, captured: false }
  }

  const cancelDrag = () => {
    drag.current = { from: null, moved: false, captured: false }
  }

  const handleClickCapture = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!skipClick.current) return
    event.preventDefault()
    event.stopPropagation()
    skipClick.current = false
  }

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      move(-1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      move(1)
    } else if ((event.key === 'Enter' || event.key === ' ') && event.target === event.currentTarget) {
      event.preventDefault()
      setActive(projects[current])
    }
  }

  const technologyCount = new Set(projects.flatMap((project) => project.technologies)).size

  return (
    <section id="projects" className="relative overflow-hidden py-16 sm:py-20 lg:flex lg:min-h-[100svh] lg:items-center lg:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-96 max-w-5xl bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--accent)_10%,transparent),transparent_68%)]"
      />

      <Container className="relative max-w-[1240px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="Selected Engineering Work"
            title="Projects built to solve real problems"
            description="Production-minded applications spanning collaborative SaaS, healthcare operations, fitness technology, and autonomous robotics."
          />

          <div className="grid grid-cols-2 gap-3 sm:flex">
            <div className="rounded-2xl border border-border bg-surface/70 px-4 py-3 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-accent">
                <FolderGit2 size={16} />
                <span className="font-display text-xl font-bold text-fg">{TOTAL}</span>
              </div>
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Case studies</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface/70 px-4 py-3 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-accent">
                <Sparkles size={16} />
                <span className="font-display text-xl font-bold text-fg">{technologyCount}+</span>
              </div>
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Tools applied</p>
            </div>
          </div>
        </div>

        <div
          className="relative mt-8 sm:mt-10"
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
        >
          <div
            ref={stageRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured projects"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerCancel={cancelDrag}
            onPointerLeave={() => {
              if (!drag.current.captured) cancelDrag()
            }}
            onClickCapture={handleClickCapture}
            onDragStart={(event) => event.preventDefault()}
            className="relative h-[510px] touch-pan-y select-none rounded-[2rem] [perspective:1700px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent/60 sm:h-[590px]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[min(92vw,780px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_12%,transparent),transparent)] blur-2xl"
            />

            {projects.map((project, index) => (
              <CarouselCard
                key={project.id}
                project={project}
                index={index}
                position={position}
                entered={entered}
                reduced={reduced}
                onSelect={handleSelect}
              />
            ))}

            <motion.button
              type="button"
              aria-label="Previous project"
              onClick={() => move(-1)}
              onPointerDown={(event) => event.stopPropagation()}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="absolute left-2 sm:left-3 top-[calc(50%-1.375rem)] z-30 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-border bg-surface/85 text-fg shadow-xl backdrop-blur-md transition-colors hover:border-accent/60 hover:text-accent hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              type="button"
              aria-label="Next project"
              onClick={() => move(1)}
              onPointerDown={(event) => event.stopPropagation()}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="absolute right-2 sm:right-3 top-[calc(50%-1.375rem)] z-30 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-border bg-surface/85 text-fg shadow-xl backdrop-blur-md transition-colors hover:border-accent/60 hover:text-accent hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          <div className="mt-7 flex flex-col items-center gap-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    type="button"
                    aria-label={`Show project ${index + 1}: ${project.title}`}
                    aria-current={index === current}
                    onClick={() => goTo(index)}
                    className="group/dot flex h-7 items-center rounded-full px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
                  >
                    <span
                      className={cn(
                        'block h-2.5 rounded-full transition-all duration-300',
                        index === current ? 'w-8 bg-accent shadow-[0_0_12px_var(--accent)]' : 'w-2.5 bg-border group-hover/dot:bg-muted',
                      )}
                    />
                  </button>
                ))}
              </div>
              <span className="font-mono text-xs font-bold text-muted">
                <span className="text-fg">{String(current + 1).padStart(2, '0')}</span> / {String(TOTAL).padStart(2, '0')}
              </span>
            </div>

            <p className="flex flex-wrap items-center justify-center gap-2 text-center text-xs font-medium text-muted">
              <MousePointerClick size={14} className="text-accent" />
              Drag, use ← → keys, or tap a side project to bring it forward — select the centered card for the full case study.
            </p>
          </div>

          <p aria-live="polite" className="sr-only">{`Project ${current + 1} of ${TOTAL}: ${projects[current].title}`}</p>
        </div>
      </Container>

      <ProjectModal project={active} onClose={close} />
    </section>
  )
}
