import { getDataHomePage } from '@/lib/sanity/queries/home'
import { HeroSection } from './_components/hero-section'
import { HighlightedProjectsSection } from './_components/highlighted-projects-section'
import { KnownSection } from './_components/known-section'
import { WorkExperience } from './_components/work-experience'

export default async function HomePage() {
  const pageData = await getDataHomePage()

  return (
    <>
      <HeroSection data={pageData} />
      <KnownSection data={pageData.known_technologies} />
      <HighlightedProjectsSection data={pageData.highlight_projects} />
      <WorkExperience data={pageData.work_experiences} />
    </>
  )
}
