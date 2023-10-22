'use client'

import { SectionTitle } from '@/components/section-title'
import Link from 'next/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { motion } from 'framer-motion'

export default function ProjectsIntroduction() {
  return (
    <section className="flex h-[450px] w-full flex-col items-center justify-center bg-hero-image bg-cover bg-center bg-no-repeat px-4 lg:h-[630px]">
      <SectionTitle
        title="Meus projetos"
        subtitle="projetos"
        className="items-center text-center [&>h2]:text-4xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="my-6 max-w-[640px] text-sm text-gray-400 sm:text-base">
          Aqui você poderá ver alguns dos meus trabalhos. Navegue à vontade e explore os
          projetos para ver como foram criados, as tecnologias utilizadas e as
          funcionalidades implementadas.
        </p>
        <Link
          href={'/'}
          className="inline-flex items-center justify-center gap-2 transition-colors hover:text-emerald-500"
        >
          <HiArrowNarrowLeft size={20} />
          Voltar para home
        </Link>
      </motion.div>
    </section>
  )
}
