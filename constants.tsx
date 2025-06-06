
import React from 'react';
import { NavLink, Service, PortfolioItem, Testimonial, BlogPost, SocialLink, FooterLink, QuoteItem } from './types';

// SVG Icons (defined as React components)

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className || "w-5 h-5"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className || "w-5 h-5"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-5 h-5 text-yellow-400"}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
  </svg>
);

export const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-5 h-5"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

export const MonitorIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-8 h-8"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" />
  </svg>
);

// New PencilBrushIcon
export const PencilBrushIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-8 h-8"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
);


export const PaletteIcon: React.FC<{ className?: string }> = ({ className }) => ( // Kept PaletteIcon for reference, but replaced by PencilBrushIcon in services
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-8 h-8"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93s.844-.025 1.135-.325l.778-.777a2.121 2.121 0 0 1 2.999 2.999l-.777.778c-.3.29-.495.755-.325 1.135s.506.71.93.78l.893.149c.542.09.94.56.94 1.11v1.093c0 .55-.398 1.02-.94 1.11l-.893.149c-.424.07-.764.384-.93.78s.025.844.325 1.135l.777.778a2.121 2.121 0 0 1-2.999 2.999l-.778-.777c-.29-.3-.755-.495-1.135-.325s-.71.506-.78.93l-.149.893c-.09.542-.56.94-1.11.94h-1.093c-.55 0-1.02-.398-1.11-.94l-.149-.893c-.07-.424-.384-.764-.78-.93s-.844.025-1.135.325l-.778.777a2.121 2.121 0 0 1-2.999-2.999l.777-.778c.3-.29.495.755.325-1.135S6.106 12.75 5.68 12.68l-.893-.149c-.542-.09-.94-.56-.94-1.11v-1.093c0 .55.398 1.02.94 1.11l.893-.149c.424-.07.764.384.93-.78S8.975 5.45 8.675 5.16l-.777-.778a2.121 2.121 0 0 1 2.999-2.999l.778.777c.29.3.755.495 1.135.325s.71-.506.78-.93l.149-.894Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

export const LayoutIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-8 h-8"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 8.25 20.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25A2.25 2.25 0 0 1 13.5 8.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
  </svg>
);

export const CodeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-8 h-8"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>
);

export const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

export const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg className={className || "w-6 h-6"} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2.34a.75.75 0 01.75.75V5.25h1.875a.75.75 0 010 1.5H13.065V8.25a.75.75 0 01-1.5 0V6.75H9.69a.75.75 0 010-1.5h1.875V3.09a.75.75 0 01.75-.75ZM7.5 9.75A2.25 2.25 0 005.25 12v6A2.25 2.25 0 007.5 20.25h9A2.25 2.25 0 0018.75 18v-6A2.25 2.25 0 0016.5 9.75h-9Zm8.25-1.5h-7.5a3.75 3.75 0 00-3.75 3.75v6a3.75 3.75 0 003.75 3.75h7.5a3.75 3.75 0 003.75-3.75v-6a3.75 3.75 0 00-3.75-3.75Z" clipRule="evenodd" />
    <path d="M12 11.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5ZM9.75 15a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0Z" />
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const QuoteLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className={className || "w-8 h-8 text-sky-400"}>
    <path d="M10 3.065a1.84 1.84 0 0 1-.435.028A1.84 1.84 0 0 1 8.31 1.843a1.84 1.84 0 0 1 .136-.729A1.84 1.84 0 0 1 10 0s1.25.136 1.25 1.114V5.25a1.25 1.25 0 0 1-1.25 1.25H6.5V3.065h3.5zM4.75 3.065a1.84 1.84 0 0 1-.435.028A1.84 1.84 0 0 1 3.06.114a1.84 1.84 0 0 1 .136-.729A1.84 1.84 0 0 1 4.75 0s1.25.136 1.25 1.114V5.25A1.25 1.25 0 0 1 4.75 6.5H1.5V3.065h3.25z"/>
  </svg>
);

export const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

export const XMarkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const ArrowUpIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className || "w-6 h-6"}> {/* strokeWidth changed to 2.5 */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
    </svg>
);


// Centralized Image URLs
export const IMAGE_URLS = {
  logo: 'https://i.imgur.com/oor5RYi.png',
  heroBackground: 'https://images.unsplash.com/photo-1550745165-9bc0b252726c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80', // Retro gaming setup
  aboutMeParallax: 'https://i.imgur.com/CV8mnRS.jpeg', // Updated About Me Parallax Background
  aboutMeProfile: 'https://i.imgur.com/BL90e9q.jpeg', // Updated with direct Imgur link
  portfolio: [
    'https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80', // Laptop with code
    'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80', // Multiple monitors with code
    'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80', // Person presenting at whiteboard
    'https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80', // Office meeting
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', // New: Laptop with code editor
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', // New: Dashboard analytics on screen
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', // Replaced: Startup Pitch Deck Design (was Mobile app design process)
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', // New: Business website on laptop
    'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', // Laptop and coffee
    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', // Desk setup with multiple devices
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', // Collaborative meeting
    'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', // Replaced: User Research Platform (was Abstract tech background)
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', // Modern laptop on desk
    'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', // UI design sketches
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', // New: Team collaborating
    'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', // New: Design tools on desk
    'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', // New: Abstract colorful design
  ],
  blog: [
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80', // Team working on laptops
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80', // Desk with macbook
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80', // Woman coding
  ],
  quotes: [
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=800&q=80', // Matrix code
    'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=800&q=80', // Person coding on laptop
    'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=800&q=80', // Group of people in tech office
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=800&q=80', // Abstract code lines
  ],
  imageQuoteSectionParallax: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80', // VR headset
  testimonialsParallax: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80', // Office desk with analytics
  contactMapBackground: 'https://i.imgur.com/UVThNRU.jpeg', // Updated with new Imgur link
};


// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About Me', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

// Services Data
export const SERVICES_DATA: Service[] = [
  { id: 's1', icon: <MonitorIcon className="w-10 h-10 text-sky-400" />, title: 'Web Design', description: 'Crafting visually stunning and user-friendly websites that align with your brand and goals. Modern, responsive, and optimized for performance.' },
  { id: 's2', icon: <PencilBrushIcon className="w-10 h-10 text-sky-400" />, title: 'Graphic Design', description: 'Creating compelling logos, branding materials, and digital assets that make your business stand out and communicate effectively.' },
  { id: 's3', icon: <LayoutIcon className="w-10 h-10 text-sky-400" />, title: 'UX/UI Design', description: 'Designing intuitive and engaging user experiences. Focusing on user research, wireframing, prototyping, and usability testing.' },
  { id: 's4', icon: <CodeIcon className="w-10 h-10 text-sky-400" />, title: 'Web Development', description: 'Building robust and scalable web applications using modern technologies. From front-end interfaces to back-end logic with PHP.' },
];

// Portfolio Data
export const PORTFOLIO_DATA: PortfolioItem[] = [
  { id: 'p1', imageUrl: IMAGE_URLS.portfolio[0], title: 'E-commerce Platform', category: 'Web Development', link: '#' },
  { id: 'p2', imageUrl: IMAGE_URLS.portfolio[1], title: 'Corporate Branding Package', category: 'Graphic Design', link: '#' },
  { id: 'p3', imageUrl: IMAGE_URLS.portfolio[2], title: 'Mobile App UI/UX', category: 'UX/UI Design', link: '#' },
  { id: 'p4', imageUrl: IMAGE_URLS.portfolio[3], title: 'Portfolio Website Design', category: 'Web Design', link: '#' },
  { id: 'p5', imageUrl: IMAGE_URLS.portfolio[4], title: 'SaaS Application Interface', category: 'Web Development', link: '#' },
  { id: 'p6', imageUrl: IMAGE_URLS.portfolio[5], title: 'Data Visualization Dashboard', category: 'UX/UI Design', link: '#' },
  { id: 'p7', imageUrl: IMAGE_URLS.portfolio[6], title: 'Startup Pitch Deck Design', category: 'Graphic Design', link: '#' },
  { id: 'p8', imageUrl: IMAGE_URLS.portfolio[7], title: 'Responsive Blog Theme', category: 'Web Design', link: '#' },
  { id: 'p9', imageUrl: IMAGE_URLS.portfolio[8], title: 'Content Management System', category: 'Web Development', link: '#' },
  { id: 'p10', imageUrl: IMAGE_URLS.portfolio[9], title: 'Interactive Landing Page', category: 'Web Design', link: '#' },
  { id: 'p11', imageUrl: IMAGE_URLS.portfolio[10], title: 'Brand Style Guide', category: 'Graphic Design', link: '#' },
  { id: 'p12', imageUrl: IMAGE_URLS.portfolio[11], title: 'User Research Platform', category: 'UX/UI Design', link: '#' },
  { id: 'p13', imageUrl: IMAGE_URLS.portfolio[12], title: 'Booking System UI', category: 'UX/UI Design', link: '#' },
  { id: 'p14', imageUrl: IMAGE_URLS.portfolio[13], title: 'Photography Portfolio Site', category: 'Web Design', link: '#' },
  { id: 'p15', imageUrl: IMAGE_URLS.portfolio[14], title: 'Collaborative Platform UI', category: 'UX/UI Design', link: '#' },
  { id: 'p16', imageUrl: IMAGE_URLS.portfolio[15], title: 'Graphic Design Toolkit', category: 'Graphic Design', link: '#' },
  { id: 'p17', imageUrl: IMAGE_URLS.portfolio[16], title: 'Abstract Web Backgrounds', category: 'Web Design', link: '#' },
];

// Testimonials Data
export const TESTIMONIALS_DATA: Testimonial[] = [
  { id: 't1', quote: "Jie Kurt's design transformed our online presence. The new website is stunning and incredibly user-friendly. Highly recommended!", imageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', author: 'Jane Doe', role: 'CEO of TechSolutions Inc.' },
  { id: 't2', quote: "The graphic design work for our new brand identity was exceptional. Jie Kurt understood our vision perfectly and delivered beyond expectations.", imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', author: 'John Smith', role: 'Marketing Director, Innovate Ltd.' },
  { id: 't3', quote: "Working with JS Web Corner on our app's UX/UI was a game-changer. The user engagement has significantly increased since the redesign.", imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', author: 'Alice Brown', role: 'Product Manager, AppCo' },
  { id: 't4', quote: "The development process was smooth, and the final product exceeded our technical requirements. JS Web Corner is a reliable partner.", imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', author: 'Michael B.', role: 'CTO, Future Systems' },
  { id: 't5', quote: "Jie Kurt's ability to translate complex ideas into beautiful and functional designs is remarkable. A true professional.", imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', author: 'Sarah L.', role: 'Founder, Creative Solutions Co.' },
];

// Blog Data
export const BLOG_DATA: BlogPost[] = [
  { id: 'b1', imageUrl: IMAGE_URLS.blog[0], date: 'Oct 03, 2024', category: 'Web Development', title: 'The Future of PHP: Trends to Watch in 2025', excerpt: 'PHP continues to evolve. Discover the latest trends and features that will shape web development in the coming year.', link: '#' },
  { id: 'b2', imageUrl: IMAGE_URLS.blog[1], date: 'Oct 04, 2024', category: 'UX/UI Design', title: '8 Tips To Improve Your UI/UX Design Skills in 2024', excerpt: 'Elevate your design game with these practical tips for creating more intuitive and engaging user interfaces and experiences.', link: '#' },
  { id: 'b3', imageUrl: IMAGE_URLS.blog[2], date: 'Oct 05, 2024', category: 'Graphic Design', title: 'Mastering Photoshop: Advanced Techniques for Stunning Visuals', excerpt: 'Unlock the full potential of Photoshop with these advanced techniques for photo manipulation, compositing, and graphic creation.', link: '#' },
];

// Social Links
export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Facebook', icon: <FacebookIcon />, href: '#' },
  { name: 'Twitter', icon: <TwitterIcon />, href: '#' },
  { name: 'Instagram', icon: <InstagramIcon />, href: '#' },
  { name: 'LinkedIn', icon: <LinkedInIcon />, href: '#' },
];

// Footer Menu Links
export const FOOTER_MENU_LINKS: FooterLink[] = [
  { label: 'Homepage', href: '#hero' },
  { label: 'About Me', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact' },
];

// Footer Utility Links
export const FOOTER_UTILITY_LINKS: FooterLink[] = [
  { label: '404 Error', href: '#' },
  { label: 'Style Guide', href: '#' },
  { label: 'Licenses', href: '#' },
  { label: 'Changelog', href: '#' },
  { label: 'Password Protected', href: '#' },
];

// Quotes Data
export const QUOTES_DATA: QuoteItem[] = [
    { id: 'q1', imageUrl: IMAGE_URLS.quotes[0], quote: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
    { id: 'q2', imageUrl: IMAGE_URLS.quotes[1], quote: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
    { id: 'q3', imageUrl: IMAGE_URLS.quotes[2], quote: "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with.", author: "Paul Rand" },
    { id: 'q4', imageUrl: IMAGE_URLS.quotes[3], quote: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
];

// Constants derived from image URLs (if needed)
export const SERVICES = SERVICES_DATA; // Example, if services icons were from IMAGE_URLS
export const { logo, heroBackground, aboutMeProfile, imageQuoteSectionParallax, testimonialsParallax, contactMapBackground } = IMAGE_URLS;
export const PORTFOLIO_IMAGES = IMAGE_URLS.portfolio;
export const BLOG_IMAGES = IMAGE_URLS.blog;
export const QUOTE_IMAGES = IMAGE_URLS.quotes;