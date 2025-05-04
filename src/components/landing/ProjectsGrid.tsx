
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
    <section className="relative">
      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
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
      </div>
    </section>
  );
};

export default ProjectsGrid;
