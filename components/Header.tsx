
import React, { useState, useEffect } from 'react';
import { NavLink } from '../types';
import { ArrowRightIcon, ChevronDownIcon } from '../constants';
import Button from './Button';

interface HeaderProps {
  navLinks: NavLink[];
  logoUrl: string;
}

const Header: React.FC<HeaderProps> = ({ navLinks, logoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#12121e]/60 shadow-lg backdrop-blur-sm py-4' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#hero" className="flex items-center space-x-2">
          <img src={logoUrl} alt="JS Web Corner Logo" className="h-10 w-auto" />
        </a>

        <nav className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-gray-300 hover:text-sky-400 transition-colors">
              {link.label}
              {link.dropdown && <ChevronDownIcon className="inline ml-1 h-4 w-4" />}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" variant="primary" icon={<ArrowRightIcon />}>
            Contact Me Now!
          </Button>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-sky-400 focus:outline-none"
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#12121e]/90 backdrop-blur-sm shadow-lg py-4">
          <nav className="flex flex-col space-y-4 px-4">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-gray-300 hover:text-sky-400 transition-colors py-2" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
            <Button href="#contact" variant="primary" icon={<ArrowRightIcon />} className="w-full mt-4" onClick={() => setIsOpen(false)}>
              Contact Me Now!
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
