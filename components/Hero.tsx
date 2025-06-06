
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { ArrowRightIcon, DownloadIcon } from '../constants'; 
import Section from './Section'; 
import ParticlesBackground from './ParticlesBackground'; 
import ScrollToNextSectionButton from './ScrollToNextSectionButton'; // Import the scroll button

const FADE_SCROLL_THRESHOLD = 350; // Pixels to scroll before content is fully faded

const Hero: React.FC = () => {
  const newLogoUrl = "https://i.imgur.com/Ai6YePQ.png";
  const newParagraph = "I’m Jie Kurt Santos, a designer-developer specialising in web and graphic design. I create clean, user-friendly websites and digital assets using tools like Photoshop, Illustrator, and PHP.";

  const [contentOpacity, setContentOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollY / FADE_SCROLL_THRESHOLD);
      setContentOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Section
      id="hero"
      className="flex flex-col items-center justify-center text-white relative" 
      // nextSectionId prop removed to prevent Section from rendering its own scroll button
      disableContainer 
    >
      {/* Particle Background - Renders on top of Section's own background (animated-gradient-bg) */}
      <ParticlesBackground 
        className="absolute inset-0 z-0" 
        particleColor="rgba(56, 189, 248, 0.6)" 
        lineColor="rgba(56, 189, 248, 0.25)"
        mouseLineColor="rgba(14, 165, 233, 0.4)"
        particleDensityFactor={0.00006} 
      />

      {/* Animated Floating Blobs - z-[1] to be on top of particles */}
      <div className="absolute inset-0 overflow-hidden z-[1] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-700 rounded-full opacity-20 filter blur-3xl animate-pulse floating-element"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-700 rounded-full opacity-15 filter blur-3xl animate-pulse floating-element animation-delay-2000"></div>
      </div>

      {/* Main Hero Content - Now w-full and uses flex to center its children.
          It's a child of Section's z-[2] div when disableContainer is true.
      */}
      <div 
        className="w-full px-4 sm:px-6 lg:px-8 text-center py-20 md:py-32 flex flex-col items-center"
        style={{ 
          width: '-webkit-fill-available', // Added width style
          opacity: contentOpacity,
          transition: 'opacity 0.1s linear' 
        }}
      >
        <p className="text-lg md:text-xl text-gray-300 mb-2 md:mb-3">
          Welcome to
        </p>
        
        <h1 className="mb-4 md:mb-6">
          <img
            src={newLogoUrl}
            alt="JS Web Corner" 
            className="mx-auto h-auto w-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          {newParagraph}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Button href="#contact" variant="primary" size="lg" icon={<ArrowRightIcon />} iconPosition="right">
            Start A Project
          </Button>
          <Button href="#" variant="outline" size="lg" icon={<DownloadIcon />} iconPosition="left">
            Download CV
          </Button>
        </div>

        {/* ScrollToNextSectionButton explicitly rendered here */}
        <div className="mt-12 md:mt-16 pb-4 md:pb-6">
          <ScrollToNextSectionButton targetId="#about" />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
