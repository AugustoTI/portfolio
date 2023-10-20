import { HorizontalDivider, horizontalDividerStyle } from '@/components/dividers'
import { SectionTitle } from '@/components/section-title'
import { HighlightedProjectsItem } from './highlighted-projects-item'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'

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
      <p className="flex items-center gap-1.5">
        <span className="text-gray-400">Se interessou?</span>
        <Link
          href="/projects"
          className="flex items-center gap-2 transition-colors hover:text-emerald-500"
        >
          Ver todos
          <HiArrowNarrowRight aria-hidden />
        </Link>
      </p>
    </section>
  )
}
