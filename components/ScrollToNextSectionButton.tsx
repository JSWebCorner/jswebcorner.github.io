import React from 'react';
import { ChevronDownIcon } from '../constants'; 

interface ScrollToNextSectionButtonProps {
  targetId: string;
}

const ScrollToNextSectionButton: React.FC<ScrollToNextSectionButtonProps> = ({ targetId }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId.startsWith('#') ? targetId.substring(1) : targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="p-3 bg-black/20 hover:bg-black/40 text-sky-400 rounded-full 
                 transition-all duration-300 ease-in-out 
                 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:ring-offset-2 focus:ring-offset-[#0f0f1a]/50
                 hover:scale-110 hover:translate-y-1 transform"
      aria-label={`Scroll to next section: ${targetId.substring(1)}`}
    >
      <ChevronDownIcon className="w-6 h-6" />
    </button>
  );
};

export default ScrollToNextSectionButton;