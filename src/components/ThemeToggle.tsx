import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-elevated/70 text-fg transition hover:border-accent/50"
      aria-label={theme === 'dark' ? 'Switch to white theme' : 'Switch to dark theme'}
      aria-pressed={theme === 'dark'}
      title={theme === 'dark' ? 'Switch to white theme' : 'Switch to dark theme'}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
