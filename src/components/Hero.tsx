
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleStartClick = () => {
    window.open('https://wa.me/5571988542841?text=Ol%C3%A1%20gostaria%20de%20come%C3%A7ar%20um%20projeto%20de%20marketing%20na%20minha%20empresa.', '_blank');
  };

  return (
    <section 
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center overflow-hidden relative"
      style={{ backgroundImage: 'url("/lovable-uploads/2863dc33-de6f-41a7-a469-61bbaac60b8d.png")' }}
    >
      {/* Rotating text element positioned at bottom right of the screen */}
      <div className="rotating-text-container bg-white/90 rounded-full shadow-lg">
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
      
      <div className="container mx-auto px-4 -ml-32 md:-ml-48 lg:-ml-64 xl:-ml-96"> {/* Moved significantly to the left */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 lg:col-span-5 md:col-start-1 space-y-6 z-10">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/3cc53571-391a-4e6c-95ab-821c8699aad6.png" 
                alt="Trek Studio Logo" 
                className="h-24 md:h-32" 
              />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gradient font-sora">
              Desperte Seu <span className="highlight">Potencial</span> com <span className="highlight">Design</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl font-medium text-[#013334] font-sora">
              Crie, Conecte e Alavanque Seu Propósito<br />
              no Digital com Identidade Visual e Estratégia.
            </h2>
            
            <p className="text-lg text-[#013334]/80 font-sora">
              Destaque-se da multidão com um design que comunica sua<br /> 
              essência e conecta com seu público de forma autêntica e poderosa.
            </p>
            
            <div className="pt-4">
              <Button 
                onClick={handleStartClick}
                className="bg-[#00D781] hover:bg-[#013334] text-white font-bold tracking-wide py-6 px-8 rounded-md animate-pulse-btn transition-colors duration-300 font-sora"
              >
                QUERO COMEÇAR!
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-6 lg:col-span-7">
            {/* Espaço para a imagem de fundo */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

