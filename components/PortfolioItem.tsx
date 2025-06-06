
import React from 'react';
import { PortfolioItem as PortfolioItemType } from '../types';
import { ArrowRightIcon } from '../constants';

interface PortfolioItemProps {
  item: PortfolioItemType;
  openImageModal: (data: { url: string; title?: string; description?: string; }) => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item, openImageModal }) => {
  return (
    <div 
      className="group relative w-72 md:w-80 aspect-[3/4] rounded-xl shadow-2xl overflow-hidden 
                 transform transition-all duration-500 ease-in-out hover:scale-105
                 mx-3" // Margin for spacing between cards // Removed hover:shadow-purple-500/30
    >
      {/* Background Image (Becomes blurred and scaled on hover) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out group-hover:blur-[6px] group-hover:scale-110"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
        aria-hidden="true"
      ></div>

      {/* Foreground Image (Slides up on hover, clickable for modal) */}
      <img
        src={item.imageUrl}
        alt={item.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:-translate-y-1/3"
      />
      
      <div
          className="absolute inset-0 h-full w-full cursor-pointer flex items-center justify-center 
                     bg-black/0 group-hover:bg-black/40 
                     transition-all duration-500 ease-in-out"
          onClick={() => openImageModal({ url: item.imageUrl, title: item.title, description: `Category: ${item.category}` })}
          aria-label={`View details for ${item.title}`}
      >
          <div className="p-3 bg-sky-500/80 text-white rounded-full opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
              </svg>
          </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1/3 p-4 
                     bg-gradient-to-t from-black/90 via-black/80 to-black/50
                     transform translate-y-full group-hover:translate-y-0 
                     opacity-0 group-hover:opacity-100
                     transition-all duration-500 ease-in-out 
                     flex flex-col justify-end pointer-events-auto">
        <h3 className="text-lg font-bold text-white mb-1 truncate" title={item.title}>{item.title}</h3>
        <p className="text-xs text-sky-300 mb-2">{item.category}</p>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 group/link inline-flex items-center text-xs text-sky-400 hover:text-sky-200 transition-colors self-start"
          onClick={(e) => e.stopPropagation()} 
        >
          View Project
          <ArrowRightIcon className="ml-1 w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-1" />
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent 
                     group-hover:opacity-0 transition-opacity duration-300 ease-in-out 
                     pointer-events-none">
          <h3 className="text-md font-semibold text-white truncate" title={item.title}>{item.title}</h3>
          <p className="text-xs text-sky-400">{item.category}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
