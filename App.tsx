
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ServicesSection from './components/ServicesSection';
import ImageQuoteSection from './components/ImageQuoteSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import ContactMapSection from './components/ContactMapSection';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ScrollToTopButton from './components/ScrollToTopButton'; 
import TextOverlayModal from './components/TextOverlayModal'; // Import new modal
import { NAV_LINKS, SOCIAL_LINKS, FOOTER_MENU_LINKS, FOOTER_UTILITY_LINKS, IMAGE_URLS } from './constants';

interface ModalData {
  url: string;
  title?: string;
  description?: string;
  actionLink?: { 
    href: string;
    text: string;
    target?: string;
    rel?: string;
  };
}

interface TextOverlayData {
  quote: string;
  author: string;
  role?: string; 
  imageUrl?: string; // Added for testimonial images
}

const App: React.FC = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentModalData, setCurrentModalData] = useState<ModalData | null>(null);

  const [isTextOverlayOpen, setIsTextOverlayOpen] = useState(false);
  const [currentOverlayQuote, setCurrentOverlayQuote] = useState<TextOverlayData | null>(null);

  const openImageModal = (data: ModalData) => {
    setCurrentModalData(data);
    setIsImageModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setCurrentModalData(null);
    document.body.style.overflow = ''; 
  };

  const openTextOverlayModal = (data: TextOverlayData) => { 
    setCurrentOverlayQuote(data);
    setIsTextOverlayOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeTextOverlayModal = () => {
    setIsTextOverlayOpen(false);
    setCurrentOverlayQuote(null);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isImageModalOpen) closeImageModal();
        if (isTextOverlayOpen) closeTextOverlayModal();
      }
    };
    if (isImageModalOpen || isTextOverlayOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isImageModalOpen, isTextOverlayOpen]);


  return (
    <div className="animated-gradient-bg text-gray-100 min-h-screen overflow-x-hidden"> 
      <Header navLinks={NAV_LINKS} logoUrl={IMAGE_URLS.logo} />
      
      <main>
        <Hero />
        <AboutMe openImageModal={openImageModal} logoUrl={IMAGE_URLS.logo} />
        <ServicesSection />
        <ImageQuoteSection /> 
        
        <PortfolioSection openImageModal={openImageModal} />
        
        <TestimonialsSection openTextOverlayModal={openTextOverlayModal} />
        <BlogSection openImageModal={openImageModal} />
        <ContactMapSection />
      </main>

      <Footer 
        socialLinks={SOCIAL_LINKS}
        menuLinks={FOOTER_MENU_LINKS}
        utilityLinks={FOOTER_UTILITY_LINKS}
        logoUrl={IMAGE_URLS.logo}
      />

      {currentModalData && (
        <Modal 
          isOpen={isImageModalOpen} 
          onClose={closeImageModal} 
          imageUrl={currentModalData.url} 
          title={currentModalData.title}
          description={currentModalData.description}
          actionLink={currentModalData.actionLink}
        />
      )}
      {currentOverlayQuote && (
        <TextOverlayModal
          isOpen={isTextOverlayOpen}
          onClose={closeTextOverlayModal}
          quote={currentOverlayQuote.quote}
          author={currentOverlayQuote.author}
          role={currentOverlayQuote.role}
          imageUrl={currentOverlayQuote.imageUrl} // Pass imageUrl
        />
      )}
      <ScrollToTopButton /> 
    </div>
  );
};

export default App;
