// Project type definition
export interface Project {
  id: number;
  name: string;
  image: string;
  tags: string[];
  description: string;
  netlify: string | null;
  github: string;
}

export interface ProjectsData {
  projects: Project[];
}