import { HorizontalDivider, horizontalDividerStyle } from '@/components/dividers'
import { SectionTitle } from '@/components/section-title'
import { HighlightedProjectsItem } from './highlighted-projects-item'
import { cn } from '@/lib/utils'

export function HighlightedProjectsSection() {
  return (
    <section className="container px-4 py-16">
      <SectionTitle title="Projetos em destaque" subtitle="destaques" />
      <HorizontalDivider className="mb-16" />

      <ul>
        {Array.from({ length: 4 }).map((_, index) => (
          <li key={index} className={cn(horizontalDividerStyle, 'pb-8')}>
            <HighlightedProjectsItem />
          </li>
        ))}
      </ul>
    </section>
  )
}
