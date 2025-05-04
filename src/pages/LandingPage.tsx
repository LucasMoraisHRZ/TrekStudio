
import React from 'react';
import Header from '@/components/landing/Header';
import MainHero from '@/components/landing/MainHero';
import ProjectsGrid from '@/components/landing/ProjectsGrid';
import Footer from '@/components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Background image container without scaling */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/f090ddbe-988b-479d-a2be-0897c276531b.png" 
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
