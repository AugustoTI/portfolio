import { SectionTitle } from '@/components/section-title'
import { WorkExperienceItem } from './work-experience-item'
import { type WorkExperience } from '@/types/hygraph/page-info'

interface WorkExperienceProps {
  data: WorkExperience[]
}

export function WorkExperience({ data }: WorkExperienceProps) {
  return (
    <section className="container flex flex-col gap-10 px-4 py-16 sm:gap-4 md:flex-row lg:gap-16">
      <div className="max-w-[420px]">
        <SectionTitle title="Experiência Profissional" subtitle="Experiências" />
        <p className="mt-6 text-gray-400">
          Estou sempre aberto a novos desafios e projetos emocionantes. Vamos trabalhar
          juntos para criar soluções incríveis para sua empresa!
        </p>
      </div>

      <ul className="flex flex-col gap-4">
        {data.map((workExperience) => (
          <li key={workExperience.id}>
            <WorkExperienceItem {...workExperience} />
          </li>
        ))}
      </ul>
    </section>
  )
}
