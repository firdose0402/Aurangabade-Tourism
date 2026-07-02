import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShieldCheck, Map, Trophy, ChefHat, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const customStats = [
    { number: "2+", label: "UNESCO Heritage Sites" },
    { number: "52+", label: "Historic Gates" },
    { number: "500k+", label: "Annual Travelers" },
    { number: "4.9", label: "Average Rating" }
  ];

  const features = [
    { title: "UNESCO World Heritage", desc: "Explore spectacular world-renowned architecture of Ajanta & Ellora.", icon: Trophy },
    { title: "Mughal Architecture", desc: "Witness exquisite symmetry of Bibi Ka Maqbara.", icon: ShieldCheck },
    { title: "Historic Forts", desc: "Climb the impregnable ramparts of Devgiri Daulatabad Fort.", icon: Map },
    { title: "Local Cuisine", desc: "Relish standard authentic luxury tastes of Naan Qalia and Biryani.", icon: ChefHat }
  ];

  return (
    <div className="w-full overflow-hidden bg-luxury-beige">
      {/* Hero Section */}
      <div className="relative h-[90vh] flex items-center justify-center bg-black">
        <img
          src="https://images.unsplash.com/photo-1585123334904-845d60e97b29?auto=format&fit=crop&w=1920&q=80"
          alt="Bibi ka Maqbara"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-darkGreen via-transparent to-black/40" />

        <div className="relative z-10 text-center max-w-4xl px-4 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl text-luxury-white font-bold mb-4 tracking-wide font-sans"
          >
            Experience the Imperial Grandeur of <span className="text-luxury-gold">Aurangabad</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-luxury-goldLight text-md md:text-xl font-light mb-8 max-w-2xl tracking-widest uppercase"
          >
            Chhatrapati Sambhajinagar — Capital of heritage, architecture, and luxury.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md shadow-2xl">
            <Link to="/attractions" className="w-full sm:w-auto bg-gradient-to-r from-luxury-gold to-luxury-goldLight text-luxury-darkGreen px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:opacity-90 transition text-center">
              Explore Now
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Counter Bar */}
      <div className="bg-luxury-darkGreen border-y border-luxury-gold/30 py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {customStats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-3xl md:text-5xl font-bold text-luxury-gold">{stat.number}</div>
              <div className="text-xs md:text-sm text-luxury-white/70 uppercase tracking-widest mt-2 font-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-luxury-darkGreen">Unveil Golden History</h2>
          <div className="h-0.5 w-24 bg-luxury-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, index) => {
            const IconComponent = feat.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-luxury-gold/10 hover:shadow-2xl transition">
                <IconComponent className="w-12 h-12 text-luxury-gold mb-6" />
                <h3 className="text-xl font-bold mb-3 text-luxury-darkGreen">{feat.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;