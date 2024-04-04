export interface ProjectRoot {
  projects: Project[]
}

export interface Project {
  name: string
  description: string
  technologies: string[]
  repository: string
}