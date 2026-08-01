import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ExploreMenu from '../components/ExploreMenu';
import FoodDisplay from '../components/FoodDisplay';

const Menu = () => {
  const [category, setCategory] = useState('All');

  return (
    <div className='bg-surface-50 min-h-screen pt-32 pb-24 relative overflow-hidden'>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      
      <div className='max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-white border border-slate-200 text-slate-500 text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest font-outfit mb-6 shadow-sm"
          >
            Culinary Collection
          </motion.span>
          <h1 className="text-5xl md:text-6xl font-outfit font-bold text-slate-900 tracking-tight mb-6">
            Our Exquisite <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Menu</span>
          </h1>
          <p className="text-slate-500 font-inter text-lg leading-relaxed">
            Explore our wide variety of delicious meals crafted with the finest ingredients. Whether you're craving something spicy, sweet, or savory, we have something to delight your taste buds.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8 mb-12"
        >
          <ExploreMenu category={category} setCategory={setCategory}/>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pb-16"
        >
          <FoodDisplay category={category}/>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
