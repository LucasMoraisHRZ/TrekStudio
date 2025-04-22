import React, { useEffect, useRef } from 'react';

type DifferentialItemProps = {
  number: string;
  title: string;
  description: string;
  delay: number;
};

const DifferentialItem = ({ number, title, description, delay }: DifferentialItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (itemRef.current) {
                itemRef.current.classList.add('opacity-100');
                itemRef.current.classList.remove('opacity-0');
                itemRef.current.classList.add('translate-y-0');
                itemRef.current.classList.remove('translate-y-10');
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={itemRef} 
      className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
    >
      <div className="mb-4">
        <span className="text-6xl font-bold text-[#00D781]/20">{number}</span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
};

const Differentials = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
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

  const differentials = [
    {
      number: "01",
      title: "Criatividade",
      description: "Abordagem única para cada projeto, com soluções criativas que destacam sua marca da concorrência.",
      delay: 0
    },
    {
      number: "02",
      title: "Estratégia",
      description: "Design pensado para resultados, alinhado aos objetivos de negócio e necessidades do seu público-alvo.",
      delay: 200
    },
    {
      number: "03",
      title: "Execução Premium",
      description: "Processos e técnicas avançadas com atenção meticulosa aos detalhes para entregas de excelência.",
      delay: 400
    },
    {
      number: "04",
      title: "Resultado Mensurável",
      description: "Foco não apenas em estética, mas em metrificar impacto real para o crescimento do seu negócio.",
      delay: 600
    }
  ];

  return (
    <section 
      id="differentials" 
      ref={sectionRef} 
      className="section-spacing bg-[#013334] opacity-0 transition-opacity duration-1000 ease-out"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-sora relative inline-block">
            Nossos <span className="highlight">Diferenciais</span>
            <div className="absolute -bottom-2 left-0 right-0 mx-auto w-24 h-1 bg-[#00D781]"></div>
          </h2>
          <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            O que nos torna a escolha certa para transformar a sua marca.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {differentials.map((item, index) => (
            <DifferentialItem
              key={index}
              number={item.number}
              title={item.title}
              description={item.description}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
