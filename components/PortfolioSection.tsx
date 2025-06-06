
import React, { useState, useEffect, useRef, useMemo } from 'react';
import Section from './Section';
import PortfolioItem from './PortfolioItem'; // Carousel item
import PortfolioCardGridItem from './PortfolioCardGridItem'; // New grid item
import { PORTFOLIO_DATA } from '../constants';
import Button from './Button';
import { ArrowRightIcon } from '../constants';

interface PortfolioSectionProps {
  openImageModal: (data: { 
    url: string; 
    title?: string; 
    description?: string; 
    actionLink?: { href: string; text: string; target?: string; rel?: string; };
  }) => void;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ openImageModal }) => {
  const originalItems = PORTFOLIO_DATA;
  const numOriginalItems = originalItems.length;

  const [showGridView, setShowGridView] = useState(false);

  // Carousel specific logic
  const duplicatedItems = useMemo(() => {
    if (numOriginalItems === 0) return [];
    return [...originalItems, ...originalItems];
  }, [originalItems, numOriginalItems]);

  const trackRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const [itemOuterWidth, setItemOuterWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && !showGridView) { // Only calculate for carousel
      requestAnimationFrame(() => {
        if (duplicatedItems.length > 0 && itemRef.current) {
          const style = window.getComputedStyle(itemRef.current);
          const marginLeft = parseFloat(style.marginLeft) || 0;
          const marginRight = parseFloat(style.marginRight) || 0;
          setItemOuterWidth(itemRef.current.offsetWidth + marginLeft + marginRight);
        }
      });
    }
  }, [isClient, duplicatedItems, showGridView]);

  const animationStyle = useMemo(() => {
    if (numOriginalItems === 0 || itemOuterWidth === 0 || showGridView) return {};
    const trackWidth = numOriginalItems * itemOuterWidth;
    const scrollDuration = numOriginalItems * 5;

    return {
      '--carousel-track-width': `${trackWidth}px`,
      animationDuration: `${scrollDuration}s`,
      width: `${numOriginalItems * itemOuterWidth * 2}px`
    } as React.CSSProperties;
  }, [numOriginalItems, itemOuterWidth, showGridView]);

  const handleToggleView = () => {
    setShowGridView(prev => !prev);
  };

  return (
    <Section 
      id="portfolio" 
      title="My Latest Works" 
      subtitle="Portfolio Showcase"
      className="relative z-10 py-16 md:py-24"
      nextSectionId="#testimonials"
      disableContainer 
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed">
          Welcome to my portfolio showcasing a selection of projects that highlight my expertise and creativity. Each project represents a unique collaboration with clients.
        </p>
      </div>

      {!showGridView && numOriginalItems > 0 && (
        <div className="relative w-full overflow-hidden portfolio-carousel-container py-4 md:py-8">
          <div
            ref={trackRef}
            className="carousel-track-animated"
            style={animationStyle}
          >
            {duplicatedItems.map((item, index) => (
              <div 
                key={`${item.id}-${index}`} 
                ref={index === 0 ? itemRef : null} 
                className="shrink-0"
              > 
                <PortfolioItem 
                  item={item} 
                  openImageModal={openImageModal} 
                />
              </div>
            ))}
          </div>
          
          <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#0f0f1a] via-[#0f0f1a]/90 to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#0f0f1a] via-[#0f0f1a]/90 to-transparent pointer-events-none z-10"></div>
        </div>
      )}

      {showGridView && numOriginalItems > 0 && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {originalItems.map((item) => (
              <PortfolioCardGridItem 
                key={item.id} 
                item={item} 
                openImageModal={openImageModal} 
              />
            ))}
          </div>
        </div>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-12 md:mt-16">
          <Button 
            onClick={handleToggleView} 
            variant="primary" 
            size="lg" 
            icon={<ArrowRightIcon />}
          >
            {showGridView ? 'Hide Projects' : 'See More Projects'}
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default PortfolioSection;
