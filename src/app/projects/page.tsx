import { type Metadata } from 'next'
import ProjectsIntroduction from './_components/projects-introduction'
import { ProjectsList } from './_components/projects-list'

export const metadata: Metadata = {
  title: 'Projetos',
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsIntroduction />
      <ProjectsList />
    </>
  )
}
