import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Timeline, TimelineItem } from '../components/TimelineItem'
import { portfolio } from '../data/portfolio'

export function Journey() {
  return (
    <section id="journey" className="section-band py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow="Path" title="My Journey" />
        <div className="mt-8 sm:mt-12">
          <Timeline>
            {portfolio.journey.map((entry, index) => (
              <TimelineItem
                key={entry.id}
                eyebrow={entry.context}
                title={entry.title}
                description={entry.description}
                isLast={index === portfolio.journey.length - 1}
              />
            ))}
          </Timeline>
        </div>
      </Container>
    </section>
  )
}
