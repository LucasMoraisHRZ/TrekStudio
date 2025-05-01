
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer: "Our 14-day free trial gives you full access to all features with no credit card required. At the end of the trial period, you can choose to subscribe to one of our plans or your account will automatically downgrade to the free version with limited features."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference for the remainder of your billing cycle. When downgrading, the new rate will apply at the start of your next billing cycle."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards including Visa, Mastercard, and American Express. We also support payment through PayPal and wire transfers for annual enterprise plans."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use bank-level encryption to protect your data. All information is stored on secure servers with regular backups. We never share your data with third parties without your explicit consent."
  },
  {
    question: "Do you offer discounts for nonprofits or educational institutions?",
    answer: "Yes, we offer special pricing for nonprofits, educational institutions, and startups. Please contact our sales team for more information about these discounts."
  },
  {
    question: "How can I get support if I have questions?",
    answer: "Our customer support team is available 24/7 via email. Pro and Enterprise plan users also get access to priority support with faster response times and phone support options."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our service
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-medium py-4 hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
