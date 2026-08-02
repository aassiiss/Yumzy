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
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[400px]"
      >
        <div 
          onClick={() => navigate('/cart')}
          className="bg-orange-500 text-white rounded-2xl p-4 flex items-center justify-between shadow-[0_15px_40px_-10px_rgba(249,115,22,0.8)] cursor-pointer hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 border border-orange-400/50"
        >
          <div className="flex flex-col">
            <span className="text-[13px] font-medium text-orange-100 uppercase tracking-wider">{totalItems} {totalItems === 1 ? 'Item' : 'Items'}</span>
            <span className="font-outfit font-bold text-[18px]">₹{amount}</span>
          </div>
          <div className="flex items-center gap-2 font-bold font-outfit text-[17px]">
            View Cart
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingCart;
