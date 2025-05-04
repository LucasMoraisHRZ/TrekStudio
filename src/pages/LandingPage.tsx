
import React from 'react';
import Header from '@/components/landing/Header';
import MainHero from '@/components/landing/MainHero';
import ProjectsGrid from '@/components/landing/ProjectsGrid';
import Footer from '@/components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col text-white">
      {/* Background image container that scrolls with content */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/5c6a9614-9850-4592-b31a-d2358e58f56c.png" 
          alt="Background" 
          className="w-full h-full object-cover object-top"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <MainHero />
        <ProjectsGrid />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
