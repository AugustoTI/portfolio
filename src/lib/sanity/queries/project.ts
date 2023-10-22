import { groq } from 'next-sanity'
import { sanityClient } from '../client'
import { type HighlightProject as PartialProjectData, Project } from './home'

export async function getDataProjectsPage(): Promise<PartialProjectData[]> {
  return sanityClient.fetch(
    groq`
    *[_type=='project'] {
      _id,
      slug,
      name,
      thumbnail,
      technologies[]->,
      short_description
    }
  `,
    {},
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    },
  )
}

export async function getDataProjectPage(slug: string): Promise<Project> {
  return sanityClient.fetch(
    groq`
    *[_type=='project' && slug.current==$slug] {
      _id,
      slug,
      name,
      thumbnail,
      technologies[]->,
      short_description,
      github_url,
      live_project_url,
      sections_preview,
      description
    }[0]
  `,
    {
      slug,
    },
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    },
  )
}
