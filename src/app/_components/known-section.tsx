import { TbBrandNextjs } from 'react-icons/tb'
import { KnownSectionItem } from './known-section-item'
import { SectionTitle } from '@/components/section-title'

export function KnownSection() {
  return (
    <section className="container px-4 py-16">
      <SectionTitle title="Conhecimentos" subtitle="competências" />
      <ul className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <li key={index}>
            <KnownSectionItem
              tech={{ icon: <TbBrandNextjs size={24} />, name: 'NextJS' }}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
