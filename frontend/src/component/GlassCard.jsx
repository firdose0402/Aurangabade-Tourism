import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`glassmorphism rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-2 border border-luxury-gold/10 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;