
import React from 'react';
import Header from '@/components/landing/Header';
import MainHero from '@/components/landing/MainHero';
import ProjectsGrid from '@/components/landing/ProjectsGrid';
import Footer from '@/components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen text-white relative">
      {/* Background image container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/lovable-uploads/f2564104-865a-4427-81f9-d7c0df02f0f7.png" 
          alt="Background" 
          className="w-full h-full object-cover object-center"
          style={{
            transform: 'scale(0.8)',
            transformOrigin: 'center center',
            width: '100%',
            height: '100%',
            imageRendering: '-webkit-optimize-contrast',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            filter: 'contrast(1.05)'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <MainHero />
        <ProjectsGrid />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
