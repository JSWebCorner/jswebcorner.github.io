import React from 'react';

export interface NavLink {
  label: string;
  href: string;
  dropdown?: NavLink[];
}

export interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
  link: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  imageUrl: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  link: string;
}

export interface SocialLink {
  name: string;
  icon: React.ReactElement<{ className?: string }>; // Changed from React.ReactNode
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface QuoteItem {
  id: string;
  imageUrl: string;
  quote: string;
  author: string;
}