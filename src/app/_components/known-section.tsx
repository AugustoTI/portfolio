import { KnownSectionItem } from './known-section-item'
import { SectionTitle } from '@/components/section-title'
import { type Technology } from '@/lib/sanity/queries/home'

interface KnownSectionProps {
  data: Technology[]
}

export function KnownSection({ data }: KnownSectionProps) {
  return (
    <section className="container px-4 py-16">
      <SectionTitle title="Conhecimentos" subtitle="competências" />
      <ul className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-4">
        {data.map((item) => (
          <li key={item._id}>
            <KnownSectionItem tech={{ icon: item.icon_svg, name: item.name }} />
          </li>
        ))}
      </ul>
    </section>
  )
}
