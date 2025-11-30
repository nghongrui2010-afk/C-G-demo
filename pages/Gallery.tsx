import React from 'react';

const images = [
  // Exterior
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800', alt: 'Restaurant Front' },
  // Staff Team Concept (Using a placeholder for the group photo)
  { src: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=800', alt: 'Our Team', span: 'col-span-2 row-span-2' },
  // Food
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800', alt: 'Pizza' },
  // Interior
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', alt: 'Interior Vibes' },
  // Food
  { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', alt: 'BBQ Dish' },
  // Detail
  { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800', alt: 'Coffee Art' },
];

const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-brand-dark mb-4">Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into the daily life at C&G x Häfn. From our dedicated kitchen team to the vibrant atmosphere of our dining hall.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative group overflow-hidden rounded-sm shadow-md ${img.span || ''}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif tracking-wider">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Team Section mimicking Image 3 */}
        <div className="mt-20 bg-white p-8 md:p-12 shadow-lg border-l-4 border-brand-blue">
          <div className="flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/3">
                <h3 className="text-3xl font-serif font-bold mb-4 text-brand-dark">Meet The Family</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Behind every great dish is a passionate team. Our staff at Cookies & Ginger are dedicated to making your dining experience memorable, treating every guest like part of our family.
                </p>
                <button className="text-brand-blue font-bold uppercase tracking-widest text-sm hover:underline">
                  Join Our Team
                </button>
             </div>
             <div className="md:w-2/3 h-64 md:h-80 bg-gray-200 rounded-sm overflow-hidden relative">
                 <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200" 
                  alt="Staff Group Photo"
                  className="w-full h-full object-cover"
                 />
                 <div className="absolute bottom-4 right-4 bg-white/90 px-4 py-2 font-serif font-bold text-brand-dark text-sm rounded shadow">
                    The C&G Team
                 </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;