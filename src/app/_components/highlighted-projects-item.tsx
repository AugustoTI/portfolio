import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'

export function HighlightedProjectsItem() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
      <div className="h-full w-full">
        <Image
          src={'https://fakeimg.pl/420x304'}
          width={420}
          height={304}
          alt="Thumbnail do projeto"
          className="h-[200px] w-full rounded-lg object-cover sm:h-[300px] lg:min-h-full lg:w-[420px]"
        />
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-50">Title of project</h3>
        <p className="my-6 text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum dolorem sunt
          officia. Velit adipisci ullam ducimus, provident sequi officia. Doloremque
          maxime quaerat quidem iure sunt natus similique odit atque harum.
        </p>
        <ul className="mb-8 flex flex-wrap gap-2 gap-y-3 lg:max-w-[350px]">
          {Array.from({ length: 6 }).map((_, index) => (
            <li key={index}>
              <Badge asChild className="font-normal">
                <strong>NextJS</strong>
              </Badge>
            </li>
          ))}
        </ul>
        <Button asChild variant="ghost" className="w-max gap-2 text-sm">
          <Link href={'/projects'}>
            Veja mais <HiArrowNarrowRight aria-hidden />
          </Link>
        </Button>
      </div>
    </div>
  )
}
