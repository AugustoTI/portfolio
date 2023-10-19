import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'

const mockContacts = [
  { url: 'https://github.com/', Icon: TbBrandGithub },
  { url: 'https://www.linkedin.com', Icon: TbBrandLinkedin },
  { url: 'https://www.whatsapp.com', Icon: TbBrandWhatsapp },
]

export function HeroSection() {
  return (
    <section className="flex w-full flex-col justify-end bg-hero-image bg-cover bg-center bg-no-repeat pb-10 pt-32 sm:pb-32 lg:h-[755px] lg:pb-[110px]">
      <div className="container flex flex-col-reverse items-start justify-between px-4 lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h1 className="mt-2 text-4xl font-medium">Augusto César</h1>
          <p className="my-6 text-sm text-gray-400 sm:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus tempora
            reprehenderit veniam eligendi quasi fugiat sit quae cumque, nemo quidem, sequi
            magni id enim pariatur! Tempore saepe cum neque asperiores.
          </p>
          <ul className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index}>
                <Badge asChild className="font-normal">
                  <strong>NextJS</strong>
                </Badge>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-5 lg:mt-10">
            <Button className="w-max shadow-button">
              Entrar em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <ul className="flex h-20 items-center gap-3 text-2xl text-gray-600">
              {mockContacts.map((contact) => (
                <li key={contact.url}>
                  <a
                    className="transition-colors hover:text-gray-100"
                    href={contact.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <contact.Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile.jpg"
          alt="Foto de perfil do Augusto César"
          className="mb-6 h-[300px] w-[300px] rounded-lg object-cover shadow-2xl lg:mb-0 lg:h-[404px] lg:w-[420px]"
        />
      </div>
    </section>
  )
}
