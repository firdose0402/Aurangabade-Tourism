import React from 'react';
import GlassCard from '../components/GlassCard';
import { Trees } from 'lucide-react';

const Nature = () => {
  const spots = [
    { name: "Mhaismal", desc: "A beautiful, serene hill station offering panoramic view landscapes draped in fog during monsoon seasons.", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" },
    { name: "Gautala Wildlife Sanctuary", desc: "Lush tropical green landscapes sprawling with pristine dry deciduous forest habitats and rich animal life biodiversity.", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-luxury-darkGreen mb-4">Nature & Nearby Getaways</h2>
      <div className="h-0.5 w-16 bg-luxury-gold mx-auto mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {spots.map((spot, i) => (
          <GlassCard key={i} className="bg-white">
            <img src={spot.image} alt={spot.name} className="w-full h-[350px] object-cover" />
            <div className="p-8 text-left">
              <div className="flex items-center gap-2 text-luxury-gold mb-2"><Trees className="w-5 h-5"/> Nature Sanctuary</div>
              <h3 className="text-3xl font-bold text-luxury-darkGreen mb-4">{spot.name}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{spot.desc}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Nature;