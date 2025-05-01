
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const testimonials = [
  {
    content: "This platform has completely transformed our business operations. The analytics tools have given us insights we never had before, helping us make better decisions.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc."
  },
  {
    content: "The customer service is exceptional. Whenever we have a question or issue, the team responds quickly and effectively. Couldn't be happier with our decision.",
    author: "Michael Chen",
    position: "Operations Manager, Global Solutions"
  },
  {
    content: "We've seen a 40% increase in productivity since implementing this solution. The automation features have freed up our team to focus on more strategic tasks.",
    author: "Emily Wilson",
    position: "Director, Innovation Labs"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="bg-gray-50 rounded-xl p-8 shadow-sm h-full flex flex-col">
                  <div className="text-4xl text-primary mb-4">"</div>
                  <p className="text-gray-700 flex-grow mb-6">{testimonial.content}</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative static bg-white border-gray-200 hover:bg-gray-50" />
            <CarouselNext className="relative static bg-white border-gray-200 hover:bg-gray-50" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
