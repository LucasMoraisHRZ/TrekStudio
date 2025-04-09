
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#121212] to-[#1d2536]">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content Column */}
          <div className="order-2 md:order-1 space-y-6">
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
          
          {/* Image Column */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#47b0e8]/20 to-transparent rounded-xl -z-10 blur-xl"></div>
              <div className="overflow-hidden rounded-xl border-2 border-white/10 shadow-2xl">
                <img 
                  src="/hero-portrait.jpg" 
                  alt="Profissional criativo" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
