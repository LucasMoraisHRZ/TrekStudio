
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help you get started.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="Message subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white w-full py-6"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm flex">
              <div className="mr-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h4>
                <p className="text-gray-600 mb-2">We'll respond within 24 hours</p>
                <a href="mailto:info@company.com" className="text-primary hover:underline">
                  info@company.com
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm flex">
              <div className="mr-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h4>
                <p className="text-gray-600 mb-2">Mon-Fri from 9am to 6pm</p>
                <a href="tel:+1234567890" className="text-primary hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm flex">
              <div className="mr-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Visit Us</h4>
                <p className="text-gray-600 mb-2">Come say hello at our office</p>
                <address className="not-italic text-primary">
                  123 Business Avenue, Suite 100<br />
                  New York, NY 10001
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
