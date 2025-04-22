import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('translate-y-0');
            entry.target.classList.remove('translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleContactClick = () => {
    window.open('https://wa.me/5571988542841?text=Ol%C3%A1%20gostaria%20de%20come%C3%A7ar%20um%20projeto%20criativo%20para%20minha%20empresa.', '_blank');
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="section-spacing bg-[#013334] opacity-0 translate-y-10 transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-sora">
            Vamos construir sua marca com <br /><span className="highlight">impacto visual real</span>?
          </h2>
          
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato para uma consulta personalizada e descubra como podemos transformar sua presença digital.
          </p>
          
          <Button 
            onClick={handleContactClick}
            className="bg-[#00D781] hover:bg-white text-[#013334] font-bold tracking-wide py-6 px-8 rounded-md text-lg animate-pulse-btn"
          >
            FALE COM NOSSO TIME
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
