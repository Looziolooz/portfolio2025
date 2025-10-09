export interface Project {
  id: number;
  name: string;
  image: string;
  tags: string[];
  description: string;
  netlify?: string;
  github: string;
  featured: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  tags: string[];
  readTime?: string;
}

export interface Skill {
  name: string;
  category: "code" | "toolbox" | "upcoming" | "more";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}