import Link from 'next/link'
import { ProjectCard } from './project-card'
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query'
import { type HighlightProject as PartialProject } from '@/types/hygraph/page-info'

interface PageData {
  projects: PartialProject[]
}

const getPageData = async (): Promise<PageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        id
        short_description
        slug
        title
        thumbnail {
          url
        }
        technologies {
          id
          name
        }
      }
    }
    `

  return fetchHygraphQuery(
    query,
    60 * 60 * 12, // 12 hours
  )
}

export async function ProjectsList() {
  const { projects } = await getPageData()

  return (
    <section className="container px-4 py-32">
      <ul className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.slug}`}>
              <ProjectCard {...project} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
