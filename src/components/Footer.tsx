
import React from 'react';
import { Instagram, Facebook, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#013334] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img 
              src="/lovable-uploads/f9a42c14-0d97-406b-92f6-4bbb50648f61.png" 
              alt="Trek Studio Logo" 
              className="h-12 mb-4" 
            />
            <p className="text-white/70 mb-4">
              Transformando marcas através de design estratégico e presença digital impactante.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#00D781] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#00D781] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#00D781] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-[#00D781] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-[#00D781] transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-[#00D781] transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/70 hover:text-[#00D781] transition-colors">Portfólio</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-[#00D781] transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-[#00D781] transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={18} className="text-[#00D781] mr-2" />
                <a href="mailto:contato@trekstudio.com.br" className="text-white/70 hover:text-[#00D781] transition-colors">
                  contato@trekstudio.com.br
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-[#00D781] mr-2" />
                <a href="tel:+55-71-98854-2841" className="text-white/70 hover:text-[#00D781] transition-colors">
                  +55 71 98854-2841
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Trek Studio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
