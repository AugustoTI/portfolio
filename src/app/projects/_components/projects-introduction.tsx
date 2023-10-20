import { SectionTitle } from '@/components/section-title'
import Link from 'next/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export default function ProjectsIntroduction() {
  return (
    <section className="flex h-[450px] w-full flex-col items-center justify-center bg-hero-image bg-cover bg-center bg-no-repeat px-4 lg:h-[630px]">
      <SectionTitle
        title="Meus projetos"
        subtitle="projetos"
        className="items-center text-center [&>h2]:text-4xl"
      />
      <div className="text-center">
        <p className="my-6 max-w-[640px] text-sm text-gray-400 sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas voluptatum
          laboriosam, explicabo ullam, adipisci vel sapiente corporis veniam corrupti,
          asperiores deleniti voluptatibus molestiae minima.
        </p>
        <Link
          href={'/'}
          className="inline-flex items-center justify-center gap-2 transition-colors hover:text-emerald-500"
        >
          <HiArrowNarrowLeft size={20} />
          Voltar para home
        </Link>
      </div>
    </section>
  )
}
