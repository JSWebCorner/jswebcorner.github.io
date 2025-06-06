import React from 'react';
import { Service } from '../types';
import { ArrowRightIcon } from '../constants';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-[#1a1a2e] p-8 rounded-xl shadow-2xl hover:shadow-sky-500/30 transition-all duration-300 ease-in-out transform hover:-translate-y-2 group"> {/* Updated shadow color */}
      <div className="flex justify-center md:justify-start mb-6">
        <div className="animate-spin-slow group-hover:animate-none"> 
            {service.icon} 
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3 text-center md:text-left">{service.title}</h3>
      <p className="text-gray-400 mb-6 text-center md:text-left leading-relaxed">{service.description}</p>
      <a href="#contact" className="group inline-flex items-center text-sky-400 font-medium group-hover:text-sky-300 transition-colors">
        Learn More <ArrowRightIcon className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default ServiceCard;