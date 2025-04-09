
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/lovable-uploads/e4251476-f4e9-4fc7-a65e-746e23a369b5.png")' }}
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content Column */}
          <div className="order-2 md:order-1 space-y-6 z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gradient">
              Desperte Seu <span className="highlight">Potencial</span> com <span className="highlight">Design</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl font-medium text-white/80">
              Crie, <span className="highlight">Conecte</span> e Alavanque Seu <span className="highlight">Propósito</span> no Digital com Identidade Visual e Estratégia.
            </h2>
            
            <p className="text-lg text-white/70">
              Transforme suas ideias em experiências visuais impactantes. Destaque-se da multidão com um design que comunica sua essência e conecta com seu público de forma autêntica e poderosa.
            </p>
            
            <div className="pt-4">
              <Button 
                className="bg-[#47b0e8] hover:bg-[#3a8fc0] text-white font-bold tracking-wide py-6 px-8 rounded-md animate-pulse-btn transition-colors duration-300"
              >
                QUERO COMEÇAR!
              </Button>
            </div>
          </div>
          
          {/* Empty Column - for spacing */}
          <div className="order-1 md:order-2">
            {/* Espaço vazio intencional para layout */}
          </div>
        </div>
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
    </section>
  );
};

export default Hero;
