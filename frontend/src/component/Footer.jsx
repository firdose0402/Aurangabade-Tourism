import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxury-darkGreen text-luxury-white border-t border-luxury-gold/30 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-luxury-gold mb-4 tracking-wider">AURANGABAD TOURISM</h3>
          <p className="text-sm text-luxury-beige/70 leading-relaxed font-light">
            Experience premium heritage exploration throughout Chhatrapati Sambhajinagar (Aurangabad). Explore historic architectures, caves, and premium landmarks.
          </p>
        </div>
        <div>
          <h4 className="text-md font-semibold text-luxury-gold mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm text-luxury-beige/80 font-light">
            <li><a href="/attractions" className="hover:text-luxury-gold transition-colors">Top Attractions</a></li>
            <li><a href="/food-guide" className="hover:text-luxury-gold transition-colors">Food & Culinary</a></li>
            <li><a href="/hotels" className="hover:text-luxury-gold transition-colors">Premium Stays</a></li>
            <li><a href="/contact" className="hover:text-luxury-gold transition-colors">Help desk</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-md font-semibold text-luxury-gold mb-4 uppercase tracking-wider">Emergency Contacts</h4>
          <ul className="space-y-2 text-sm text-luxury-beige/80 font-light">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-luxury-gold"/> Tourist Police: +91 240 2240500</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-luxury-gold"/> MTDC Office: +91 240 2343169</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-luxury-gold"/> Ambulance Services: 108</li>
          </ul>
        </div>
        <div>
          <h4 className="text-md font-semibold text-luxury-gold mb-4 uppercase tracking-wider">Newsletter</h4>
          <p className="text-xs text-luxury-beige/60 mb-3">Subscribe to get premium itineraries and seasonal guides.</p>
          <form className="flex">
            <input type="email" placeholder="Your email" className="w-full px-3 py-2 text-sm bg-luxury-darkGreen border border-luxury-gold/40 text-luxury-white focus:outline-none focus:border-luxury-gold" />
            <button className="bg-luxury-gold text-luxury-darkGreen px-4 text-sm font-semibold hover:bg-luxury-goldLight transition-colors">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-luxury-gold/10 text-center py-6 text-xs text-luxury-beige/40 font-light">
        © 2026 Aurangabad Premium Tourism Services. All Rights Reserved. Built with strict production engineering standard.
      </div>
    </footer>
  );
};

export default Footer;