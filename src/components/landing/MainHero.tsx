
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const MainHero = () => {
  const isMobile = useIsMobile();
  const [isWideScreen, setIsWideScreen] = useState(false);
  
  useEffect(() => {
    // Check if we're on a wide screen like 2K
    const checkScreenWidth = () => {
      setIsWideScreen(window.innerWidth >= 2560);
    };
    
    // Initial check
    checkScreenWidth();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenWidth);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);
  
  const handleContactClick = () => {
    window.open('https://wa.me/5571988542841?text=Ol%C3%A1%20gostaria%20de%20falar%20sobre%20design%20para%20minha%20empresa.', '_blank');
  };
  
  return (
    <section className={`container mx-auto px-4 py-16 md:py-24 relative z-10 flex items-center ${isWideScreen ? 'min-h-[90vh] pt-32' : 'min-h-[80vh]'}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="ml-2 mb-6">
            <img src="/lovable-uploads/99ef3532-f7bd-4007-8ddf-491ca8437360.png" alt="Trek Studio Logo" className="h-16 w-auto" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-beni font-bold lg:text-7xl">
            Chega de design genérico!<br />
            A sua marca merece um visual<br />
            <span className="text-[#faff74]">estratégico e profissional.</span>
          </h1>
          
          <p className="text-lg text-gray-300 max-w-xl font-normal font-inter">Você traz a sua ideia mesmo que ainda crua e nós 
entregamos uma identidade visual de alto impacto, com estratégia, estética e performance. Seja para lançar um produto, profissionalizar sua marca ou vender mais online.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <div className="relative group">
              <div className="absolute -inset-0.5 gradient-border rounded-md opacity-80 group-hover:opacity-100 transition duration-300"></div>
              <Button onClick={handleContactClick} className="relative bg-[#131313] text-white font-inter font-bold py-6 px-8 rounded-md uppercase tracking-wide group-hover:animate-pulse-btn">
                FALE CONOSCO!
              </Button>
            </div>
            
            <div className="max-w-md text-xs text-gray-300 bg-transparent border-l-2 border-[#faff74] pl-4 py-2 font-inter">Agenda limitada para novos projetos. Fale com a gente 
e descubra como o design certo pode mudar o jogo do 
seu negócio</div>
          </div>
          
          <div className="pt-4 flex items-center">
            <div className="flex -space-x-4">
              <img src="/placeholder.svg" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-[#0A0A0A]" />
              <img src="/placeholder.svg" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-[#0A0A0A]" />
              <img src="/placeholder.svg" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-[#0A0A0A]" />
            </div>
            <p className="ml-4 text-sm text-[#faff74] font-inter font-medium">
              +200 Empreendedores já estão lucrando<br />
              com nossas estratégias de Design!
            </p>
          </div>
        </div>
        
        <div className="hidden lg:block relative">
          {/* Right side will contain the image of the people from the background */}
        </div>
      </div>
    </section>
  );
};

export default MainHero;
