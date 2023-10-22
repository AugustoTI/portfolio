import { getDataProjectPage, getDataProjectsPage } from '@/lib/sanity/queries/project'
import { ProjectDetails } from './_components/project-details'
import { ProjectPreview } from './_components/project-preview'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const projects = await getDataProjectsPage()

  return projects.map((project) => project.slug.current)
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
