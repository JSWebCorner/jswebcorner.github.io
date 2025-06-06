import React, { useRef, useEffect } from 'react';
import { SocialLink, FooterLink } from '../types';
// IMAGE_URLS for heroBackground is no longer needed by Footer
import ParticlesBackground from './ParticlesBackground'; // Import new component

interface FooterProps {
  socialLinks: SocialLink[];
  menuLinks: FooterLink[];
  utilityLinks: FooterLink[];
  logoUrl: string;
}

const Footer: React.FC<FooterProps> = ({ socialLinks, menuLinks, utilityLinks, logoUrl }) => {
  const footerRef = useRef<HTMLDivElement>(null);
  // Removed parallaxBgRef and related useEffect for image parallax

  return (
    <footer 
      ref={footerRef}
      className="relative text-gray-400 py-16 overflow-hidden" 
    >
      {/* Particle Background - Renders on top of footer's own background (animated-gradient-bg) */}
      <ParticlesBackground 
        className="absolute inset-0 z-0" // z-0 to be behind blobs and content
        particleColor="rgba(56, 189, 248, 0.4)" // Slightly more subtle for footer
        lineColor="rgba(56, 189, 248, 0.15)"
        mouseLineColor="rgba(14, 165, 233, 0.3)"
        particleDensityFactor={0.00005}
      />
      
      {/* Removed JS Parallax Background Element for image */}
      {/* Removed Dark Overlay */}

      {/* Animated Blobs - z-[1] to be on top of particles */}
      <div className="absolute inset-0 overflow-hidden z-[1] pointer-events-none"> {/* Ensure blobs are above particles */}
        <div className="absolute top-[15%] left-[25%] w-72 h-72 bg-indigo-700 rounded-full opacity-15 filter blur-3xl animate-pulse floating-element"></div>
        <div className="absolute bottom-[15%] right-[25%] w-60 h-60 bg-sky-700 rounded-full opacity-10 filter blur-3xl animate-pulse floating-element animation-delay-2000"></div>
      </div>

      {/* Content Wrapper - z-[2] to be above particles and blobs */}
      <div className="relative z-[2] container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <a href="#hero" className="flex items-center space-x-2 mb-4">
              <img src={logoUrl} alt="JS Web Corner Logo" className="h-10 w-auto" />
            </a>
            <p className="text-sm mb-6 leading-relaxed">
              I’m Jie Kurt Santos, a designer and developer crafting clean, user-friendly digital experiences. Let's bring your ideas to life.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-sky-400 transition-colors p-2 bg-gray-800/70 hover:bg-gray-700/80 rounded-full animate-pulse" 
                  aria-label={link.name}
                >
                  {React.cloneElement(link.icon, { className: "w-5 h-5" })}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-6">Menu Pages</h5>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-sky-400 transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-6">Utility Pages</h5>
            <ul className="space-y-3">
              {utilityLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-sky-400 transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold text-white mb-6">Stay Connected</h5>
            <p className="text-sm mb-4">Get updates on new projects and insights directly to your inbox.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-3 bg-[#1a1a2e]/80 border border-gray-700 rounded-l-lg text-gray-300 text-sm focus:ring-1 focus:ring-sky-400 focus:border-sky-400 outline-none" 
              />
              <button 
                type="submit" 
                className="bg-sky-500 text-white px-4 py-3 rounded-r-lg font-semibold hover:bg-sky-600 transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
        <div className="border-t border-gray-700/50 pt-8 text-center text-sm"> 
          <p>
            &copy; {new Date().getFullYear()} JS Web Corner by Jie Kurt Santos. All rights reserved.
          </p>
          <p className="mt-1">
            Inspired by various modern designs. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;