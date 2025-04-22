
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleContactClick = () => {
    window.open('https://wa.me/5571988542841?text=Ol%C3%A1%20gostaria%20de%20come%C3%A7ar%20um%20projeto%20criativo%20para%20minha%20empresa.', '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#013334]/95 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/f9a42c14-0d97-406b-92f6-4bbb50648f61.png" 
              alt="Trek Studio Logo" 
              className="h-10 md:h-12" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              <li>
                <a href="#home" className="text-white hover:text-[#00D781] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-[#00D781] transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-[#00D781] transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#portfolio" className="text-white hover:text-[#00D781] transition-colors">Portfólio</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white hover:text-[#00D781] transition-colors">Depoimentos</a>
              </li>
              <li>
                <Button 
                  onClick={handleContactClick}
                  className="bg-[#00D781] hover:bg-white hover:text-[#013334] text-[#013334] ml-2"
                >
                  Contato
                </Button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white hover:text-[#00D781] transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#013334] absolute top-full left-0 right-0 p-4 shadow-md animate-fade-in">
            <ul className="flex flex-col space-y-4">
              <li>
                <a 
                  href="#home" 
                  className="text-white hover:text-[#00D781] transition-colors block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-white hover:text-[#00D781] transition-colors block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-white hover:text-[#00D781] transition-colors block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  className="text-white hover:text-[#00D781] transition-colors block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfólio
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="text-white hover:text-[#00D781] transition-colors block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <Button 
                  onClick={handleContactClick}
                  className="bg-[#00D781] hover:bg-white hover:text-[#013334] text-[#013334] w-full"
                >
                  Contato
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
