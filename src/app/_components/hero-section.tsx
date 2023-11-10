'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { badgeAnimation } from '@/lib/animations'
import { type Page as PageData } from '@/types/hygraph/page-info'
import { RichText } from '@/components/rich-text'

interface HeroSectionProps {
  data: PageData
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="flex w-full flex-col justify-end bg-hero-image bg-cover bg-center bg-no-repeat pb-10 pt-32 sm:pb-32 lg:h-[755px] lg:pb-[110px]">
      <div className="container flex flex-col-reverse items-start justify-between px-4 lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:max-w-[530px]"
        >
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h1 className="mt-2 text-4xl font-medium">Augusto César</h1>
          <RichText content={data.introduction.raw} />
          <ul className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {data.intro_technologies.map((technology, index) => (
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
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-5 lg:mt-10">
            <Button className="w-max gap-2 shadow-button hover:scale-105" asChild>
              <Link href="/#contato">
                Entrar em contato
                <HiArrowNarrowRight size={18} />
              </Link>
            </Button>

            <ul className="flex h-20 items-center gap-3 text-2xl text-gray-600">
              {data.social_medias.map((social_media) => (
                <li key={social_media.id}>
                  <a
                    className="transition-colors hover:text-gray-100"
                    href={social_media.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      dangerouslySetInnerHTML={{ __html: social_media.icon_svg }}
                      aria-hidden
                    />
                    <span className="sr-only">{social_media.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            width={420}
            height={404}
            priority
            src={data.profile_picture.url}
            alt="Foto de perfil do Augusto César"
            className="mb-6 h-[300px] w-[300px] rounded-lg object-cover shadow-2xl lg:mb-0 lg:h-[404px] lg:w-[420px]"
            quality={85}
          />
        </motion.div>
      </div>
    </section>
  )
}
