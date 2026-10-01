import { useEffect, useMemo, useRef, useState } from 'react'
import {
  AnimatePresence,
  animate,
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react'
import { Braces, CloudCog, Cpu, Database, Layers3, Server, Sparkles } from 'lucide-react'
import { TechIcon, type TechBrandInfo } from './TechIcons'
import { TypewriterText } from './TypewriterText'
import { cn } from '../lib/utils'

interface ProjectRef {
  title: string
  technologies: string[]
}

interface OrbitalTechRadarProps {
  technologies: TechBrandInfo[]
  /** Optional. Used to show "Used in: ..." for the selected technology. */
  projects?: ProjectRef[]
}

const categories = [
  { id: 'All', icon: Sparkles },
  { id: 'Frontend', icon: Layers3 },
  { id: 'Backend', icon: Server },
  { id: 'Databases', icon: Database },
  { id: 'Cloud & DevOps', icon: CloudCog },
  { id: 'Languages', icon: Braces },
  { id: 'Embedded & AI', icon: Cpu },
] as const

const DEG = Math.PI / 180

interface RingConfig {
  label: string
  fraction: number // ring radius as a share of the stage's usable radius
  period: number // seconds per full revolution
  direction: 1 | -1
  items: { name: string; angle: number }[]
}

const RINGS: RingConfig[] = [
  {
    label: 'Core',
    fraction: 0.4,
    period: 45,
    direction: 1,
    items: [
      { name: 'React', angle: 0 },
      { name: 'TypeScript', angle: 72 },
      { name: 'Next.js', angle: 144 },
      { name: 'Node.js', angle: 216 },
      { name: 'Tailwind CSS', angle: 288 },
    ],
  },
  {
    label: 'Middle',
    fraction: 0.7,
    period: 65,
    direction: -1,
    items: [
      { name: 'NestJS', angle: 0 },
      { name: 'Express.js', angle: 45 },
      { name: 'PostgreSQL', angle: 90 },
      { name: 'MongoDB', angle: 135 },
      { name: 'Prisma ORM', angle: 180 },
      { name: 'Redux Toolkit', angle: 225 },
      { name: 'Socket.IO', angle: 270 },
      { name: 'AWS', angle: 315 },
    ],
  },
  {
    label: 'Outer',
    fraction: 1,
    period: 85,
    direction: 1,
    items: [
      { name: 'Docker', angle: 0 },
      { name: 'Python', angle: 26 },
      { name: 'OpenCV', angle: 51 },
      { name: 'Raspberry Pi', angle: 77 },
      { name: 'Arduino', angle: 103 },
      { name: 'JavaScript', angle: 129 },
      { name: 'Git & GitHub', angle: 154 },
      { name: 'Firebase', angle: 180 },
      { name: 'Vercel', angle: 206 },
      { name: 'Java', angle: 231 },
      { name: 'C / C++', angle: 257 },
      { name: 'SQL', angle: 283 },
      { name: 'HTML5', angle: 309 },
      { name: 'CSS3', angle: 334 },
    ],
  },
]

// Ring outlines use theme tokens so they work in both light and dark mode
const RING_STYLES = ['border-accent/30', 'border-dashed border-border', 'border-border']

// Used only when a name is missing from the `technologies` prop
const FALLBACKS: Record<string, TechBrandInfo> = {
  javascript: {
    name: 'JavaScript',
    color: '#F7DF1E',
    category: 'Languages',
    level: 'Experienced',
    iconKey: 'javascript',
    description: 'Core ES6+ async syntax, DOM APIs, event propagation, and client logic.',
  },
  'git & github': {
    name: 'Git & GitHub',
    color: '#181717',
    category: 'Cloud & DevOps',
    level: 'Experienced',
    iconKey: 'github',
    description: 'Branch management, pull request reviews, versioning, and GitHub Actions CI/CD.',
  },
}

function resolveTech(name: string, technologies: TechBrandInfo[]): TechBrandInfo | undefined {
  const key = name.toLowerCase()
  return technologies.find((t) => t.name.toLowerCase() === key) ?? FALLBACKS[key]
}

// "React" matches "React" and "React 19"; "AWS" matches "AWS RDS" and "AWS S3"
function projectsUsing(name: string, projects: ProjectRef[]): string[] {
  const n = name.toLowerCase()
  return projects
    .filter((p) =>
      p.technologies.some((t) => {
        const l = t.toLowerCase()
        return l === n || l.startsWith(`${n} `)
      }),
    )
    .map((p) => p.title)
}

interface OrbitNodeData {
  tech: TechBrandInfo
  angle: number
}

function markInteraction(lastTouch: { current: number }) {
  lastTouch.current = Date.now()
}

export function OrbitalTechRadar({ technologies, projects = [] }: OrbitalTechRadarProps) {
  const reduceMotion = !!useReducedMotion()
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredTech, setHoveredTech] = useState<TechBrandInfo | null>(null)
  const [selectedTech, setSelectedTech] = useState<TechBrandInfo | undefined>(technologies[0])
  const [stageHover, setStageHover] = useState(false)
  const [nodeSize, setNodeSize] = useState(54)

  const stageRef = useRef<HTMLDivElement>(null)
  const inView = useInView(stageRef, { margin: '-80px' })
  const entered = useInView(stageRef, { margin: '-80px', once: true })
  const lastTouch = useRef(0)

  // ---- Data -------------------------------------------------------------
  const rings = useMemo(
    () =>
      RINGS.map((ring) => ({
        ...ring,
        nodes: ring.items
          .map((item) => ({ tech: resolveTech(item.name, technologies), angle: item.angle }))
          .filter((n): n is OrbitNodeData => !!n.tech),
      })),
    [technologies],
  )

  const allNodes = useMemo(
    () => rings.flatMap((ring) => ring.nodes.map((n) => ({ ...n, ringLabel: ring.label }))),
    [rings],
  )

  const matching = useMemo(
    () =>
      allNodes
        .filter((n) => activeCategory === 'All' || n.tech.category === activeCategory)
        .map((n) => n.tech),
    [allNodes, activeCategory],
  )

  const activeTech = hoveredTech ?? selectedTech ?? allNodes[0]?.tech

  // ---- Sizing: the orbit always fills its stage, at any width -----------
  // `reach` is the radius (px) of the outermost ring's node centres.
  const reach = useSpring(250, { stiffness: 140, damping: 22 })
  const stageHalf = useMotionValue(180)
  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    let first = true
    const update = () => {
      const size = el.clientWidth
      const node = Math.round(Math.min(58, Math.max(34, size * 0.085)))
      const pad = size < 480 ? 22 : 34 // breathing room for the on-orbit tooltip
      const next = Math.max(size / 2 - node / 2 - pad, 60)
      setNodeSize(node)
      stageHalf.set(size / 2)
      if (first) reach.jump(next)
      else reach.set(next)
      first = false
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [reach, stageHalf])

  // Orbit speed is a spring, so pausing and resuming never jerk
  const speed = useSpring(1, { stiffness: 180, damping: 30 })
  useEffect(() => {
    speed.set(reduceMotion ? 0 : hoveredTech ? 0 : stageHover ? 0.3 : 1)
  }, [reduceMotion, hoveredTech, stageHover, speed])

  // Radar sweep beam — shares the orbit's speed spring so it pauses with it
  const sweep = useMotionValue(0)
  useAnimationFrame((_, delta) => {
    if (!inView || reduceMotion) return
    sweep.set((sweep.get() + delta * 0.03 * speed.get()) % 360)
  })

  // ---- Auto tour: spotlights one technology at a time until the visitor interacts
  useEffect(() => {
    if (reduceMotion || !inView || hoveredTech || matching.length < 2) return
    const id = window.setInterval(() => {
      if (Date.now() - lastTouch.current < 8000) return
      setSelectedTech((prev) => {
        const i = matching.findIndex((t) => t.name === prev?.name)
        return matching[(i + 1) % matching.length]
      })
    }, 3600)
    return () => window.clearInterval(id)
  }, [reduceMotion, inView, hoveredTech, matching])

  const changeCategory = (cat: string) => {
    markInteraction(lastTouch)
    setActiveCategory(cat)
    if (cat !== 'All' && selectedTech?.category !== cat) {
      const first = allNodes.find((n) => n.tech.category === cat)
      if (first) setSelectedTech(first.tech)
    }
  }

  const countFor = (cat: string) =>
    cat === 'All' ? allNodes.length : allNodes.filter((n) => n.tech.category === cat).length

  const handleHover = (tech: TechBrandInfo | null) => {
    markInteraction(lastTouch)
    setHoveredTech(tech)
  }
  const handleSelect = (tech: TechBrandInfo) => {
    markInteraction(lastTouch)
    setSelectedTech(tech)
  }

  if (!activeTech) return null

  const centerSize = Math.round(nodeSize * 1.3)

  return (
    <div className="w-full">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-widest text-accent">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            Core Toolchain & Stack Radar
          </div>
          <span className="rounded-full border border-border bg-surface/60 px-3.5 py-1 font-mono text-xs font-semibold text-muted">
            {allNodes.length} technologies · 3 orbits
          </span>
        </div>
        <h2 className="text-balance font-display text-3xl font-medium leading-[1.08] tracking-tight text-fg min-[380px]:text-4xl sm:text-5xl">
          Technology Stack & Expertise
        </h2>
        <p className="max-w-xl text-sm text-muted sm:text-base">
          Mastering{' '}
          <TypewriterText
            className="font-bold text-accent"
            words={[
              'Frontend Applications',
              'Backend Microservices',
              'Relational Databases',
              'Cloud Infrastructure',
              'Embedded AI Robotics',
            ]}
          />
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:items-center xl:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface/70 p-3 shadow-lg shadow-black/5 backdrop-blur-sm lg:p-4">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_72%)]"
          />
          <div className="relative px-2 pb-3 pt-1 lg:px-3">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Explore stack</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">Filter the live radar by engineering discipline.</p>
          </div>

          <div role="group" aria-label="Filter technologies by category" className="relative grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
            {categories.map(({ id, icon: Icon }) => {
              const isActive = activeCategory === id
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => changeCategory(id)}
                  className={cn(
                    'group relative flex min-h-12 items-center gap-3 overflow-hidden rounded-xl border px-3 text-left text-xs font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                    isActive
                      ? 'border-accent/50 bg-accent text-accent-fg shadow-lg shadow-accent/20'
                      : 'border-border bg-bg/35 text-muted hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface hover:text-fg',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeRadarCategoryRail"
                      className="absolute inset-y-2 left-0 w-1 rounded-r-full bg-accent-fg/80"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon size={16} className={cn('relative z-10 shrink-0', isActive ? 'text-accent-fg' : 'text-accent')} />
                  <span className="relative z-10 min-w-0 flex-1 leading-tight">{id}</span>
                  <span className={cn('relative z-10 font-mono text-[10px]', isActive ? 'opacity-80' : 'opacity-60')}>
                    {countFor(id)}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="relative mt-3 flex items-center gap-2 rounded-xl border border-border/80 bg-bg/40 px-3 py-2 text-[10px] font-medium text-muted">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Live orbit signal
          </div>
        </aside>

        <div className="relative min-w-0 py-1 sm:py-2">
          <div className="relative flex items-center justify-between gap-3 px-1 sm:px-2">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeCategory}
                initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: 10, transition: { duration: 0.12 } }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-bg/55 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-fg"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
                {activeCategory}
              </motion.div>
            </AnimatePresence>
            <span className="font-mono text-[10px] font-semibold text-muted">{matching.length} visible nodes</span>
          </div>

          <div
            ref={stageRef}
            onPointerEnter={(e) => e.pointerType === 'mouse' && setStageHover(true)}
            onPointerLeave={() => setStageHover(false)}
            className="relative mx-auto mt-1 aspect-square w-full max-w-[480px] sm:max-w-[540px] xl:max-w-[590px]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-[6%] rounded-full"
              style={{
                background:
                  'radial-gradient(closest-side, color-mix(in oklab, var(--accent) 20%, transparent), transparent)',
              }}
            />

            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-[3%] rounded-full opacity-80 [mask-image:radial-gradient(closest-side,black_55%,transparent_100%)]"
              style={{
                rotate: sweep,
                background:
                  'conic-gradient(from 0deg, transparent 0deg 295deg, color-mix(in oklab, var(--accent) 10%, transparent) 335deg, color-mix(in oklab, var(--accent) 32%, transparent) 358deg, transparent 360deg)',
              }}
            />

            <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeTech.name}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.5, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.5, rotate: 20, transition: { duration: 0.12 } }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/40 bg-elevated/90 shadow-xl shadow-accent/15 backdrop-blur-md sm:h-20 sm:w-20"
                >
                  <TechIcon iconKey={activeTech.iconKey} size={centerSize} className="drop-shadow-lg" />
                </motion.div>
              </AnimatePresence>
            </div>

            {rings.map((ring, index) => (
              <OrbitRing
                key={ring.label}
                index={index}
                ringLabel={ring.label}
                nodes={ring.nodes}
                fraction={ring.fraction}
                period={ring.period}
                direction={ring.direction}
                reach={reach}
                stageHalf={stageHalf}
                speed={speed}
                nodeSize={nodeSize}
                running={inView && !reduceMotion}
                entered={entered}
                reduceMotion={reduceMotion}
                activeName={activeTech.name}
                activeCategory={activeCategory}
                projects={projects}
                onHover={handleHover}
                onSelect={handleSelect}
              />
            ))}
          </div>

          <div className="relative mt-1 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[10px] font-medium text-muted sm:gap-x-5 sm:text-[11px]">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden className="h-2 w-2 rounded-full border border-accent/70" />
              Core
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden className="h-2 w-2 rounded-full border border-dashed border-muted" />
              Proven
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden className="h-2 w-2 rounded-full border border-border" />
              Expanding
            </span>
          </div>
          <p className="relative mt-2 text-center text-[11px] text-muted">
            <span className="hidden [@media(pointer:fine)]:inline">Hover a technology to pause the orbit and preview it. Click to pin.</span>
            <span className="[@media(pointer:fine)]:hidden">Tap a technology to reveal its details.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */

interface OrbitRingProps {
  index: number
  ringLabel: string
  nodes: OrbitNodeData[]
  fraction: number
  period: number
  direction: 1 | -1
  reach: MotionValue<number>
  stageHalf: MotionValue<number>
  speed: MotionValue<number>
  nodeSize: number
  running: boolean
  entered: boolean
  reduceMotion: boolean
  activeName: string
  activeCategory: string
  projects: ProjectRef[]
  onHover: (tech: TechBrandInfo | null) => void
  onSelect: (tech: TechBrandInfo) => void
}

function OrbitRing({
  index,
  ringLabel,
  nodes,
  fraction,
  period,
  direction,
  reach,
  stageHalf,
  speed,
  nodeSize,
  running,
  entered,
  reduceMotion,
  activeName,
  activeCategory,
  projects,
  onHover,
  onSelect,
}: OrbitRingProps) {
  const angle = useMotionValue(0) // ring rotation in degrees
  const reveal = useMotionValue(0) // 0 -> 1 entrance progress
  const radius = useTransform([reach, reveal], ([r, v]: number[]) => fraction * r * v)
  const diameter = useTransform(radius, (r) => r * 2)

  // Entrance: each ring expands outward a little after the previous one
  useEffect(() => {
    if (!entered) return
    if (reduceMotion) {
      reveal.set(1)
      return
    }
    const controls = animate(reveal, 1, { duration: 1.7, delay: 0.15 + index * 0.25, ease: [0.16, 1, 0.3, 1] })
    return () => controls.stop()
  }, [entered, reduceMotion, index, reveal])

  useAnimationFrame((_, delta) => {
    if (!running) return
    angle.set(angle.get() + direction * (360 / period) * speed.get() * (Math.min(delta, 50) / 1000))
  })

  return (
    <>
      <motion.div
        aria-hidden
        className={cn('pointer-events-none absolute left-1/2 top-1/2 rounded-full border', RING_STYLES[index])}
        style={{ width: diameter, height: diameter, x: '-50%', y: '-50%', rotate: angle, opacity: reveal }}
      />
      {nodes.map((node) => (
        <OrbitNode
          key={node.tech.name}
          node={node}
          ringLabel={ringLabel}
          projects={projects}
          ringAngle={angle}
          reveal={reveal}
          radius={radius}
          stageHalf={stageHalf}
          direction={direction}
          size={nodeSize}
          isActive={activeName === node.tech.name}
          isMatch={activeCategory === 'All' || node.tech.category === activeCategory}
          reduceMotion={reduceMotion}
          onHover={onHover}
          onSelect={onSelect}
        />
      ))}
    </>
  )
}

/* ------------------------------------------------------------------ */

// Approximate tooltip box (px) used to keep the card inside the stage
const TIP_W = 232
const TIP_H = 140

interface OrbitNodeProps {
  node: OrbitNodeData
  ringLabel: string
  projects: ProjectRef[]
  ringAngle: MotionValue<number>
  reveal: MotionValue<number>
  radius: MotionValue<number>
  stageHalf: MotionValue<number>
  direction: 1 | -1
  size: number
  isActive: boolean
  isMatch: boolean
  reduceMotion: boolean
  onHover: (tech: TechBrandInfo | null) => void
  onSelect: (tech: TechBrandInfo) => void
}

function OrbitNode({
  node,
  ringLabel,
  projects,
  ringAngle,
  reveal,
  radius,
  stageHalf,
  direction,
  size,
  isActive,
  isMatch,
  reduceMotion,
  onHover,
  onSelect,
}: OrbitNodeProps) {
  const { tech } = node

  // Nodes are positioned with x/y (never rotated), so icons always stay upright.
  // While revealing, the (1 - reveal) term makes them spiral outward.
  const rotation = useTransform([ringAngle, reveal], ([a, v]: number[]) => a + node.angle + (1 - v) * 140 * direction)
  const x = useTransform([rotation, radius], ([a, r]: number[]) => Math.cos(a * DEG) * r)
  const y = useTransform([rotation, radius], ([a, r]: number[]) => Math.sin(a * DEG) * r)
  const beamLength = useTransform(radius, (r) => Math.max(r - size * 0.6, 0))
  const beamRotate = useTransform(rotation, (a) => a + 180)

  const sizeMV = useMotionValue(size)
  useEffect(() => {
    sizeMV.set(size)
  }, [size, sizeMV])

  const usedIn = useMemo(() => projectsUsing(tech.name, projects), [tech.name, projects])

  // Tooltip stays inside the stage on wide screens and docks to the top on compact ones.
  const tipX = useTransform([x, y, stageHalf], ([vx, , half]: number[]) => {
    if (half < 220) return -vx
    const limit = Math.max(half - TIP_W / 2 - 10, 0)
    return Math.max(Math.min(vx, limit), -limit) - vx
  })
  const tipY = useTransform([x, y, stageHalf, sizeMV], ([, vy, half, nodeSize]: number[]) => {
    if (half < 220) return -vy - half + TIP_H / 2 + 12
    const offset = nodeSize / 2 + 12 + TIP_H / 2
    return vy - offset - TIP_H / 2 >= -half + 8 ? -offset : offset
  })

  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 top-1/2 h-0 w-0"
      style={{ x, y, opacity: reveal, zIndex: isActive ? 40 : 10 }}
    >
      {/* Beam from the selected node to the centre */}
      {isActive && (
        <motion.div
          aria-hidden
          className="absolute left-0 top-0 h-px"
          style={{
            width: beamLength,
            rotate: beamRotate,
            originX: 0,
            originY: 0.5,
            background: 'linear-gradient(90deg, var(--accent), transparent)',
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.9 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      )}

      <div className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2">
        <motion.button
          type="button"
          aria-label={`${tech.name}, ${tech.category}, ${ringLabel} orbit`}
          aria-pressed={isActive}
          onHoverStart={() => onHover(tech)}
          onHoverEnd={() => onHover(null)}
          onFocus={() => onHover(tech)}
          onBlur={() => onHover(null)}
          onClick={() => onSelect(tech)}
          animate={{ scale: isActive ? 1.2 : isMatch ? 1 : 0.75, opacity: isMatch ? 1 : 0.3 }}
          whileHover={{ scale: 1.2, opacity: 1 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 320, damping: 22 }}
          style={{ width: size, height: size }}
          className={cn(
            'group relative flex items-center justify-center rounded-full border bg-surface shadow-md outline-none transition-[border-color,box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-accent',
            isActive ? 'border-accent ring-4 ring-accent/20' : 'border-border hover:border-accent/60',
          )}
        >
          {/* Ping on the selected node */}
          {isActive && !reduceMotion && (
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full border border-accent"
              animate={{ scale: [1, 1.7], opacity: [0.7, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
            />
          )}

          <TechIcon iconKey={tech.iconKey} size={Math.round(size * 0.52)} className="relative" />
        </motion.button>

        {/* Details card: the readout lives on the orbit now */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
          <motion.div className="pointer-events-none" style={{ x: tipX, y: tipY }}>
            <AnimatePresence>
              {isActive && (
                <motion.div
                  key={tech.name}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96, transition: { duration: 0.14 } }}
                  transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                  className="relative w-56 overflow-hidden rounded-2xl border border-border bg-elevated/95 p-3.5 text-left shadow-xl backdrop-blur-md sm:w-60"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-3 top-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)` }}
                  />
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                    {tech.category} · {ringLabel} orbit
                  </p>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <p className="font-display text-sm font-bold text-fg">{tech.name}</p>
                    <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[9px] font-bold uppercase text-accent">
                      {tech.level}
                    </span>
                  </div>
                  <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-muted">{tech.description}</p>
                  {usedIn.length > 0 && (
                    <p className="mt-2 border-t border-border/70 pt-1.5 text-[10px] leading-snug text-muted">
                      <span className="font-bold uppercase tracking-[0.14em] text-accent/80">Used in</span>{' '}
                      {usedIn.join(' · ')}
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
