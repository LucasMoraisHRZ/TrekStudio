
import React from 'react';
import Header from '@/components/landing/Header';
import MainHero from '@/components/landing/MainHero';
import ProjectsGrid from '@/components/landing/ProjectsGrid';
import Footer from '@/components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen text-white relative">
      {/* Background image container with adjusted position */}
      <div className="absolute inset-0 -top-32 z-0 overflow-hidden">
        <img 
          src="/lovable-uploads/746e75a4-4ad4-402a-aaa6-4cacf2571e79.png" 
          alt="Background" 
          className="w-full h-full object-cover object-center"
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
