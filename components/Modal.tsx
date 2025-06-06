
import React, { useEffect } from 'react';
import { XMarkIcon } from '../constants';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
  title?: string;
  description?: string;
  actionLink?: { // New prop for an action link/button
    href: string;
    text: string;
    target?: string;
    rel?: string;
  };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageUrl, title, description, actionLink }) => {
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

  if (!isOpen || !imageUrl) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "image-modal-title" : undefined}
      aria-describedby={description ? "image-modal-description" : undefined}
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-300 ease-in-out ${isOpen ? 'modal-open' : 'modal-closed'}`}
      onClick={onClose} 
    >
      <div className="fixed inset-0 bg-black/80" aria-hidden="true"></div>

      <div 
        className={`relative bg-[#1a1a2d]/95 p-4 sm:p-6 rounded-lg shadow-xl transform transition-all duration-300 ease-in-out max-w-[90vw] max-h-[95vh] w-auto
                   border-2 border-[#1a1a2d] shadow-[0_0_20px_5px_rgba(14,165,233,0.3)] /* Sky blue glow */
                   flex flex-col
                   ${isOpen ? 'modal-content-open' : 'modal-content-closed'}`}
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 sm:top-2 sm:right-2 z-20 p-2 bg-white text-gray-700 rounded-full hover:bg-gray-200 transition-colors shadow-md"
          aria-label="Close image viewer"
        >
          <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        
        <div className="flex-shrink-0 overflow-hidden flex justify-center items-center mb-3">
            <img 
              src={imageUrl} 
              alt={title || "Enlarged view"} 
              className="block max-w-full max-h-[70vh] object-contain rounded"
            />
        </div>
        
        <div className="flex-grow overflow-y-auto text-left mt-2 p-3 rounded max-h-[20vh]"> 
          {title && (
            <h3 id="image-modal-title" className="text-lg sm:text-xl font-semibold text-sky-300 mb-1">{title}</h3>
          )}
          {description && (
            <p id="image-modal-description" className="text-sm sm:text-base text-gray-300 leading-relaxed whitespace-pre-line">{description}</p>
          )}
           {actionLink && (
            <div className="mt-4 text-center">
              <a
                href={actionLink.href}
                target={actionLink.target || "_blank"}
                rel={actionLink.rel || "noopener noreferrer"}
                className="inline-block px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-colors text-sm font-medium"
                onClick={(e) => e.stopPropagation()} // Prevent modal close if link is part of description area
              >
                {actionLink.text}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;