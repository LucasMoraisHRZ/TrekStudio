
import React, { useEffect, useRef } from 'react';
import { Globe, Palette, Film, LayoutDashboard } from 'lucide-react';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (cardRef.current) {
                cardRef.current.classList.add('opacity-100');
                cardRef.current.classList.remove('opacity-0');
                cardRef.current.classList.add('translate-y-0');
                cardRef.current.classList.remove('translate-y-10');
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef} 
      className="bg-white p-8 rounded-lg shadow-lg opacity-0 translate-y-10 transition-all duration-700 ease-out flex flex-col h-full"
    >
      <div className="bg-[#00D781]/10 rounded-full p-4 mb-4 inline-block">
        <div className="text-[#00D781]">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-[#013334] mb-3">{title}</h3>
      <p className="text-[#013334]/80 flex-grow">{description}</p>
      <div className="mt-4 pt-4 border-t border-[#013334]/10">
        <a href="#contact" className="text-[#00D781] hover:text-[#013334] transition-colors font-medium">
          Saiba mais →
        </a>
      </div>
    </div>
  );
};

const Services = () => {
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

  const services = [
    {
      icon: <LayoutDashboard size={32} />,
      title: "Landing Pages de Alta Performance",
      description: "Páginas de conversão otimizadas para transformar visitantes em clientes, com foco em taxa de conversão e experiência do usuário.",
      delay: 0
    },
    {
      icon: <Globe size={32} />,
      title: "Websites Personalizados",
      description: "Sites profissionais com design exclusivo que refletem a identidade da sua marca e geram credibilidade no mercado.",
      delay: 200
    },
    {
      icon: <Palette size={32} />,
      title: "Identidade Visual Estratégica",
      description: "Desenvolvimento de marcas memoráveis com logotipos, paletas de cores e elementos visuais que comunicam seu propósito.",
      delay: 400
    },
    {
      icon: <Film size={32} />,
      title: "Filmagens Criativas",
      description: "Produção audiovisual com direção de arte para contar a história da sua marca com qualidade cinematográfica.",
      delay: 600
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="py-20 bg-[#013334] opacity-0 transition-opacity duration-1000 ease-out"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-sora relative inline-block">
            Nossos <span className="highlight">Serviços</span>
            <div className="absolute -bottom-2 left-0 right-0 mx-auto w-24 h-1 bg-[#00D781]"></div>
          </h2>
          <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            Soluções criativas para transformar sua presença digital e fortalecer sua marca no mercado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
