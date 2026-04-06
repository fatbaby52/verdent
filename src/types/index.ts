// Types for Verdent website

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon?: string;
  forWhom: string;
  problemSolved: string;
  typicalEngagement: string;
}

export interface CaseStudy {
  id: string;
  clientType: string;
  problem: string;
  verdentRole: string;
  outcome: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  timeline?: string;
  incentiveAmount?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedIn?: string;
  image?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  contactType: 'buyer' | 'dealer' | 'oem' | 'other';
  message: string;
}

export interface MetaData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}
