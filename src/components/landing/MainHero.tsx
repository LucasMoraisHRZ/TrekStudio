
import React from 'react';
import { Button } from '@/components/ui/button';
const MainHero = () => {
  const handleContactClick = () => {
    window.open('https://wa.me/5571988542841?text=Ol%C3%A1%20gostaria%20de%20falar%20sobre%20design%20para%20minha%20empresa.', '_blank');
  };
  return <section className="container mx-auto px-4 py-16 md:py-24 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div>
            <img alt="Trek Studio" src="/lovable-uploads/ee8eb8e5-8578-4338-abce-00f1b1f3566d.png" className="h-40 md:h-30 object-scale-down pl-0" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-beni font-bold lg:text-7xl">
            Chega de design genérico!<br />
            A sua marca merece um visual<br />
            <span className="text-[#faff74]">estratégico e profissional.</span>
          </h1>
          
          <p className="text-lg text-gray-300 max-w-xl">Você traz a sua ideia mesmo que ainda crua e nós 
entregamos uma identidade visual de alto impacto, com estratégia, estética e performance. Seja para lançar um produto, profissionalizar sua marca ou vender mais online.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <div className="relative group">
              <div className="absolute -inset-0.5 gradient-border rounded-md opacity-80 group-hover:opacity-100 transition duration-300"></div>
              <Button onClick={handleContactClick} className="relative bg-[#131313] text-white font-bold py-6 px-8 rounded-md uppercase tracking-wide group-hover:animate-pulse-btn">
                FALE CONOSCO!
              </Button>
            </div>
            
            <div className="max-w-md text-xs text-gray-300 bg-transparent border-l-2 border-[#faff74] pl-4 py-2">Agenda limitada para novos projetos. Fale com a gente
e descubra como o design certo pode mudar o jogo do
seu negócio</div>
          </div>
          
          <div className="pt-4 flex items-center">
            <div className="flex -space-x-4">
              <img src="/placeholder.svg" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-[#0A0A0A]" />
              <img src="/placeholder.svg" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-[#0A0A0A]" />
              <img src="/placeholder.svg" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-[#0A0A0A]" />
            </div>
            <p className="ml-4 text-sm text-[#faff74] font-medium">
              +200 Empreendedores já estão lucrando<br />
              com nossas estratégias de Design!
            </p>
          </div>
        </div>
        
        <div className="hidden lg:block relative">
          {/* Right side will contain the image of the people from the background */}
        </div>
      </div>
    </section>;
};
export default MainHero;
