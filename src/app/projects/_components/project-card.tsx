import { HighlightProject as PartialProjectData } from '@/lib/sanity/queries/home'
import { urlFor } from '@/lib/utils'
import Image from 'next/image'

export function ProjectCard(props: PartialProjectData) {
  const technologies = props.technologies.map((technology) => technology.name).join(', ')

  return (
    <div className="group flex h-[436px] flex-col overflow-hidden rounded-lg border-2 border-transparent bg-gray-800 opacity-70 transition hover:border-emerald-500 hover:opacity-100">
      <div className=" h-48 w-full overflow-hidden">
        <Image
          src={urlFor(props.thumbnail).width(380).height(200).url()}
          width={380}
          height={200}
          alt="Thumbnail do projeto"
          unoptimized
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <strong className="font-medium text-gray-50/90 transition group-hover:text-emerald-500">
          {props.name}
        </strong>
        <p className="mt-2 line-clamp-4 text-gray-400">{props.short_description}</p>
        <span className="mt-auto block truncate text-sm font-medium text-gray-300">
          {technologies}
        </span>
      </div>
    </div>
  )
}
