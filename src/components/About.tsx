
import React, { useEffect, useRef } from 'react';

const About = () => {
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

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="section-spacing bg-[#F6FFCF] opacity-0 translate-y-10 transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#00D781] opacity-50 rounded-lg"></div>
            <img 
              src="/lovable-uploads/82bdda5b-6204-4b3b-a906-fb2a71800d2b.png" 
              alt="Creative Process" 
              className="rounded-lg shadow-xl relative z-10 w-full"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#013334] font-sora relative inline-block">
              Sobre <span className="highlight">Nós</span>
              <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#00D781]"></div>
            </h2>
            
            <p className="text-lg text-[#013334]/90 leading-relaxed">
              Somos um estúdio criativo com foco em resultados, que combina <span className="font-semibold text-[#013334]">design estratégico</span> e <span className="font-semibold text-[#013334]">marketing digital</span> para transformar marcas.
            </p>
            
            <p className="text-lg text-[#013334]/90 leading-relaxed">
              Nosso trabalho vai além da estética - criamos experiências digitais que conectam marcas ao seu público de forma autêntica e impactante, gerando resultados mensuráveis.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#013334] mb-2">Nossa Missão</h3>
                <p className="text-[#013334]/80">Elevar marcas através de design estratégico e presença digital impactante.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#013334] mb-2">Nossa Visão</h3>
                <p className="text-[#013334]/80">Ser referência em design estratégico que transforma negócios e conecta marcas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
