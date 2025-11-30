import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-stone-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-serif font-bold mb-4">
              HÄFN <span className="text-gold-400">x</span> C&G
            </h3>
            <p className="text-gray-400 leading-relaxed font-sans mb-6">
              A unique collaboration bringing you the finest teas and the most comforting gourmet meals in town.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-gold-400 font-bold uppercase tracking-widest mb-6 text-sm">Navigation</h4>
            <ul className="space-y-4 font-serif text-lg">
              <li><a href="#/" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#/menu" className="hover:text-gold-400 transition-colors">Menu</a></li>
              <li><a href="#/gallery" className="hover:text-gold-400 transition-colors">Gallery</a></li>
              <li><a href="#/contact" className="hover:text-gold-400 transition-colors">Reservations</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div className="text-center md:text-right">
            <h4 className="text-gold-400 font-bold uppercase tracking-widest mb-6 text-sm">Opening Hours</h4>
            <div className="space-y-2 text-gray-300 font-sans">
              <p><span className="w-24 inline-block text-gray-500">Mon - Fri:</span> 11:00 AM - 10:00 PM</p>
              <p><span className="w-24 inline-block text-gray-500">Sat - Sun:</span> 10:00 AM - 11:00 PM</p>
              <p className="mt-4 text-xs text-gold-400">* Lunch Menu available Weekdays 11am - 2pm</p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-gray-500 text-sm font-sans">
          <p>&copy; {new Date().getFullYear()} Cookies & Ginger / Häfn Tea Room. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;