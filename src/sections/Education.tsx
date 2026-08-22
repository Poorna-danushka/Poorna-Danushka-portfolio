import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Timeline, TimelineItem } from '../components/TimelineItem'
import { portfolio } from '../data/portfolio'

export function Education() {
  return (
    <section id="education" className="section-band py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Academic" title="Education" />
        <div className="mt-12">
          <Timeline>
            {portfolio.education.map((entry, index) => (
              <TimelineItem
                key={entry.id}
                eyebrow={entry.status}
                title={entry.institution}
                subtitle={entry.qualification}
                location={entry.location}
                description={entry.description}
                subjects={entry.subjects}
                isLast={index === portfolio.education.length - 1}
              />
            ))}
          </Timeline>
        </div>
      </Container>
    </section>
  )
}
