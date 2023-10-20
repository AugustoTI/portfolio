import { SectionTitle } from '@/components/section-title'
import { WorkExperienceItem } from './work-experience-item'

export function WorkExperience() {
  return (
    <section className="container flex flex-col gap-10 px-4 py-16 sm:gap-4 md:flex-row lg:gap-16">
      <div className="max-w-[420px]">
        <SectionTitle title="Experiência Profissional" subtitle="Experiências" />
        <p className="mt-6 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minima nam rem
          nesciunt ad, a recusandae ducimus hic.
        </p>
      </div>

      <ul className="flex flex-col gap-4">
        <li>
          <WorkExperienceItem />
        </li>
        <li>
          <WorkExperienceItem />
        </li>
      </ul>
    </section>
  )
}
