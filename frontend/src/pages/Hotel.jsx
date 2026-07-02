import React, { useState, useEffect } from 'react';
import { Star, MapPin } from 'lucide-react';

const Hotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/hotels')
      .then(res => res.json())
      .then(data => setHotels(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-luxury-darkGreen mb-4">Premium Luxury Accommodations</h2>
      <p className="text-center text-gray-600 mb-12">Immerse yourself in heritage luxury hotel suites and high-end resorts.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel) => (
          <div key={hotel._id} className="bg-white rounded-xl shadow-md border border-luxury-gold/10 overflow-hidden flex flex-col justify-between">
            <div className="relative">
              <img src={hotel.image} alt={hotel.name} className="w-full h-56 object-cover" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2 py-1 rounded flex items-center gap-1 text-xs font-bold text-luxury-darkGreen">
                <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" /> {hotel.rating}
              </div>
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold block mb-1">{hotel.category}</span>
              <h3 className="text-xl font-bold text-luxury-darkGreen mb-3">{hotel.name}</h3>
              <p className="text-xs text-gray-500 flex items-center gap-1 mb-4"><MapPin className="w-3.5 h-3.5" /> {hotel.location}</p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {hotel.amenities.map((am, i) => (
                  <span key={i} className="text-[10px] bg-luxury-beige text-luxury-darkGreen px-2 py-0.5 rounded border border-luxury-gold/10">{am}</span>
                ))}
              </div>
              <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                <div>
                  <span className="text-[10px] text-gray-400 block">Starting from</span>
                  <span className="text-lg font-bold text-luxury-darkGreen">{hotel.price}</span>
                </div>
                <button className="bg-luxury-darkGreen hover:bg-luxury-gold text-luxury-white hover:text-luxury-darkGreen px-4 py-2 rounded text-xs font-bold transition uppercase tracking-wider">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;