import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

export function WorkExperienceItem() {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={'https://fakeimg.pl/40x40'}
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
            href="https://www.linkedin.com/company/descoinvest/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 transition hover:text-emerald-500"
          >
            @ Descoinvest
          </a>
          <h3 className="text-gray-300">Desenvolvedor FullStack</h3>
          <span className="text-gray-500">Setembro 2023 - Atualmente - (1 Mês)</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est voluptate
            consequatur fugit quae numquam commodi incidunt ipsa recusandae doloremque
            atque.
          </p>
          <h4 className="mb-3 mt-6 text-sm font-semibold text-gray-400">Competências</h4>
          <ul className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index}>
                <Badge asChild className="font-normal">
                  <strong>React</strong>
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
