import React from 'react';
import { MENU_DATA } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const MenuHighlight: React.FC = () => {
  // Get 3 featured items across all categories
  const featuredItems = MENU_DATA.flatMap(cat => cat.items)
    .filter(item => item.featured)
    .slice(0, 3);

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-sans font-bold tracking-widest uppercase text-xs">Taste the Difference</span>
          <h2 className="text-4xl font-serif text-brand-dark mt-3 mb-6">Signature Dishes</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 rounded-sm aspect-[4/3]">
                <img 
                  src={item.image || 'https://picsum.photos/600/400'} 
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-brand-dark text-gold-400 px-3 py-1 font-serif text-lg font-bold shadow-lg">
                  {item.price}
                </div>
              </div>
              <h3 className="text-2xl font-serif text-brand-dark mb-2 group-hover:text-gold-600 transition-colors">
                {item.name}
              </h3>
              <p className="text-gray-600 font-sans leading-relaxed mb-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/menu" className="inline-flex items-center space-x-2 text-brand-dark border-b-2 border-gold-400 pb-1 hover:text-gold-600 transition-colors uppercase tracking-widest font-bold text-sm">
            <span>Explore Full Menu</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlight;