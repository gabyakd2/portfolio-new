export interface ProjectRoot {
  projects: Project[]
}

export interface Project {
  id: number
  name: string
  description: string
  technologies: string[]
  repository: string
}