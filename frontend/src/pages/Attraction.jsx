import React, { useState, useEffect } from 'react';
import { MapPin, Clock, CircleDollarSign } from 'lucide-react';
import GlassCard from '../component/GlassCard';

const Attractions = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/attractions')
      .then(res => res.json())
      .then(resData => {
        setData(resData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-luxury-darkGreen font-semibold">Loading Regal Landmarks...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-luxury-darkGreen mb-4">Legendary Heritage Spots</h2>
      <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">Explore world heritage architecture, monumental forts, and beautiful religious shrines.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <GlassCard key={item._id} className="bg-white text-luxury-darkGreen text-left">
            <div className="relative h-64 overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
              <span className="absolute top-4 left-4 bg-luxury-darkGreen text-luxury-gold text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">{item.category}</span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-luxury-darkGreen">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">{item.description}</p>
              <div className="space-y-2 border-t border-gray-100 pt-4 text-xs font-medium text-gray-700">
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-luxury-gold" /> <span>{item.openingHours}</span></div>
                <div className="flex items-center gap-2"><CircleDollarSign className="w-4 h-4 text-luxury-gold" /> <span>{item.entryFee}</span></div>
              </div>
              <a href={item.mapsLink} target="_blank" rel="noreferrer" className="mt-6 flex items-center justify-center gap-2 w-full bg-luxury-darkGreen text-luxury-white py-3 rounded-lg hover:bg-[...]
                <MapPin className="w-4 h-4" /> View On Maps
              </a>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Attractions;
