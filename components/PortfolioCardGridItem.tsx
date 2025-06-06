
import React from 'react';
import { PortfolioItem as PortfolioItemType } from '../types';
import { ArrowRightIcon } from '../constants';

interface PortfolioCardGridItemProps {
  item: PortfolioItemType;
  openImageModal: (data: { 
    url: string; 
    title?: string; 
    description?: string;
    actionLink?: { href: string; text: string; target?: string; rel?: string; };
  }) => void;
}

const PortfolioCardGridItem: React.FC<PortfolioCardGridItemProps> = ({ item, openImageModal }) => {
  const handleCardClick = () => {
    openImageModal({
      url: item.imageUrl,
      title: item.title,
      description: `Category: ${item.category}`,
      actionLink: (item.link && item.link !== '#') 
        ? { href: item.link, text: 'View Project', target: '_blank', rel: 'noopener noreferrer' }
        : undefined
    });
  };

  return (
    <div 
      className="group bg-[#1a1a2e] rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-sky-500/40 cursor-pointer"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCardClick()}
      aria-label={`View details for ${item.title}`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-1 truncate" title={item.title}>{item.title}</h3>
        <p className="text-sm text-sky-400 mb-3">{item.category}</p>
        {item.link && item.link !== '#' && (
           <span // Changed from <a> to <span> as the whole card is clickable
            className="inline-flex items-center text-xs text-sky-300 group-hover:text-sky-100 transition-colors"
          >
            View Project Details
            <ArrowRightIcon className="ml-1 w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        )}
      </div>
    </div>
  );
};

export default PortfolioCardGridItem;
