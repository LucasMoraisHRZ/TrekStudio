
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Grow your business with our powerful solution
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg">
              The all-in-one platform that helps you scale your business, automate processes, and increase your revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white font-semibold py-6 px-8 rounded-md text-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold py-6 px-8 rounded-md text-lg"
              >
                Learn More
              </Button>
            </div>
            
            <div className="pt-8">
              <p className="text-gray-500 text-sm mb-2">Trusted by leading companies:</p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-8 w-28 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center">
            <div className="w-full h-[400px] md:h-[500px] bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              {/* This would be an image in a real implementation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">Hero Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
