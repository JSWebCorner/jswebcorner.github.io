
import React from 'react';
import { Testimonial } from '../types';
import { QuoteLeftIcon } from '../constants';

interface TestimonialCardProps {
  testimonial: Testimonial;
  openTextOverlayModal: (data: { quote: string; author: string; role?: string; imageUrl?: string; }) => void; 
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, openTextOverlayModal }) => { 
  const handleClick = () => {
    openTextOverlayModal({
      quote: testimonial.quote,
      author: testimonial.author,
      role: testimonial.role,
      imageUrl: testimonial.imageUrl, // Pass imageUrl
    });
  };

  return (
    <div 
      className="bg-[#1a1a2e] p-8 rounded-xl shadow-2xl h-full flex flex-col transform transition-all duration-300 hover:shadow-sky-500/30 hover:scale-105 cursor-pointer" // Updated shadow color
      onClick={handleClick} 
    >
      <QuoteLeftIcon className="w-12 h-12 text-sky-400 mb-6 animate-pulse" />
      <p className="text-gray-300 italic mb-6 flex-grow leading-relaxed">"{testimonial.quote}"</p>
      <div className="flex items-center mt-auto pt-6 border-t border-gray-700">
        <img 
          src={testimonial.imageUrl} 
          alt={testimonial.author} 
          className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-sky-400"
        />
        <div>
          <h4 className="text-lg font-semibold text-white">{testimonial.author}</h4>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;