import { type Metadata } from 'next'
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query'
import { HeroSection } from './_components/hero-section'
import { KnownSection } from './_components/known-section'
import { HighlightedProjectsSection } from './_components/highlighted-projects-section'
import { WorkExperience } from './_components/work-experience'
import { type HomePageData } from '@/types/hygraph/page-info'

export const metadata: Metadata = {
  title: 'Home | Augusto César',
}

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query MyQuery {
    page(where: {slug: "home"}) {
      introduction {
        raw
      }
      intro_technologies {
        id
        name
      }
      social_medias {
        id
        name
        icon_svg
        url
      }
      profile_picture {
        url
      }
      known_technologies {
        id
        name
        icon_svg
      }
      highlight_projects {
        id
        slug
        thumbnail {
          url
        }
        title
        short_description
        technologies {
          id
          name
        }
      }
      work_experiences {
        id
        role
        company_logo {
          url
        }
        company_name
        company_url
        description {
          raw
        }
        technologies {
          id
          name
        }
        start_date
        end_date
      }
    }
  }
  `

  return fetchHygraphQuery(
    query,
    60 * 60 * 12, // 12 hours
  )
}

export default async function HomePage() {
  const { page } = await getPageData()

  return (
    <>
      <HeroSection data={page} />
      <KnownSection data={page.known_technologies} />
      <HighlightedProjectsSection data={page.highlight_projects} />
      <WorkExperience data={page.work_experiences} />
    </>
  )
}
