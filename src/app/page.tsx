import { HeroSection } from './_components/hero-section'
import { HighlightedProjectsSection } from './_components/highlighted-projects-section'
import { KnownSection } from './_components/known-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <KnownSection />
      <HighlightedProjectsSection />
    </>
  )
}
