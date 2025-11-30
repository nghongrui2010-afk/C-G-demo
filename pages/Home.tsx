import React from 'react';
import Hero from '../components/Hero';
import MenuHighlight from '../components/MenuHighlight';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <MenuHighlight />
      
      {/* Atmosphere Section - Based on Image 5 (Interior) */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000" 
                  alt="Restaurant Interior" 
                  className="rounded-sm shadow-2xl shadow-gold-500/10 border-r-4 border-b-4 border-gold-400"
                />
            </div>
            <div className="md:w-1/2">
                <h2 className="text-4xl font-serif mb-6">A Distinctive Atmosphere</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Step into a space where industrial chic meets warm comfort. High ceilings with dark exposed beams, brick flooring, and ambient lighting create the perfect backdrop for intimate dinners or lively gatherings.
                </p>
                <p className="text-gray-300 leading-relaxed">
                    Whether you're seated by our expansive windows watching the world go by or tucked into a cozy corner with friends, the vibe at C&G x Häfn is always inviting.
                </p>
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-brand-dark">What Our Guests Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
               <div key={t.id} className="bg-white p-8 shadow-sm border-t-2 border-gold-400">
                 <div className="flex mb-4 text-gold-500">
                   {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                 </div>
                 <p className="text-gray-600 italic mb-6 font-serif">"{t.text}"</p>
                 <p className="font-bold text-brand-dark text-sm uppercase tracking-wider">- {t.name}</p>
               </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;