import { type RichTextContent } from '@graphcms/rich-text-types'
import { type IconData } from './icon'
import { type Project } from './project'

export interface HomePageData {
  page: Page
}

export interface Page {
  introduction: { raw: RichTextContent }
  intro_technologies: Omit<IconData, 'icon_svg'>[]
  social_medias: (IconData & { url: string })[]
  profile_picture: { url: string }
  known_technologies: IconData[]
  highlight_projects: HighlightProject[]
  work_experiences: WorkExperience[]
}

export type HighlightProject = Omit<
  Project,
  'project_url' | 'github_url' | 'page_thumbnail' | 'description' | 'sections'
>

export interface WorkExperience {
  id: string
  role: string
  company_logo: { url: string }
  company_name: string
  company_url: string
  description: { raw: RichTextContent }
  technologies: IconData[]
  start_date: Date
  end_date: null
}
