import { useState } from 'react'

export function useTilt(maxTilt = 12, reduced = false) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 })

  if (reduced) {
    return {
      style: {},
      onMouseMove: () => {},
      onMouseLeave: () => {},
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -maxTilt
    const rotateY = ((x - centerX) / centerX) * maxTilt

    const glowX = (x / rect.width) * 100
    const glowY = (y / rect.height) * 100

    setTilt({ rotateX, rotateY, glowX, glowY })
  }

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 })
  }

  return {
    style: {
      transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
      transition: 'transform 0.15s ease-out',
    },
    glowStyle: {
      background: `radial-gradient(600px circle at ${tilt.glowX}% ${tilt.glowY}%, var(--glow), transparent 70%)`,
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  }
}
