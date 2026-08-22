import type { Skill } from '../types/portfolio'

export function SkillCard({ name, level }: Skill) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-elevated px-3 py-1.5 text-sm text-fg">
      {name}
      {level ? <span className="text-xs text-muted">{level}</span> : null}
    </span>
  )
}
