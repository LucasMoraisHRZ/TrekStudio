
import React from 'react';
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

type TestimonialProps = {
  quote: string;
  author: string;
  location: string;
};

const testimonials = [
  {
    quote: "A Trek Studio é uma excelente e super-profissional fornecedora de serviços, que trouxe novas tecnologias, nova metodologia e uma perspectiva inovadora para nosso projeto",
    author: "João Silva",
    location: "São Paulo, BR"
  },
  {
    quote: "Transformaram completamente nossa presença digital com soluções inovadoras e resultados impressionantes",
    author: "Maria Santos",
    location: "Rio de Janeiro, BR"
  },
  {
    quote: "Uma parceria que superou todas as expectativas, entregando excelência em cada projeto",
    author: "Pedro Lima",
    location: "Curitiba, BR"
  }
];

const TestimonialCard = ({ quote, author, location }: TestimonialProps) => (
  <div className="flex flex-col">
    <div className="text-[#00D781] text-[80px] font-beni mb-6">"</div>
    <h3 className="text-white font-beni text-[40px] leading-tight mb-8 max-w-3xl">
      {quote}
    </h3>
    <div className="mt-auto">
      <p className="text-white font-beni text-2xl">{author}</p>
      <p className="text-[#00D781] font-beni text-xl">{location}</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-[#013334] section-spacing">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start mb-16">
          <div>
            <h4 className="text-[#00D781] font-beni text-xl uppercase mb-4">
              DEPOIMENTOS
            </h4>
            <h2 className="text-white font-beni text-5xl uppercase">
              CLIENTES FELIZES <span className="text-[#00D781]">DIZEM</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="icon"
              className="bg-transparent border-[#00D781] hover:bg-[#00D781] hover:text-[#013334] transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="bg-transparent border-[#00D781] hover:bg-[#00D781] hover:text-[#013334] transition-all"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4">
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
