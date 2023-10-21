import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { type HighlightProject } from '@/lib/sanity/queries/home'
import { urlFor } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'

type HighlightedProjectsItemProps = HighlightProject

export function HighlightedProjectsItem(props: HighlightedProjectsItemProps) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[450px,1fr] lg:gap-12">
      <div>
        <Image
          src={urlFor(props.thumbnail).width(420).height(304).url()}
          width={420}
          height={304}
          alt="Thumbnail do projeto"
          className="h-[200px] w-full rounded-lg object-cover sm:h-[300px] lg:min-h-full lg:w-[420px]"
        />
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-50">{props.name}</h3>
        <p className="my-6 text-gray-400">{props.short_description}</p>
        <ul className="mb-8 flex flex-wrap gap-2 gap-y-3 lg:max-w-[350px]">
          {props.technologies.map((technology) => (
            <Badge key={technology._id} asChild className="font-normal">
              <li>{technology.name}</li>
            </Badge>
          ))}
        </ul>
        <Button asChild variant="ghost" className="w-max gap-2 text-sm">
          <Link href={`/projects/${props.slug.current}`}>
            Veja mais <HiArrowNarrowRight aria-hidden />
          </Link>
        </Button>
      </div>
    </div>
  )
}
