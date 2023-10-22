import { groq } from 'next-sanity'
import { sanityClient } from '../client'
import { type SanityImageSource } from '@sanity/image-url/lib/types/types'
import { PortableTextProps } from '@portabletext/react'

export interface SocialMedia {
  _id: string
  url: string
  name: string
  icon_svg: string | TrustedHTML
}

export interface ProjectPreview {
  title: string
  image_preview: SanityImageSource
}

export interface Project {
  _id: string
  slug: { current: string }
  name: string
  thumbnail: SanityImageSource
  technologies: Technology[]
  short_description: string
  github_url: string
  live_project_url: string
  sections_preview: ProjectPreview[]
  description: PortableTextProps['value']
}

export type HighlightProject = Omit<
  Project,
  'github_url' | 'live_project_url' | 'sections_preview'
>

export interface WorkExperience {
  _id: string
  company_url: string
  company_name: string
  company_logo: SanityImageSource
  role: string
  start_date: string
  end_date: string | null
  introduction: PortableTextProps['value']
  technologies: Technology[]
}

export interface Technology extends Omit<SocialMedia, 'url'> {}

export interface DataHomePageProps {
  profile_picture: SanityImageSource
  social_medias: SocialMedia[]
  intro_technologies: Technology[]
  known_technologies: Technology[]
  introduction: PortableTextProps['value']
  highlight_projects: HighlightProject[]
  work_experiences: WorkExperience[]
}

export async function getDataHomePage(): Promise<DataHomePageProps> {
  return sanityClient.fetch(
    groq`
  *[_type=='page' && slug.current=='home']{
    introduction,
    profile_picture,
    social_medias[]->{
      url,
      _id,
      icon_svg,
      name,
    },
    intro_technologies[]->{
      _id,
      icon_svg,
      name
    },
    known_technologies[]->{
      _id,
      icon_svg,
      name
    },
    highlight_projects[]->{
      _id,
      slug,
      name,
      thumbnail,
      technologies[]->,
      short_description
    },
    work_experiences[]->{
      _id,
      company_name,
      company_logo,
      company_url,
      role,
      start_date,
      end_date,
      technologies[]->{
        _id,
        name
      },
      introduction
    }
  }[0]
  `,
    {},
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    },
  )
}
