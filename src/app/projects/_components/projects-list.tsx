import Link from 'next/link'
import { ProjectCard } from './project-card'
import { getDataProjectsPage } from '@/lib/sanity/queries/project'

export async function ProjectsList() {
  const projects = await getDataProjectsPage()

  return (
    <section className="container px-4 py-32">
      <ul className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        {projects.map((project) => (
          <li key={project._id}>
            <Link href={`/projects/${project.slug.current}`}>
              <ProjectCard {...project} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
