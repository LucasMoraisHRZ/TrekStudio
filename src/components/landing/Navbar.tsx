
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-primary">Company</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              <li>
                <a href="#features" className="text-gray-700 hover:text-primary transition-colors">Features</a>
              </li>
              <li>
                <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">FAQ</a>
              </li>
              <li>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white ml-2"
                  onClick={() => window.location.href = "#contact"}
                >
                  Get Started
                </Button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 p-4 shadow-md animate-fade-in">
            <ul className="flex flex-col space-y-4">
              <li>
                <a 
                  href="#features" 
                  className="text-gray-700 hover:text-primary transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-700 hover:text-primary transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="text-gray-700 hover:text-primary transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  className="text-gray-700 hover:text-primary transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-700 hover:text-primary transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
              </li>
              <li>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white w-full"
                  onClick={() => {
                    window.location.href = "#contact";
                    setIsMenuOpen(false);
                  }}
                >
                  Get Started
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
