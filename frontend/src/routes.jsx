import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Attractions from './pages/Attractions';
import Nature from './pages/Nature';
import FoodGuide from './pages/FoodGuide';
import Hotels from './pages/Hotels';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/attractions" element={<Attractions />} />
      <Route path="/nature" element={<Nature />} />
      <Route path="/food-guide" element={<FoodGuide />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;