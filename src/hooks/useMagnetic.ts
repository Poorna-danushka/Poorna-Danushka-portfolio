import { useRef } from 'react'
import { useMotionValue, useSpring } from 'motion/react'

/**
 * Gives an element a subtle "magnetic" pull toward the cursor while hovered,
 * and snaps back to rest on leave. Disabled entirely for reduced-motion users.
 */
export function useMagnetic(strength = 0.35, reduced = false) {
  const ref = useRef<HTMLElement | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 })

  if (reduced) {
    return { ref, style: {} }
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = event.clientX - (rect.left + rect.width / 2)
    const relY = event.clientY - (rect.top + rect.height / 2)
    x.set(relX * strength)
    y.set(relY * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return {
    ref,
    style: { x: springX, y: springY },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  }
}
