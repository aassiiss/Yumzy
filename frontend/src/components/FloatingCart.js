import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCart = () => {
  const { cartItems, totalCartAmount, token } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  const totalItems = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  const amount = totalCartAmount();

  // Don't show on Cart, PlaceOrder, or Verify pages, or if empty
  if (!token || totalItems === 0 || ['/cart', '/placeorder', '/verify'].includes(location.pathname)) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[360px]"
      >
        <div 
          onClick={() => navigate('/cart')}
          className="bg-surface-900/95 backdrop-blur-xl text-white rounded-full px-6 py-4 flex items-center justify-between shadow-premium cursor-pointer hover:bg-surface-800 transition-all duration-300 border border-surface-700/50"
        >
          <div className="flex items-center gap-3">
            <div className="bg-white/10 w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-medium">
              {totalItems}
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-medium text-surface-400 uppercase tracking-wider">Subtotal</span>
              <span className="font-inter font-medium text-[15px]">₹{amount}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 font-medium font-inter text-[14px]">
            Checkout
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingCart;
