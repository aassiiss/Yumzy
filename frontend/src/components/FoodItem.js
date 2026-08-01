import React, { useContext } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { StoreContext } from '../context/StoreContext';
import { motion, AnimatePresence } from 'framer-motion';

const FoodItem = ({ _id, name, image, price, description }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
  
  const inCartCount = cartItems[_id] || 0;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className='flex flex-col h-full bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-premium transition-shadow duration-300 group border border-slate-100/50'
    >
      <div className='relative overflow-hidden aspect-[4/3]'>
        <img
          src={typeof image === 'string' && image.startsWith('http') ? image : url + "/images/" + image}
          alt={name}
          className='w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105'
        />
        
        {/* Gradient overlay for better text/button visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute bottom-4 right-4 z-10">
          <AnimatePresence mode="wait">
            {!inCartCount ? (
              <motion.button
                key="add-btn"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => addToCart(_id)}
                className='w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-slate-100/50 text-orange-500 hover:text-white hover:bg-orange-500 transition-colors duration-300'
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </motion.button>
            ) : (
              <motion.div
                key="counter"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className='flex items-center gap-3 bg-white/95 backdrop-blur-md px-3 py-2 rounded-full shadow-lg border border-slate-100/50'
              >
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => removeFromCart(_id)} 
                  className='w-8 h-8 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors duration-200'
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                  </svg>
                </motion.button>
                <span className='font-outfit font-bold text-slate-900 text-sm min-w-[20px] text-center'>
                  {inCartCount}
                </span>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => addToCart(_id)} 
                  className='w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors duration-200'
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className='flex flex-col flex-1 p-6'>
        <div className='flex justify-between items-start gap-4 mb-2'>
          <h3 className='text-[19px] font-outfit font-bold text-slate-900 leading-tight group-hover:text-orange-600 transition-colors duration-300'>
            {name}
          </h3>
          <div className="flex gap-0.5 mt-1 shrink-0">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        
        <p className='text-slate-500 text-[14px] leading-relaxed line-clamp-2 font-inter mb-4 flex-1'>
          {description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <p className='text-[22px] font-outfit font-bold text-slate-900'>
            ₹{price}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodItem;
