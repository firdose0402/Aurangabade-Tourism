import React, { useState } from 'react';

const Gallery = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?auto=format&fit=crop&w=800&q=80", title: "Bibi Ka Maqbara Monument" },
    { url: "https://images.unsplash.com/photo-1600100397608-f010140e698a?auto=format&fit=crop&w=800&q=80", title: "Ajanta Cave Rock Murals" },
    { url: "https://images.unsplash.com/photo-1599931766861-1e2df83c9233?auto=format&fit=crop&w=800&q=80", title: "Kailash Temple Ellora" },
    { url: "https://images.unsplash.com/photo-1627894154944-ffeb89578672?auto=format&fit=crop&w=800&q=80", title: "Daulatabad Fort Architecture" }
  ];

  const [activeImg, setActiveImg] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-luxury-darkGreen mb-12">Visual Gallery Archive</h2>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img, i) => (
          <div key={i} className="break-inside-avoid relative overflow-hidden rounded-xl cursor-pointer shadow-lg group" onClick={() => setActiveImg(img)}>
            <img src={img.url} alt={img.title} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-xs tracking-wider font-semibold uppercase">{img.title}</p>
            </div>
          </div>
        ))}
      </div>

      {activeImg && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setActiveImg(null)}>
          <div className="relative max-w-4xl w-full">
            <img src={activeImg.url} alt={activeImg.title} className="max-h-[85vh] mx-auto rounded-lg" />
            <p className="text-center text-white mt-4 text-sm font-medium tracking-wide uppercase">{activeImg.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;