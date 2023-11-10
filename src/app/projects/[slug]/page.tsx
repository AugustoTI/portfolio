import { ProjectDetails } from './_components/project-details'
import { notFound } from 'next/navigation'
import { type Metadata } from 'next'
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query'
import { type Project } from '@/types/hygraph/project'
import { ProjectPreview } from './_components/project-preview'

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery() {
      projects(first: 100) {
        slug
      }
    }
  `
  const { projects } = await fetchHygraphQuery<{ projects: { slug: string }[] }>(query)

  return projects
}

async function getProjectDetails(slug: string): Promise<{ project: Project }> {
  const query = `
  query ProjectQuery() {
    project(where: {slug: "${slug}"}) {
      page_thumbnail {
        url
      }
      thumbnail {
        url
      }
      sections {
        id
        title
        image {
          url
        }
      }
      title
      short_description
      description {
        raw
        text
      }
      technologies {
        id
        name
      }
      project_url
      github_url
    }
  }
  `
  const data = fetchHygraphQuery<{ project: Project }>(
    query,
    60 * 60 * 12, // 12 hours
  )

  return data
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { project } = await getProjectDetails(slug)

  if (!project) notFound()

  return {
    title: project.title,
    description: project.short_description,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { project } = await getProjectDetails(params.slug)

  if (!project) notFound()

  return (
    <>
      <ProjectDetails data={project} />
      <ProjectPreview previews={project.sections} />
    </>
  )
}
