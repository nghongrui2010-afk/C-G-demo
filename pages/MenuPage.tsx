import React from 'react';
import { MENU_DATA } from '../constants';

const MenuPage: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen pt-24 pb-20">
      {/* Header */}
      <div className="bg-brand-dark text-white py-16 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-serif font-bold mb-4">Our Menu</h1>
          <p className="text-gold-400 font-sans tracking-widest uppercase">Handcrafted with Passion</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {MENU_DATA.map((category) => (
          <div key={category.id} id={category.id} className="mb-16 scroll-mt-32">
            <div className="flex items-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-brand-dark pr-6">{category.title}</h2>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {category.items.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row gap-6 group hover:bg-white p-4 rounded-lg transition-colors border border-transparent hover:border-gray-200">
                  {item.image && (
                    <div className="w-full md:w-48 h-32 flex-shrink-0 rounded-sm overflow-hidden bg-gray-200">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  
                  <div className="flex-grow flex flex-col justify-center">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-xl font-bold font-serif text-brand-dark">{item.name}</h3>
                      <span className="text-lg font-bold text-gold-600 ml-4 whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="text-gray-600 font-sans leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-brand-dark/5 p-8 text-center rounded-lg mt-12">
           <p className="text-gray-600 text-sm">
             All prices are in MYR and subject to service tax where applicable. 
             Please inform our staff of any food allergies.
           </p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;