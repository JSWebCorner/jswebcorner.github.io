
import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';
import { QUOTES_DATA, QuoteLeftIcon, ArrowRightIcon } from '../constants';

const TOTAL_DURATION = 10000; // 10 seconds
const FADE_ANIMATION_DURATION = 700; // ms, for text fade
const PROGRESS_UPDATE_INTERVAL = 50; // ms, for progress bar update

const ImageQuoteSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(true); 
  const [progress, setProgress] = useState(0);

  const fadeTimeoutRef = useRef<number | null>(null);
  const progressIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (QUOTES_DATA.length > 0) {
      const randomIndex = Math.floor(Math.random() * QUOTES_DATA.length);
      setCurrentIndex(randomIndex);
      setIsFadingOut(true); 
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
      fadeTimeoutRef.current = window.setTimeout(() => {
        setIsFadingOut(false);
      }, 100); 
    } else {
      setIsFadingOut(false); 
    }
  }, [QUOTES_DATA.length]);

  useEffect(() => {
    if (isFadingOut || QUOTES_DATA.length <= 1) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      setProgress(QUOTES_DATA.length === 1 ? 100 : 0);
      return;
    }

    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    setProgress(0);

    const startTime = Date.now();
    progressIntervalRef.current = window.setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const currentProgress = Math.min(100, (elapsedTime / TOTAL_DURATION) * 100);
      setProgress(currentProgress);

      if (elapsedTime >= TOTAL_DURATION) {
        if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        navigateToQuote((currentIndex + 1) % QUOTES_DATA.length);
      }
    }, PROGRESS_UPDATE_INTERVAL);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [currentIndex, isFadingOut, QUOTES_DATA.length]);


  const navigateToQuote = (newIndex: number) => {
    if ((isFadingOut && currentIndex === newIndex) || QUOTES_DATA.length === 0) return;

    setIsFadingOut(true);

    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    
    fadeTimeoutRef.current = window.setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFadingOut(false); 
    }, FADE_ANIMATION_DURATION);
  };

  const handlePrev = () => {
    if (QUOTES_DATA.length <= 1 || isFadingOut) return; 
    const newIndex = (currentIndex - 1 + QUOTES_DATA.length) % QUOTES_DATA.length;
    navigateToQuote(newIndex);
  };

  const handleNext = () => {
    if (QUOTES_DATA.length <= 1 || isFadingOut) return; 
    const newIndex = (currentIndex + 1) % QUOTES_DATA.length;
    navigateToQuote(newIndex);
  };

  if (QUOTES_DATA.length === 0) {
    return (
      <Section 
        id="quotes" 
        title="Words of Wisdom"
        subtitle="Inspiring Thoughts"
        className="flex items-center justify-center min-h-[60vh] py-16 md:py-24"
        nextSectionId="#portfolio"
      >
        <p className="text-center text-gray-400">No quotes available at the moment.</p>
      </Section>
    );
  }

  const activeQuote = QUOTES_DATA[currentIndex];

  return (
    <Section 
      id="quotes" 
      title="Words of Wisdom"
      subtitle="Inspiring Thoughts"
      parallaxBgImage={activeQuote?.imageUrl}
      useJsParallax={true} // Enable JS parallax
      parallaxSpeed={0.35} // Example speed
      className="min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex flex-col"
      nextSectionId="#portfolio"
    >
      <div className="flex-grow flex flex-col items-center justify-center text-center relative w-full px-4 pt-8 sm:pt-10 md:pt-12 lg:pt-16">
        
        <div 
          key={activeQuote?.id}
          className={`transition-opacity ease-in-out max-w-2xl lg:max-w-3xl xl:max-w-4xl text-white`}
          style={{ transitionDuration: `${FADE_ANIMATION_DURATION}ms`, opacity: isFadingOut ? 0 : 1 }}
          aria-live="polite"
          aria-atomic="true"
        >
          {activeQuote ? (
            <>
              <QuoteLeftIcon className="w-10 h-10 sm:w-12 md:w-14 text-sky-400 mb-4 mx-auto opacity-80" />
              <p className="text-2xl sm:text-3xl md:text-4xl font-medium mb-3 sm:mb-4 leading-tight italic drop-shadow-md">
                "{activeQuote.quote}"
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-sky-300 font-semibold drop-shadow-sm">
                - {activeQuote.author}
              </p>
            </>
          ) : (
            <p className="text-xl">Loading wisdom...</p>
          )}
        </div>

        {QUOTES_DATA.length > 1 && (
            <div className="mt-[50px] w-full max-w-md sm:max-w-lg mx-auto">
                <div className="h-1.5 bg-gray-200/30 backdrop-blur-sm rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-sky-400" 
                        style={{ width: `${progress}%`, transition: progress > 0 || progress === 0 && !isFadingOut ? 'width 0.05s linear' : 'none' }}
                    ></div>
                </div>
            </div>
        )}

        {QUOTES_DATA.length > 1 && (
          <>
            <button 
              onClick={handlePrev} 
              disabled={isFadingOut}
              className="group absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-black/40 hover:bg-black/60 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous quote"
            >
              <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 transform rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
            </button>
            <button 
              onClick={handleNext} 
              disabled={isFadingOut}
              className="group absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-black/40 hover:bg-black/60 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next quote"
            >
              <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </>
        )}
      </div>
    </Section>
  );
};

export default ImageQuoteSection;