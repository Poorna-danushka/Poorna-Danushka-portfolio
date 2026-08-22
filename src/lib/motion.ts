import type { Variants } from 'motion/react'

export const ease = [0.22, 1, 0.36, 1] as const

export const fadeUp = (reduced: boolean): Variants => ({
  hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: reduced ? { duration: 0 } : { duration: 0.6, ease },
  },
})

export const fadeIn = (reduced: boolean): Variants => ({
  hidden: reduced ? { opacity: 1 } : { opacity: 0 },
  visible: {
    opacity: 1,
    transition: reduced ? { duration: 0 } : { duration: 0.5, ease },
  },
})

export const scaleIn = (reduced: boolean): Variants => ({
  hidden: reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: reduced ? { duration: 0 } : { duration: 0.7, ease },
  },
})

export const stagger = (reduced: boolean, delay = 0.08) => ({
  hidden: {},
  visible: {
    transition: reduced ? { staggerChildren: 0 } : { staggerChildren: delay },
  },
})
