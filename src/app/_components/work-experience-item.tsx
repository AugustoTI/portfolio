'use client'

import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { motion } from 'framer-motion'
import { badgeAnimation, fadeUpAnimation } from '@/lib/animations'
import { WorkExperience } from '@/types/hygraph/page-info'
import { RichText } from '@/components/rich-text'

type WorkExperienceItemProps = WorkExperience

export function WorkExperienceItem(props: WorkExperienceItemProps) {
  const startDate = new Date(props.start_date)

  const formattedStartDate = format(startDate, 'MMM yyyy', { locale: ptBR })
  const formattedEndDate = props.end_date
    ? format(new Date(props.end_date), 'MMM yyyy', { locale: ptBR })
    : 'atualmente'

  return (
    <motion.div
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={props.company_logo.url}
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
            <RichText content={props.description.raw} />
          </div>
          <h4 className="mb-3 mt-6 text-sm font-semibold text-gray-400">Competências</h4>
          <ul className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
            {props.technologies.map((technology, index) => (
              <Badge key={technology.id} asChild>
                <motion.li
                  {...badgeAnimation}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  {technology.name}
                </motion.li>
              </Badge>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
