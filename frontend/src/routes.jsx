import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Attraction from './pages/Attraction';
import Nature from './pages/Nature';
import FoodGuide from './pages/FoodGuide';
import Hotel from './pages/Hotel';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/attractions" element={<Attraction />} />
      <Route path="/nature" element={<Nature />} />
      <Route path="/food-guide" element={<FoodGuide />} />
      <Route path="/hotels" element={<Hotel />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
