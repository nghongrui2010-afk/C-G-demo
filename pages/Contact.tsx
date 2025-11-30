import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark pt-24 pb-20 relative">
       {/* Background accent */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-900 hidden lg:block"></div>

       <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row shadow-2xl overflow-hidden rounded-sm">
             
             {/* Left Info Column */}
             <div className="lg:w-1/2 bg-stone-100 p-12 lg:p-16 text-brand-dark">
                <h1 className="text-4xl font-serif font-bold mb-8">Get in Touch</h1>
                <p className="text-gray-600 mb-12">
                   We accept reservations for lunch and dinner. For large groups or private events, please contact us directly.
                </p>

                <div className="space-y-8">
                   <div className="flex items-start space-x-4">
                      <div className="bg-gold-400 p-3 rounded-full text-white">
                         <MapPin size={24} />
                      </div>
                      <div>
                         <h4 className="font-bold uppercase tracking-wider mb-1">Visit Us</h4>
                         <p className="text-gray-600">123 Culinary Avenue, <br/>Food District, 56000 Kuala Lumpur</p>
                      </div>
                   </div>

                   <div className="flex items-start space-x-4">
                      <div className="bg-gold-400 p-3 rounded-full text-white">
                         <Phone size={24} />
                      </div>
                      <div>
                         <h4 className="font-bold uppercase tracking-wider mb-1">Call Us</h4>
                         <p className="text-gray-600">+60 3-1234 5678</p>
                      </div>
                   </div>

                   <div className="flex items-start space-x-4">
                      <div className="bg-gold-400 p-3 rounded-full text-white">
                         <Clock size={24} />
                      </div>
                      <div>
                         <h4 className="font-bold uppercase tracking-wider mb-1">Opening Hours</h4>
                         <p className="text-gray-600">Mon - Fri: 11am - 10pm</p>
                         <p className="text-gray-600">Sat - Sun: 10am - 11pm</p>
                      </div>
                   </div>
                </div>
             </div>

             {/* Right Form Column */}
             <div className="lg:w-1/2 bg-white p-12 lg:p-16">
                <h2 className="text-2xl font-serif font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                         <label className="block text-xs uppercase tracking-wider font-bold text-gray-500 mb-2">First Name</label>
                         <input type="text" className="w-full border-b-2 border-gray-200 focus:border-gold-400 outline-none py-2 transition-colors" placeholder="John" />
                      </div>
                      <div>
                         <label className="block text-xs uppercase tracking-wider font-bold text-gray-500 mb-2">Last Name</label>
                         <input type="text" className="w-full border-b-2 border-gray-200 focus:border-gold-400 outline-none py-2 transition-colors" placeholder="Doe" />
                      </div>
                   </div>
                   
                   <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-gray-500 mb-2">Email Address</label>
                      <input type="email" className="w-full border-b-2 border-gray-200 focus:border-gold-400 outline-none py-2 transition-colors" placeholder="john@example.com" />
                   </div>

                   <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-gray-500 mb-2">Message</label>
                      <textarea rows={4} className="w-full border-b-2 border-gray-200 focus:border-gold-400 outline-none py-2 transition-colors resize-none" placeholder="How can we help you?"></textarea>
                   </div>

                   <button type="button" className="bg-brand-dark text-white px-8 py-3 uppercase tracking-widest font-bold hover:bg-gold-500 transition-colors w-full md:w-auto">
                      Send Message
                   </button>
                </form>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Contact;