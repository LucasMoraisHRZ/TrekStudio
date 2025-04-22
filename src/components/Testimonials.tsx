import React, { useEffect, useRef } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

type TestimonialProps = {
  quote: string;
  author: string;
  position: string;
  company: string;
};

const Testimonial = ({ quote, author, position, company }: TestimonialProps) => {
  return (
    <div className="bg-[#013334] p-8 rounded-lg border border-[#00D781]/20 shadow-lg h-full flex flex-col">
      <div className="text-[#00D781] text-4xl mb-4">"</div>
      <p className="text-white/90 italic flex-grow">{quote}</p>
      <div className="mt-6 pt-6 border-t border-[#00D781]/20">
        <h4 className="text-white font-bold">{author}</h4>
        <p className="text-white/70">
          {position}, <span className="text-[#00D781]">{company}</span>
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
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

  const testimonials = [
    {
      quote: "O trabalho da Trek Studio superou todas as nossas expectativas. Nossa nova identidade visual e site trouxeram um aumento de 40% nas conversões nos primeiros dois meses.",
      author: "Ana Carolina Silva",
      position: "Diretora de Marketing",
      company: "TechSolutions"
    },
    {
      quote: "A landing page desenvolvida pela equipe transformou nossa campanha de lançamento. O design premium e a estrutura focada em conversão foram decisivos para o sucesso.",
      author: "Ricardo Mendes",
      position: "CEO",
      company: "StartupInova"
    },
    {
      quote: "As filmagens realizadas para nossa marca transmitiram exatamente os valores que queríamos comunicar. A direção de arte foi impecável e o resultado, emocionante.",
      author: "Mariana Costa",
      position: "Gerente de Marca",
      company: "EcoVerde"
    },
    {
      quote: "A nova identidade visual desenvolvida para nossa clínica trouxe sofisticação e modernidade, mantendo a confiança que nossos pacientes esperam. Trabalho excepcional.",
      author: "Dr. Paulo Ribeiro",
      position: "Diretor Clínico",
      company: "Clínica Vitae"
    }
  ];

  return (
    <section 
      id="testimonials" 
      ref={sectionRef} 
      className="section-spacing bg-[#F6FFCF] opacity-0 transition-opacity duration-1000 ease-out"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#013334] font-sora relative inline-block">
            O que nossos <span className="highlight">clientes</span> dizem
            <div className="absolute -bottom-2 left-0 right-0 mx-auto w-24 h-1 bg-[#00D781]"></div>
          </h2>
          <p className="text-[#013334]/80 text-lg mt-4 max-w-2xl mx-auto">
            Histórias de transformação e crescimento através de nossos projetos.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4 py-4">
                  <Testimonial
                    quote={testimonial.quote}
                    author={testimonial.author}
                    position={testimonial.position}
                    company={testimonial.company}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static bg-[#013334] text-white hover:bg-[#00D781] hover:text-[#013334] transition-colors" />
              <CarouselNext className="static bg-[#013334] text-white hover:bg-[#00D781] hover:text-[#013334] transition-colors" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
