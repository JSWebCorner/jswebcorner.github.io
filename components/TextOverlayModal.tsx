
import React, { useEffect } from 'react';
import { XMarkIcon } from '../constants'; 

interface TextOverlayModalProps {
  isOpen: boolean;
  onClose: () => void;
  quote: string;
  author: string;
  role?: string; 
  imageUrl?: string; // Added imageUrl prop
}

const TextOverlayModal: React.FC<TextOverlayModalProps> = ({ isOpen, onClose, quote, author, role, imageUrl }) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = ''; 
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="text-overlay-title"
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-300 ease-in-out ${isOpen ? 'modal-open' : 'modal-closed'}`}
      onClick={onClose} 
    >
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md" 
        aria-hidden="true"
      ></div>

      <div
        className={`relative bg-transparent p-8 rounded-lg text-center max-w-xl w-full mx-4
                   transform transition-all duration-300 ease-in-out
                   ${isOpen ? 'modal-content-open' : 'modal-content-closed'}`}
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors z-10" // Ensure button is on top
          aria-label="Close wisdom words"
        >
          <XMarkIcon className="w-8 h-8" />
        </button>
        
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={author} 
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto mb-6 border-4 border-sky-500 shadow-lg"
          />
        )}
        
        <p id="text-overlay-title" className="text-3xl md:text-4xl text-white font-normal mb-6 italic">
          "{quote}"
        </p>
        <p className="text-xl text-sky-400 font-bold">- {author}</p>
        {role && <p className="text-md text-gray-300 mt-1">{role}</p>}
      </div>
    </div>
  );
};

export default TextOverlayModal;
