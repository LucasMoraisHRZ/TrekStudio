import React, { useEffect, useRef, useState } from 'react';

type PortfolioItemProps = {
  image: string;
  title: string;
  category: string;
  delay: number;
};

const PortfolioItem = ({ image, title, category, delay }: PortfolioItemProps) => {
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
      className="opacity-0 translate-y-10 transition-all duration-700 ease-out group relative overflow-hidden rounded-lg"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-[#013334]/80 opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center group-hover:opacity-100">
        <h3 className="text-white text-xl font-bold mb-1">{title}</h3>
        <p className="text-[#00D781] mb-4">{category}</p>
        <button className="bg-[#00D781] text-[#013334] px-4 py-2 rounded font-medium hover:bg-white transition-colors">
          Ver Projeto
        </button>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  const portfolioItems = [
    {
      image: "/lovable-uploads/e4251476-f4e9-4fc7-a65e-746e23a369b5.png",
      title: "Brand Book Imobiliária",
      category: "identidade-visual",
      delay: 0
    },
    {
      image: "/lovable-uploads/19b591b9-c655-4250-b3e3-a03ad7196870.png",
      title: "Site Institucional Advogado",
      category: "website",
      delay: 100
    },
    {
      image: "/lovable-uploads/436669b3-f8a6-4efa-ac41-94f36b5af705.png",
      title: "Landing Page Curso Online",
      category: "landing-page",
      delay: 200
    },
    {
      image: "/lovable-uploads/82bdda5b-6204-4b3b-a906-fb2a71800d2b.png",
      title: "Filmagem para Campanha",
      category: "filmagem",
      delay: 300
    },
    {
      image: "/lovable-uploads/f9a42c14-0d97-406b-92f6-4bbb50648f61.png",
      title: "Logo Trek Studio",
      category: "identidade-visual",
      delay: 400
    },
    {
      image: "/lovable-uploads/3cc53571-391a-4e6c-95ab-821c8699aad6.png",
      title: "Marca Trek Studio",
      category: "identidade-visual",
      delay: 500
    }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

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

  return (
    <section 
      id="portfolio" 
      ref={sectionRef} 
      className="section-spacing bg-[#F6FFCF] opacity-0 transition-opacity duration-1000 ease-out"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#013334] font-sora relative inline-block">
            Nosso <span className="highlight">Portfólio</span>
            <div className="absolute -bottom-2 left-0 right-0 mx-auto w-24 h-1 bg-[#00D781]"></div>
          </h2>
          <p className="text-[#013334]/80 text-lg mt-4 max-w-2xl mx-auto">
            Projetos selecionados que demonstram nossa abordagem criativa e estratégica.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-full p-1 shadow">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === 'all' ? 'bg-[#00D781] text-white' : 'text-[#013334] hover:text-[#00D781]'
              }`}
            >
              Todos
            </button>
            <button 
              onClick={() => setFilter('landing-page')}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === 'landing-page' ? 'bg-[#00D781] text-white' : 'text-[#013334] hover:text-[#00D781]'
              }`}
            >
              Landing Pages
            </button>
            <button 
              onClick={() => setFilter('website')}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === 'website' ? 'bg-[#00D781] text-white' : 'text-[#013334] hover:text-[#00D781]'
              }`}
            >
              Websites
            </button>
            <button 
              onClick={() => setFilter('identidade-visual')}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === 'identidade-visual' ? 'bg-[#00D781] text-white' : 'text-[#013334] hover:text-[#00D781]'
              }`}
            >
              Identidade Visual
            </button>
            <button 
              onClick={() => setFilter('filmagem')}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === 'filmagem' ? 'bg-[#00D781] text-white' : 'text-[#013334] hover:text-[#00D781]'
              }`}
            >
              Filmagens
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <PortfolioItem
              key={index}
              image={item.image}
              title={item.title}
              category={item.category}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
