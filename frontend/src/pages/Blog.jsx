import React, { useState, useEffect } from 'react';
import { Calendar, User } from 'lucide-react';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-luxury-darkGreen mb-12">Premium Travel Blogs & Guides</h2>

      <div className="space-y-12">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-luxury-gold/10 flex flex-col md:flex-row">
            <img src={blog.image} alt={blog.title} className="w-full md:w-[40%] object-cover h-64 md:h-auto" />
            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <span className="text-xs bg-luxury-darkGreen text-luxury-gold px-2.5 py-1 rounded font-semibold tracking-widest uppercase mb-4 inline-block">{blog.category}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-luxury-darkGreen mb-3">{blog.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light mb-6">{blog.excerpt}</p>
              </div>
              <div className="flex items-center gap-6 text-xs text-gray-400 border-t border-gray-100 pt-4">
                <div className="flex items-center gap-1.5"><User className="w-4 h-4 text-luxury-gold"/> <span>By {blog.author}</span></div>
                <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-luxury-gold"/> <span>{blog.date}</span></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;