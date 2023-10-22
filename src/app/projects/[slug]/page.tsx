import { getDataProjectPage, getDataProjectsPage } from '@/lib/sanity/queries/project'
import { ProjectDetails } from './_components/project-details'
import { ProjectPreview } from './_components/project-preview'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { urlFor } from '@/lib/utils'

export async function generateStaticParams() {
  const projects = await getDataProjectsPage()

  return projects.map((project) => project.slug.current)
}

export async function generateMetadata({
  params: { slug },
}: ProjectPageProps): Promise<Metadata> {
  const project = await getDataProjectPage(slug)

  return {
    title: project.name,
    description: project.short_description,
    openGraph: {
      images: [
        {
          url: urlFor(project.thumbnail).width(1200).height(630).url(),
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getDataProjectPage(params.slug)

  if (!project) notFound()

  return (
    <>
      <ProjectDetails data={project} />
      <ProjectPreview previews={project.sections_preview} />
    </>
  )
}
