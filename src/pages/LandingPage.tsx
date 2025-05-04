
import React, { useEffect, useState } from 'react';
import Header from '@/components/landing/Header';
import MainHero from '@/components/landing/MainHero';
import ProjectsGrid from '@/components/landing/ProjectsGrid';
import Footer from '@/components/landing/Footer';

const LandingPage = () => {
  const [backgroundPosition, setBackgroundPosition] = useState('center center');

  useEffect(() => {
    const adjustBackgroundPosition = () => {
      // Check if we're on a wide 2K screen
      if (window.innerWidth >= 2560) {
        setBackgroundPosition('center 40%'); // Move the image down further for 2K screens
      } else {
        setBackgroundPosition('center center'); // Default position for other screens
      }
    };
    
    // Initial check
    adjustBackgroundPosition();
    
    // Add event listener for window resize
    window.addEventListener('resize', adjustBackgroundPosition);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', adjustBackgroundPosition);
    };
  }, []);

  return (
    <div className="min-h-screen text-white relative flex flex-col">
      {/* Background image container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://res.cloudinary.com/daunnmzhd/image/upload/q_100/Background_Landing_Page_copiar_nqq5vf.webp" 
          alt="Background" 
          className="w-full h-full object-cover"
          style={{ 
            WebkitFontSmoothing: 'antialiased',
            imageRendering: 'crisp-edges',
            filter: 'contrast(1.05)',
            objectPosition: backgroundPosition
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <MainHero />
        <ProjectsGrid />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
