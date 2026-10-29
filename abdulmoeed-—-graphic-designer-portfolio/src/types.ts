export type ProjectCategory = 'All' | 'Packaging' | 'Brand Identity' | 'Editorial & Poster';

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  location: string;
  year: string;
  category: 'Packaging' | 'Brand Identity' | 'Editorial & Poster';
  heroImage: string;
  shortDescription: string;
  fullStory: string;
  deliverables: string[];
  palette: string[];
  typography: string;
  aspectRatio?: string;
  featured?: boolean;
  stat?: string;
  statLabel?: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tools: string[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  project: string;
  impact: string;
}

export interface SkillItem {
  name: string;
  category: 'Software' | 'Discipline' | 'Production';
  level: string;
  description: string;
}
