import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Attractions', path: '/attractions' },
    { name: 'Nature', path: '/nature' },
    { name: 'Food Guide', path: '/food-guide' },
    { name: 'Hotels', path: '/hotels' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav class="fixed top-0 left-0 w-full z-50 bg-luxury-darkGreen border-b border-luxury-gold/20 shadow-xl px-4 md:px-12 py-4 flex justify-between items-center text-luxury-white">
      <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-widest text-luxury-gold">
        <Compass className="w-6 h-6 animate-spin-slow" />
        AURANGABAD TOURISM
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden xl:flex space-x-8 text-sm uppercase tracking-widest font-medium">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`hover:text-luxury-gold transition-colors duration-300 ${isActive(link.path) ? 'text-luxury-gold border-b-2 border-luxury-gold pb-1' : 'text-luxury-white'}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Burger Trigger */}
      <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden text-luxury-gold focus:outline-none">
        {isOpen ? <X class="w-7 h-7" /> : <Menu class="w-7 h-7" />}
      </button>

      {/* Mobile Menu Box */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-luxury-darkGreen/95 backdrop-blur-md flex flex-col items-center py-6 space-y-4 border-b border-luxury-gold/20 transition-all xl:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg tracking-widest ${isActive(link.path) ? 'text-luxury-gold' : 'text-luxury-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;