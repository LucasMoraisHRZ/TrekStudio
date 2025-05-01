
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-full h-[400px] bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              {/* This would be an image in a real implementation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">About Image</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 rounded-lg"></div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Our Company
            </h2>
            
            <p className="text-lg text-gray-600">
              Founded in 2015, we've been on a mission to simplify business processes and help companies reach their full potential. Our team of experts combines technical knowledge with industry insights to deliver solutions that make a real difference.
            </p>
            
            <p className="text-lg text-gray-600">
              We believe in creating products that are not only powerful but also intuitive and easy to use. That's why thousands of businesses trust us to help them grow and succeed in today's competitive landscape.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <p className="text-4xl font-bold text-primary">2,500+</p>
                <p className="text-gray-600 mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">98%</p>
                <p className="text-gray-600 mt-1">Satisfaction Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">15+</p>
                <p className="text-gray-600 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">50+</p>
                <p className="text-gray-600 mt-1">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
