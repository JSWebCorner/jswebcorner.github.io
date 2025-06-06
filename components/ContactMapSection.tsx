
import React from 'react';
import Section from './Section';
import Button from './Button';
import { ArrowRightIcon, IMAGE_URLS } from '../constants'; 

const ContactMapSection: React.FC = () => {
  return (
    <Section 
      id="contact" 
      parallaxBgImage={IMAGE_URLS.contactMapBackground}
      useJsParallax={true} // Enable JS parallax
      parallaxSpeed={0.4}  // Example speed
      className="min-h-[80vh] flex items-center justify-center" 
    >
      {/* Content is already z-10, now z-[2] from Section */}
      <div className="bg-[#12121e]/90 p-8 sm:p-12 md:p-16 rounded-xl shadow-2xl max-w-2xl w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
          Are you Interested in Working with Me?
        </h2>
        <p className="text-gray-300 text-lg mb-10 leading-relaxed text-center">
          My services are tailored to help businesses elevate their brand and connect with their audience through intuitive design. Let's build something amazing together.
        </p>
        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Your Name" 
              aria-label="Your Name"
              className="w-full p-4 bg-[#1a1a2e] border border-gray-700 rounded-lg text-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors focus:shadow-[0_0_15px_2px_rgba(14,165,233,0.3)] transition-shadow duration-300"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              aria-label="Your Email"
              className="w-full p-4 bg-[#1a1a2e] border border-gray-700 rounded-lg text-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors focus:shadow-[0_0_15px_2px_rgba(14,165,233,0.3)] transition-shadow duration-300"
            />
          </div>
          <textarea 
            placeholder="Your Message" 
            aria-label="Your Message"
            rows={4}
            className="w-full p-4 bg-[#1a1a2e] border border-gray-700 rounded-lg text-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors focus:shadow-[0_0_15px_2px_rgba(14,165,233,0.3)] transition-shadow duration-300"
          ></textarea>
          <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto mx-auto flex" icon={<ArrowRightIcon />}>
            Start A Project
          </Button>
        </form>
        <p className="text-gray-500 text-sm mt-8 text-center">
          Or reach out directly: <a href="mailto:jswebcorner@gmail.com" className="text-sky-400 hover:underline">jswebcorner@gmail.com</a>
        </p>
      </div>
    </Section>
  );
};

export default ContactMapSection;