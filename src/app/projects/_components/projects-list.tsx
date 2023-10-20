import Link from 'next/link'
import { ProjectCard } from './project-card'

export function ProjectsList() {
  return (
    <section className="container px-4 py-32">
      <ul className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index}>
            <Link href={`/projects/${index}`}>
              <ProjectCard />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
