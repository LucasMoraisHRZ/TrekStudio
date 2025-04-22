
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  useEffect(() => {
    // Simple fade-in animation for content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.classList.add('opacity-100');
      heroContent.classList.remove('opacity-0');
      heroContent.classList.add('translate-y-0');
      heroContent.classList.remove('-translate-y-10');
    }
  }, []);

  const handleStartClick = () => {
    window.open('https://wa.me/5571988542841?text=Ol%C3%A1%20gostaria%20de%20come%C3%A7ar%20um%20projeto%20criativo%20para%20minha%20empresa.', '_blank');
  };

  return (
    <section 
      id="home"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
      style={{ backgroundImage: 'url("/lovable-uploads/2863dc33-de6f-41a7-a469-61bbaac60b8d.png")' }}
    >
      {/* Marketing text overlay for larger screens */}
      <div className="absolute top-10 right-10 text-white hidden lg:block">
        <p className="font-light tracking-widest text-sm">MARKETING ÁGIL - BRANDING - DESIGN</p>
      </div>
      
      {/* Rotating text element */}
      <div className="rotating-text-container bg-white/90 rounded-full shadow-lg hidden sm:block">
        <div className="rotating-text">
          <svg viewBox="0 0 100 100" width="160" height="160">
            <defs>
              <path
                id="circle"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="text-[#00D781] text-[7px]">
              <textPath xlinkHref="#circle" className="text-center">
                DESPERTE SEU POTENCIAL COM DESIGN • DESPERTE SEU POTENCIAL COM DESIGN •
              </textPath>
            </text>
          </svg>
          <div className="logo-center">
            <img 
              src="/lovable-uploads/f9a42c14-0d97-406b-92f6-4bbb50648f61.png" 
              alt="Trek Studio Logo" 
              className="h-16 w-auto" 
            />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="hero-content space-y-6 z-10 opacity-0 -translate-y-10 transition-all duration-1000 ease-out">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/3cc53571-391a-4e6c-95ab-821c8699aad6.png" 
                alt="Trek Studio Logo" 
                className="h-24 md:h-32" 
              />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gradient font-sora">
              Transformamos ideias em<br />
              presença digital<br />
              de <span className="highlight">impacto</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl font-medium text-[#013334] font-sora">
              Crie, Conecte e Alavanque Seu Propósito<br />
              no Digital com Identidade Visual e Estratégia.
            </h2>
            
            <div className="pt-4">
              <Button 
                onClick={handleStartClick}
                className="bg-[#00D781] hover:bg-[#013334] text-white font-bold tracking-wide py-6 px-8 rounded-md animate-pulse-btn transition-colors duration-300 font-sora"
              >
                QUERO COMEÇAR!
              </Button>
            </div>
          </div>
          
          <div>
            {/* Space for background image */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
