
import React from 'react';
import Section from './Section';
import ServiceCard from './ServiceCard';
import { SERVICES_DATA } from '../constants';
import Button from './Button';
import { ArrowRightIcon } from '../constants';

const ServicesSection: React.FC = () => {
  return (
    <Section 
      id="services" 
      title="Explore My Services" 
      subtitle="What I Offer"
      nextSectionId="#quotes" // Add next section ID
    >
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed">
        My services are tailored to elevate your brand and connect with your audience through intuitive design. I specialize in creating engaging digital experiences.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES_DATA.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <div className="text-center mt-16">
        <Button href="#contact" variant="outline" size="lg" icon={<ArrowRightIcon />}>
          Discuss Your Project
        </Button>
      </div>
    </Section>
  );
};

export default ServicesSection;