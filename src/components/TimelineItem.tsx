import type { ReactNode } from 'react'
import type { EducationSubject } from '../types/portfolio'

type Props = {
  eyebrow: string
  title: string
  subtitle?: string
  location?: string
  description: string
  subjects?: EducationSubject[]
  isLast?: boolean
}

export function TimelineItem({
  eyebrow,
  title,
  subtitle,
  location,
  description,
  subjects,
  isLast,
}: Props) {
  return (
    <article className="relative grid gap-4 pl-10 md:grid-cols-[180px_1fr] md:pl-0">
      <div className="md:text-right">
        <p className="text-sm font-semibold text-accent">{eyebrow}</p>
        {location ? <p className="mt-1 text-sm text-muted">{location}</p> : null}
      </div>
      <div className="relative">
        <span
          className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg md:left-[-2.15rem]"
          aria-hidden
        />
        {!isLast ? (
          <span className="absolute -left-[1.55rem] top-5 h-[calc(100%+1.5rem)] w-px bg-border md:left-[-1.85rem]" aria-hidden />
        ) : null}
        <div className="rounded-3xl border border-border bg-elevated/80 p-5">
          <h3 className="text-lg font-bold text-fg">{title}</h3>
          {subtitle ? (
            <p className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-accent/10 px-2.5 py-1 text-sm font-semibold text-accent">
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h5m-5 0V10m0 0H9m3 0h3m-3 0V6" />
              </svg>
              <span>{subtitle}</span>
            </p>
          ) : null}
          <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
          {subjects && subjects.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-2">
              {subjects.map((subject) => (
                <li
                  key={subject.name}
                  className="group flex items-center gap-2 rounded-2xl border border-border bg-bg/70 px-3 py-2 text-sm transition hover:-translate-y-0.5 hover:border-accent/40 motion-reduce:transform-none"
                >
                  <span className="text-fg">{subject.name}</span>
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-accent/15 text-xs font-bold text-accent">
                    {subject.grade}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export function Timeline({ children }: { children: ReactNode }) {
  return <div className="space-y-8 md:ml-8">{children}</div>
}
