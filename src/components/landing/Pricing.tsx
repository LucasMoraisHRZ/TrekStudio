
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: 29,
    description: "Perfect for small businesses and startups",
    features: [
      "Basic dashboard access",
      "Up to 5 team members",
      "1GB storage space",
      "Basic analytics",
      "24/7 email support"
    ]
  },
  {
    name: "Pro",
    price: 79,
    description: "Ideal for growing companies with more needs",
    features: [
      "Advanced dashboard access",
      "Up to 20 team members",
      "10GB storage space",
      "Advanced analytics",
      "Priority email support",
      "API access",
      "Custom reporting"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: 149,
    description: "For larger organizations with complex requirements",
    features: [
      "Full dashboard access",
      "Unlimited team members",
      "100GB storage space",
      "Premium analytics",
      "24/7 phone support",
      "Advanced API access",
      "Custom reporting",
      "Dedicated account manager",
      "White labeling options"
    ]
  }
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for your business
          </p>
          
          <div className="mt-8 flex items-center justify-center">
            <span className={`mr-4 ${isYearly ? 'text-gray-500' : 'text-gray-900 font-semibold'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                isYearly ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <span
                className={`${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 rounded-full bg-white transition-transform`}
              />
            </button>
            <span className={`ml-4 ${isYearly ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Yearly <span className="text-green-600 text-sm">(Save 20%)</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-8 shadow-sm ${
                plan.popular ? 'border-2 border-primary relative' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-white text-sm font-semibold py-1 px-4 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">${isYearly ? Math.round(plan.price * 0.8 * 12) : plan.price}</span>
                <span className="text-gray-600">/{isYearly ? 'year' : 'month'}</span>
              </div>
              
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-6 ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary/90 text-white' 
                    : 'bg-white border border-primary text-primary hover:bg-gray-50'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
