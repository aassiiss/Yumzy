import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { motion, AnimatePresence } from 'framer-motion';

const FoodItem = ({ _id, name, image, price, description }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
  const inCartCount = cartItems[_id] || 0;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className='flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-premium transition-all duration-500 group border border-surface-200/60'
    >
      <div className='relative overflow-hidden aspect-[4/3] bg-surface-100'>
        <img
          src={typeof image === 'string' && (image.startsWith('http') || image.startsWith('/static') || image.startsWith('data:')) ? image : url + "/images/" + image}
          alt={name}
          className='w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105'
        />
        
        {/* Very subtle gradient to ensure the add button is visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="absolute bottom-3 right-3 z-10">
          <AnimatePresence mode="wait">
            {!inCartCount ? (
              <motion.button
                key="add-btn"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => addToCart(_id)}
                className='w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm border border-surface-200/50 text-surface-900 hover:bg-white transition-all duration-300'
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </motion.button>
            ) : (
              <motion.div
                key="counter"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className='flex items-center gap-2 bg-white/90 backdrop-blur-md px-1.5 py-1.5 rounded-full shadow-sm border border-surface-200/50'
              >
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => removeFromCart(_id)} 
                  className='w-7 h-7 rounded-full bg-surface-100 text-surface-600 flex items-center justify-center hover:bg-surface-200 transition-colors duration-200'
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                  </svg>
                </motion.button>
                <span className='font-inter font-medium text-surface-900 text-[13px] min-w-[16px] text-center'>
                  {inCartCount}
                </span>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => addToCart(_id)} 
                  className='w-7 h-7 rounded-full bg-surface-900 text-white flex items-center justify-center hover:bg-surface-800 transition-colors duration-200'
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className='flex flex-col flex-1 p-5'>
        <div className='flex justify-between items-start gap-4 mb-1.5'>
          <h3 className='text-[16px] font-inter font-medium text-surface-900 leading-snug group-hover:text-orange-600 transition-colors duration-300'>
            {name}
          </h3>
        </div>
        
        <p className='text-surface-500 text-[13px] leading-relaxed line-clamp-2 font-inter mb-5 flex-1'>
          {description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <p className='text-[16px] font-inter font-medium text-surface-900'>
            ₹{price}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodItem;
