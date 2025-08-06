import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="text-xl font-medium bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text">
              Jane Designer
            </a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#work" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
              Work
            </a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
              Contact
            </a>
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-lg py-4">
          <div className="flex flex-col space-y-4 px-4">
            <a href="#work" className="text-base font-medium text-gray-600 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>
              Work
            </a>
            <a href="#about" className="text-base font-medium text-gray-600 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#contact" className="text-base font-medium text-gray-600 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>}
    </header>;
};