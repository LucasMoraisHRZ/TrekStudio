
import React from 'react';

const projects = [
  {
    id: 1,
    image: '/placeholder.svg',
    alt: 'Website Visit',
  },
  {
    id: 2,
    image: '/placeholder.svg',
    alt: 'Coca Cola',
  },
  {
    id: 3,
    image: '/placeholder.svg',
    alt: 'Alrinca',
  },
  {
    id: 4,
    image: '/placeholder.svg',
    alt: 'Portrait',
  },
  {
    id: 5,
    image: '/placeholder.svg',
    alt: 'Services',
  },
  {
    id: 6,
    image: '/placeholder.svg',
    alt: 'Product',
  },
  {
    id: 7,
    image: '/placeholder.svg',
    alt: 'Personal Brand',
  },
  {
    id: 8,
    image: '/placeholder.svg',
    alt: 'Supplement',
  },
  {
    id: 9,
    image: '/placeholder.svg',
    alt: 'Delivery',
  },
  {
    id: 10,
    image: '/placeholder.svg',
    alt: 'Products',
  },
  {
    id: 11,
    image: '/placeholder.svg',
    alt: 'VR',
  },
  {
    id: 12,
    image: '/placeholder.svg',
    alt: 'Healthcare',
  },
  {
    id: 13,
    image: '/placeholder.svg',
    alt: 'Subscription',
  },
];

const ProjectsGrid = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      {/* Text introduction above the projects */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Toda grande marca começa com uma boa ideia.
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Mas pra ser levada a sério, ela precisa de um visual profissional.
        </p>
        
        <div className="text-xl md:text-2xl font-bold">
          É isso que fazemos: <span className="text-[#00D781]">transformamos ideias</span> em identidades fortes, páginas 
          que vendem e marcas que se destacam.
        </div>
        <p className="text-lg mt-3 mb-10">
          Veja abaixo alguns dos projetos que já entregamos com estratégia, estética e resultado.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="relative overflow-hidden rounded-2xl aspect-square cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <img 
              src={project.image} 
              alt={project.alt} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
