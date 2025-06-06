
import React from 'react';
import Section from './Section';
import Button from './Button';
import { ArrowRightIcon, IMAGE_URLS } from '../constants';

interface AboutMeProps {
  openImageModal: (data: { url: string; title?: string; description?: string; }) => void;
  logoUrl: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ openImageModal, logoUrl }) => {
  const handleProfileImageClick = () => {
    openImageModal({
      url: IMAGE_URLS.aboutMeProfile,
      title: "Jie Kurt Santos", 
      description: "Web & Graphic Designer | UXUI | Web Developer\nCavite, Philippines\njswebcorner@gmail.com"
    });
  };

  return (
    <Section 
        id="about" 
        className="bg-[#12121e]" 
        parallaxBgImage={IMAGE_URLS.aboutMeParallax}
        useJsParallax={true} // Enable JS parallax
        parallaxSpeed={0.25} // Example speed
        nextSectionId="#services"
    >
      {/* Content is already z-10 relative to Section's structure, now z-[2] in Section */}
      <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
        <div className="md:col-span-3 order-2 md:order-1">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          
          <div className="space-y-3 mb-6 text-gray-200">
            <p className="text-xl font-semibold">Jie Kurt Santos</p>
            <p><strong>Birthday:</strong> June 6</p>
            <p><strong>City:</strong> Cavite</p>
            <p><strong>Country:</strong> Philippines</p>
          </div>

          <p className="text-gray-300 mb-4 leading-relaxed">
            Hey there — I’m Jie Kurt Santos, the creator behind JS Web Corner. I’ve spent the last few years doing what I love most: helping people and small businesses bring their ideas to life through design and code. 
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            With years of experience in graphic design, web design and web development, I’ve had the chance to work on everything from personal websites and logos to full-featured business platforms. Whether it’s designing a clean, user-friendly interface or developing the backend that powers it, I’m all about crafting digital experiences that not only look great but work for real people.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I use tools like Photoshop, Illustrator, Adobe XD, and do most of my coding in PHP with CodeIgniter — but more than the tools, it’s the creative process and problem-solving that drive me. If you’re building something new or just want to improve what you already have, I’d love to hear your story and help you make it real.
          </p>
          <Button href="#portfolio" variant="primary" icon={<ArrowRightIcon />}>
            View My Work
          </Button>
        </div>

        <div className="md:col-span-2 relative flex justify-center items-center py-8 md:py-0 order-1 md:order-2">
          <img
            src={IMAGE_URLS.aboutMeProfile} 
            alt="Jie Kurt Santos - Developer"
            className="relative z-10 w-auto max-w-xs md:max-w-sm lg:max-w-md object-contain shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105 shadow-[0_0_20px_5px_rgba(14,165,233,0.3)] cursor-pointer"
            onClick={handleProfileImageClick}
          />
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;