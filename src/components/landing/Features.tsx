
import React from 'react';

const features = [
  {
    title: "Intuitive Dashboard",
    description: "Access all your data and controls from a single, easy-to-use dashboard.",
    icon: "📊"
  },
  {
    title: "Real-time Analytics",
    description: "Monitor performance metrics and make data-driven decisions instantly.",
    icon: "📈"
  },
  {
    title: "Seamless Integration",
    description: "Connect with all your favorite tools and platforms without any hassle.",
    icon: "🔄"
  },
  {
    title: "Advanced Security",
    description: "Keep your data safe with enterprise-grade security features and encryption.",
    icon: "🔒"
  },
  {
    title: "24/7 Support",
    description: "Our expert team is always available to help you resolve any issues.",
    icon: "🛟"
  },
  {
    title: "Custom Reports",
    description: "Generate detailed reports tailored to your specific business needs.",
    icon: "📝"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to streamline operations and drive growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
