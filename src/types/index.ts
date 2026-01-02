/**
 * Type definitions for portfolio data
 * Maps to the structure in user data.txt
 */

// ===========================================
// IDENTITY & CONTACT
// ===========================================

export interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
  resume_pdf: string;
}

export interface Location {
  city: string;
  country: string;
  remote_open: boolean;
}

export interface Identity {
  full_name: string;
  preferred_name: string;
  headline: string;
  roles: string[];
  location: Location;
  contact: SocialLinks;
}

// ===========================================
// EDUCATION
// ===========================================

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  start_year: string;
  end_year: string;
  cgpa: string;
}

// ===========================================
// SKILLS
// ===========================================

export interface SkillLanguage {
  name: string;
  used_in: string[];
}

export interface SkillFramework {
  name: string;
  context: string;
  artifacts: string[];
}

export interface Skills {
  languages: SkillLanguage[];
  frameworks_and_tools: SkillFramework[];
  systems_and_concepts: string[];
  data_and_ml: string[];
}

// ===========================================
// PROJECTS
// ===========================================

export interface ProjectLinks {
  repo?: string;
  demo?: string;
}

export interface Project {
  id: string; // slug for routing
  title: string;
  type: string;
  timeline: string;
  featured?: boolean; // Show on homepage
  one_liner: string;
  problem_statement: string;
  technical_approach: string[];
  tech_stack: string[];
  evaluation_and_results: string[];
  engineering_depth: string[];
  links: ProjectLinks;
  status: "Completed" | "In Progress" | "Archived";
}

// ===========================================
// TRAINING & CERTIFICATIONS
// ===========================================

export interface Training {
  title: string;
  description: string;
}

// ===========================================
// SUMMARY & ABOUT
// ===========================================

export interface Summary {
  short: string;
  focus_areas: string[];
}

export interface About {
  technical_philosophy: string;
  learning_style: string[];
  outside_interests: string[];
}

// ===========================================
// COMPLETE PORTFOLIO DATA
// ===========================================

export interface PortfolioData {
  identity: Identity;
  summary: Summary;
  education: Education[];
  skills: Skills;
  projects: Project[];
  training: Training[];
  about: About;
}

// ===========================================
// NAVIGATION
// ===========================================

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}
