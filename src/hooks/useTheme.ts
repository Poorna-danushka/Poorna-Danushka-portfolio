import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'
const THEME_CHANGE_EVENT = 'portfolio-theme-change'

export type Theme = 'dark' | 'light'

function getPreferredTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'dark' || stored === 'light') return stored
  } catch {
    /* ignore */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: Theme): void {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.documentElement.style.colorScheme = theme
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getPreferredTheme)

  useEffect(() => {
    const syncTheme = (event: Event) => {
      const next = (event as CustomEvent<Theme>).detail
      if (next === 'dark' || next === 'light') setThemeState(next)
    }
    window.addEventListener(THEME_CHANGE_EVENT, syncTheme)
    return () => window.removeEventListener(THEME_CHANGE_EVENT, syncTheme)
  }, [])

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const setTheme = (next: Theme) => {
    setThemeState(next)
    applyTheme(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new CustomEvent<Theme>(THEME_CHANGE_EVENT, { detail: next }))
  }

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return { theme, setTheme, toggleTheme }
}
