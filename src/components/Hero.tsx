
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleStartClick = () => {
    window.open('https://wa.me/5571988542841?text=Ol%C3%A1%20gostaria%20de%20come%C3%A7ar%20um%20projeto%20de%20marketing%20na%20minha%20empresa.', '_blank');
  };

  return (
    <section 
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
      style={{ backgroundImage: 'url("/lovable-uploads/436669b3-f8a6-4efa-ac41-94f36b5af705.png")' }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
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
          
          <div>
            {/* Espaço para a imagem de fundo */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
