
import React from 'react';
import { Button } from '@/components/ui/button';

const MainHero = () => {
  const handleContactClick = () => {
    window.open('https://wa.me/5571988542841?text=Ol%C3%A1%20gostaria%20de%20falar%20sobre%20design%20para%20minha%20empresa.', '_blank');
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-beni font-bold">
            Chega de design genérico!<br />
            A sua marca merece um visual<br />
            <span className="text-[#ADE64F]">estratégico e profissional.</span>
          </h1>
          
          <p className="text-lg text-gray-300 max-w-xl">
            Você traz a sua ideia mesmo que ainda crua e nós entregamos uma identidade visual de alto impacto, com estratégia, estética e performance. Seja para lançar um produto, profissionalizar sua marca ou vender mais online.
          </p>
          
          <Button 
            onClick={handleContactClick}
            className="bg-transparent hover:bg-[#ADE64F]/20 text-[#ADE64F] border-2 border-[#ADE64F] font-bold py-6 px-8 rounded-md transition-colors duration-300 uppercase tracking-wide"
          >
            Fale Conosco!
          </Button>
          
          <div className="pt-8 flex items-center">
            <div className="flex -space-x-4">
              <img src="/placeholder.svg" alt="Cliente" className="w-12 h-12 rounded-full border-2 border-[#0A0A0A]" />
              <img src="/placeholder.svg" alt="Cliente" className="w-12 h-12 rounded-full border-2 border-[#0A0A0A]" />
            </div>
            <p className="ml-4 text-sm text-gray-300">
              +200 Empreendedores já estão lucrando<br />
              com nossas estratégias de Design!
            </p>
          </div>
          
          <div className="text-xs text-gray-400 border-l-2 border-[#ADE64F] pl-4 py-2 bg-[#1A1A1A]/50 max-w-md">
            Agência limitada para novos projetos. Fale com a gente e descubra como o design certo pode mudar o jogo do seu negócio
          </div>
        </div>
        
        <div className="hidden lg:block relative">
          <img 
            src="/lovable-uploads/37ed29ec-fc44-4652-a66e-a742f9e53dc8.png" 
            alt="Trek Studio Designers" 
            className="rounded-lg" 
          />
        </div>
      </div>

      <div className="mt-24 text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-2xl">
          Toda grande marca começa com uma boa ideia.
        </h2>
        <p className="text-lg text-gray-300">
          Mas pra ser levada a sério, ela precisa de um visual profissional.
        </p>
      </div>

      <div className="mt-16 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-beni">
          É isso que fazemos: <span className="text-[#00D781]">transformamos ideias</span> em identidades fortes, páginas que vendem e marcas que se destacam.
        </h2>
        <p className="mt-4 text-xl text-gray-300">
          Veja abaixo alguns dos projetos que já entregamos com estratégia, estética e resultado.
        </p>
      </div>
    </section>
  );
};

export default MainHero;
