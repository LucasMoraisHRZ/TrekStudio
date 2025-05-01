
import React from 'react';
import Header from '@/components/landing/Header';
import MainHero from '@/components/landing/MainHero';
import ProjectsGrid from '@/components/landing/ProjectsGrid';
import Footer from '@/components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      <MainHero />
      <ProjectsGrid />
      <Footer />
    </div>
  );
};

export default LandingPage;
