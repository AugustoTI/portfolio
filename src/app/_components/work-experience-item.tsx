import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { type WorkExperience } from '@/lib/sanity/queries/home'
import { urlFor } from '@/lib/utils'
import { PortableText, type PortableTextReactComponents } from '@portabletext/react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

type WorkExperienceItemProps = WorkExperience

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal({ children }) {
      return <p className="mb-3 text-sm sm:text-base">{children}</p>
    },
  },
  marks: {
    strong({ children }) {
      return <strong className="font-medium text-gray-50">{children}</strong>
    },
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noreferrer' : undefined}
          className="underline transition-colors hover:text-emerald-500"
        >
          {children}
        </a>
      )
    },
  },
  list: {
    bullet({ children }) {
      return (
        <ul className="flex list-inside list-disc flex-col gap-1 pl-2">{children}</ul>
      )
    },
  },
}

export function WorkExperienceItem(props: WorkExperienceItemProps) {
  const startDate = new Date(props.start_date)

  const formattedStartDate = format(startDate, 'MMM yyyy', { locale: ptBR })
  const formattedEndDate = props.end_date
    ? format(new Date(props.end_date), 'MMM yyyy', { locale: ptBR })
    : 'atualmente'

  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={urlFor(props.company_logo).width(40).height(40).url()}
            width={40}
            height={40}
            alt="Logo da empresa"
            className="rounded-full"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800"></div>
      </div>
      <div>
        <div className="flex flex-col items-start gap-2 text-sm sm:text-base">
          <a
            href={props.company_url}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 transition hover:text-emerald-500"
          >
            @{props.company_name}
          </a>
          <h3 className="text-gray-300">{props.role}</h3>
          <span className="text-gray-500">
            {formattedStartDate} • {formattedEndDate}
          </span>
          <div className="text-gray-400">
            <PortableText
              value={props.introduction}
              components={myPortableTextComponents}
            />
          </div>
          <h4 className="mb-3 mt-6 text-sm font-semibold text-gray-400">Competências</h4>
          <ul className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
            {props.technologies.map((technology) => (
              <Badge key={technology._id} asChild>
                <li>{technology.name}</li>
              </Badge>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
