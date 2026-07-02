import React, { useState, useEffect } from 'react';
import { Utensils } from 'lucide-react';

const FoodGuide = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/foods')
      .then(res => res.json())
      .then(data => setFoods(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-luxury-darkGreen mb-4">Royal Culinary Food Guide</h2>
      <p className="text-center text-gray-500 mb-12">Savor luxurious traditional tastes born in imperial kitchens.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {foods.map((food) => (
          <div key={food._id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-luxury-gold/20 flex flex-col justify-between">
            <div>
              <img src={food.image} alt={food.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-luxury-darkGreen mb-2">{food.name}</h3>
                <p className="text-xs text-gray-600 mb-4 italic leading-relaxed">{food.description}</p>
                <div className="text-xs text-luxury-darkGreen mb-2"><strong>Key Ingredients:</strong> {food.ingredients.join(', ')}</div>
                <div className="text-xs text-luxury-darkGreen"><strong>Best Outlets:</strong> {food.bestPlaces.join(', ')}</div>
              </div>
            </div>
            <div className="bg-luxury-darkGreen/5 px-6 py-4 flex justify-between items-center border-t border-gray-100">
              <span className="text-xs uppercase tracking-wider font-semibold text-luxury-darkGreen flex items-center gap-1"><Utensils className="w-4 h-4"/> Pricing</span>
              <span className="text-sm font-bold text-luxury-gold">{food.avgPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGuide;