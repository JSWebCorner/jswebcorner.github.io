
import React, { useRef, useEffect } from 'react';
import ScrollToNextSectionButton from './ScrollToNextSectionButton'; 

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  parallaxBgImage?: string;
  hasAnimatedBg?: boolean;
  disableContainer?: boolean;
  nextSectionId?: string; 
  useJsParallax?: boolean; // To enable JS-driven parallax
  parallaxSpeed?: number;  // Speed factor for JS parallax (e.g., 0.1 to 0.9)
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  children, 
  className = '', 
  title, 
  subtitle, 
  parallaxBgImage,
  hasAnimatedBg = false,
  disableContainer = false,
  nextSectionId, 
  useJsParallax = false, // Default to false
  parallaxSpeed = 0.3,   // Default speed for JS parallax
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallaxJsBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!useJsParallax || !parallaxBgImage || !sectionRef.current || !parallaxJsBgRef.current) {
      if (parallaxJsBgRef.current) {
        parallaxJsBgRef.current.style.transform = ''; // Reset transform if not active
      }
      return;
    }

    const bgElement = parallaxJsBgRef.current;
    const currentSectionRef = sectionRef.current; // Capture current ref value

    const handleScrollOrResize = () => {
      if (!currentSectionRef || !bgElement) return;

      const yOffset = (window.scrollY - currentSectionRef.offsetTop) * parallaxSpeed;
      bgElement.style.transform = `translateY(${yOffset}px)`;
    };

    handleScrollOrResize();

    window.addEventListener('scroll', handleScrollOrResize);
    window.addEventListener('resize', handleScrollOrResize);

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      if (bgElement) {
        bgElement.style.transform = ''; 
      }
    };
  }, [useJsParallax, parallaxBgImage, parallaxSpeed]);

  let sectionInitialStyle = {};
  let sectionClasses = `relative ${className} ${hasAnimatedBg ? 'animated-gradient-bg' : ''}`;
  let jsParallaxBackgroundElement = null;
  let overlayElement = null;

  if (parallaxBgImage) {
    overlayElement = <div className="absolute inset-0 bg-black/60 z-[1]"></div>; 

    if (useJsParallax) {
      sectionClasses += ' overflow-hidden'; 
      jsParallaxBackgroundElement = (
        <div
          ref={parallaxJsBgRef}
          className="js-parallax-internal-bg"
          style={{
            backgroundImage: `url(${parallaxBgImage})`,
          }}
        ></div>
      );
    } else {
      sectionClasses += ' parallax-section-fixed'; 
      sectionInitialStyle = { 
        backgroundImage: `url(${parallaxBgImage})`,
      };
    }
  }
  
  // Apply default top padding if className doesn't specify one
  if (!className.match(/\b(p-\d+|pt-\d+|py-\d+)\b/)) {
    sectionClasses += ' pt-[88px]'; // 88px is 5.5rem, approx header height
  }

  // Apply default bottom padding only if not disabled and no explicit bottom/vertical padding is set in className
  if (!disableContainer && !className.match(/\b(p-\d+|pb-\d+|py-\d+)\b/)) {
    sectionClasses += ' pb-16 md:pb-24';
  }

  return (
    <section 
      id={id} 
      ref={sectionRef} 
      className={sectionClasses.trim()} 
      style={sectionInitialStyle}
      // Add scroll-margin-top for better anchor link scrolling with fixed header
      // Alternatively, the pt-[88px] handles the visual space.
      // If true "padding" is desired, pt-[88px] is correct.
      // If only scroll correction, scroll-mt-[88px] would be added here.
      // Given "add padding", pt-[88px] is the implementation.
    >
      {jsParallaxBackgroundElement} 
      {overlayElement} 
      
      <div className={`${disableContainer ? '' : 'container mx-auto px-4 sm:px-6 lg:px-8'} relative z-[2]`}>
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {subtitle && <p className="text-sky-400 font-semibold uppercase tracking-wider mb-2">{subtitle}</p>}
            {title && <h2 className="text-4xl md:text-5xl font-bold text-white">{title}</h2>}
          </div>
        )}
        {children}
      </div>

      {nextSectionId && (
        <div className="relative z-[2] container mx-auto px-4 sm:px-6 lg:px-8"> 
          <div className="text-center mt-[50px] pb-4 md:pb-6">
            <ScrollToNextSectionButton targetId={nextSectionId} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Section;
