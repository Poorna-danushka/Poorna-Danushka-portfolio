import { useState, useEffect } from 'react'

type Props = {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
  cursorClassName?: string
}

export function TypewriterText({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className = '',
  cursorClassName = 'text-accent',
}: Props) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (words.length === 0) return

    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true)
      }, pauseDuration)
      return () => clearTimeout(timeout)
    }

    if (subIndex === 0 && reverse) {
      const timeout = setTimeout(() => {
        setReverse(false)
        setIndex((prev) => (prev + 1) % words.length)
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1))
      },
      reverse ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed, pauseDuration])

  const currentWord = words[index] ?? ''
  const textToShow = currentWord.substring(0, subIndex)

  return (
    <span className={className}>
      <span>{textToShow}</span>
      <span className={`inline-block animate-pulse font-bold ${cursorClassName}`}>|</span>
    </span>
  )
}
