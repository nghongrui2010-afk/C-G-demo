import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isBlackBgPage = location.pathname === '/menu' || location.pathname === '/gallery';

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    scrolled || isBlackBgPage ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
  }`;

  const linkClass = (path: string) => `font-sans text-sm tracking-widest uppercase hover:text-gold-400 transition-colors ${
    location.pathname === path ? 'text-gold-400' : 'text-white'
  }`;

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="flex flex-col items-start group">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold text-white group-hover:text-gold-400 transition-colors">
              HÄFN <span className="text-gold-400 text-lg">x</span> C&G
            </span>
          </div>
          <span className="text-[0.6rem] tracking-[0.2em] text-gray-300 uppercase">
            The Mark of Distinction
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={linkClass('/')}>Home</Link>
          <Link to="/menu" className={linkClass('/menu')}>Menu</Link>
          <Link to="/gallery" className={linkClass('/gallery')}>Gallery</Link>
          <Link to="/contact" className="px-5 py-2 border border-gold-400 text-gold-400 font-sans text-xs uppercase tracking-widest hover:bg-gold-400 hover:text-black transition-all">
            Find Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white hover:text-gold-400 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-brand-dark transform transition-transform duration-300 ease-in-out z-40 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } pt-24 px-6`}>
         <div className="flex flex-col space-y-6 text-center">
          <Link to="/" className="text-2xl font-serif text-white hover:text-gold-400">Home</Link>
          <Link to="/menu" className="text-2xl font-serif text-white hover:text-gold-400">Menu</Link>
          <Link to="/gallery" className="text-2xl font-serif text-white hover:text-gold-400">Gallery</Link>
          <Link to="/contact" className="text-2xl font-serif text-gold-400">Contact Us</Link>
         </div>
         <div className="mt-12 flex justify-center space-x-6 text-gray-400">
           <Coffee size={24} />
           <MapPin size={24} />
         </div>
      </div>
    </nav>
  );
};

export default Navbar;