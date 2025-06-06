
import React, { useState } from 'react';
import Section from './Section';
import TestimonialCard from './TestimonialCard';
import { TESTIMONIALS_DATA, ArrowRightIcon, IMAGE_URLS } from '../constants';
import Button from './Button';

interface TestimonialsSectionProps {
  openTextOverlayModal: (data: { quote: string; author: string; role?: string; imageUrl?: string }) => void;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ openTextOverlayModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };
  
  const displayedTestimonialsDesktop = showAllTestimonials ? TESTIMONIALS_DATA : TESTIMONIALS_DATA.slice(0, 3);

  return (
    <Section 
        id="testimonials" 
        title="What My Client's Say" 
        subtitle="Testimonials"
        parallaxBgImage={IMAGE_URLS.testimonialsParallax}
        useJsParallax={true} // Enable JS parallax
        parallaxSpeed={0.2}  // Example speed
        nextSectionId="#blog"
    >
      {/* Content is already relative z-10, now z-[2] from Section */}
      <div>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed">
          Discover what our clients have to say about their experience working with me. Their feedback motivates me for next amazing projects.
        </p>
        
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTestimonialsDesktop.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              openTextOverlayModal={openTextOverlayModal}
            />
          ))}
        </div>

        <div className="md:hidden">
            {showAllTestimonials ? (
                <div className="space-y-8">
                    {TESTIMONIALS_DATA.map((testimonial) => (
                        <TestimonialCard 
                            key={testimonial.id} 
                            testimonial={testimonial} 
                            openTextOverlayModal={openTextOverlayModal}
                        />
                    ))}
                </div>
            ) : (
                <>
                    {TESTIMONIALS_DATA.length > 0 && (
                        <TestimonialCard 
                            testimonial={TESTIMONIALS_DATA[currentIndex]} 
                            openTextOverlayModal={openTextOverlayModal}
                        />
                    )}
                    {TESTIMONIALS_DATA.length > 1 && (
                        <div className="flex justify-center mt-8 space-x-4">
                            <Button onClick={handlePrev} variant="outline" size="md" aria-label="Previous testimonial">
                                <ArrowRightIcon className="w-5 h-5 transform rotate-180"/>
                            </Button>
                            <Button onClick={handleNext} variant="outline" size="md" aria-label="Next testimonial">
                                <ArrowRightIcon className="w-5 h-5"/>
                            </Button>
                        </div>
                    )}
                </>
            )}
        </div>

        {TESTIMONIALS_DATA.length > 3 && (
            <div className="text-center mt-12 md:mt-16">
                <Button 
                    onClick={() => setShowAllTestimonials(!showAllTestimonials)} 
                    variant="primary" 
                    size="lg"
                    icon={<ArrowRightIcon />}
                >
                    {showAllTestimonials ? 'Hide Testimonials' : 'See More Testimonials'}
                </Button>
            </div>
        )}
      </div>
    </Section>
  );
};

export default TestimonialsSection;