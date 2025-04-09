
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleStartClick = () => {
    window.open('https://wa.me/5571988542841?text=Ol%C3%A1%20gostaria%20de%20come%C3%A7ar%20um%20projeto%20de%20marketing%20na%20minha%20empresa.', '_blank');
  };

  return (
    <section 
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: 'url("/lovable-uploads/19b591b9-c655-4250-b3e3-a03ad7196870.png")' }}
    >
      <div className="container mx-auto px-4 py-48 md:py-64">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6 z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gradient font-sora">
              Desperte Seu <span className="highlight">Potencial</span> com <span className="highlight">Design</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl font-medium text-white/80 font-sora">
              Crie, <span className="highlight">Conecte</span> e Alavanque Seu <span className="highlight">Propósito</span> no Digital com Identidade Visual e Estratégia.
            </h2>
            
            <p className="text-lg text-white/70 font-sora">
              Transforme suas ideias em experiências visuais impactantes. Destaque-se da multidão com um design que comunica sua essência e conecta com seu público de forma autêntica e poderosa.
            </p>
            
            <div className="pt-4">
              <Button 
                onClick={handleStartClick}
                className="bg-[#7DF00B] hover:bg-[#69CC09] text-black font-bold tracking-wide py-6 px-8 rounded-md animate-pulse-btn transition-colors duration-300 font-sora"
              >
                QUERO COMEÇAR!
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            {/* Espaço vazio intencional para layout */}
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-black/40 z-0"></div>
    </section>
  );
};

export default Hero;
