import { type RichTextContent } from '@graphcms/rich-text-types'
import { type IconData } from './icon'

interface ProjectSection {
  id: string
  title: string
  image: { url: string }
}

export interface Project {
  id: string
  slug: string
  project_url: string
  github_url: string
  title: string
  thumbnail: { url: string }
  page_thumbnail: { url: string }
  short_description: string
  description: { raw: RichTextContent; text: string }
  sections: ProjectSection[]
  technologies: IconData[]
}
