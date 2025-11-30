import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-brand-dark">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-[20s] hover:scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000')" }} // Represents the interior
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <div className="animate-fade-in-up">
          <h2 className="text-gold-400 tracking-[0.3em] text-sm md:text-base font-sans font-bold mb-4 uppercase">
            Tea Room &bull; Restaurant
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            Cookies & <br /> <span className="italic text-gold-400">Ginger</span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-300 font-sans text-lg md:text-xl font-light mb-10 leading-relaxed">
            Experience the fusion of classic tea room elegance and hearty, gourmet comfort food.
          </p>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
            <Link 
              to="/menu" 
              className="px-8 py-3 bg-gold-500 text-brand-dark font-bold uppercase tracking-wider hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20"
            >
              View Menu
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 border border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-brand-dark transition-colors"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;