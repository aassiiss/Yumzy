import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const { food_list, cartItems, removeFromCart, totalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();
  const cartFoods = food_list.filter(item => cartItems[item._id] > 0);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 max-w-[1100px] mx-auto px-6 lg:px-8 bg-surface-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-4 mb-10"
      >
        <button 
          onClick={() => navigate('/menu')}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-surface-200 text-surface-500 hover:text-surface-900 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h1 className="text-[32px] md:text-[40px] font-outfit font-medium text-surface-900 tracking-tight">
          Checkout
        </h1>
      </motion.div>

      <AnimatePresence mode="wait">
        {cartFoods.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl border border-surface-200/50 shadow-sm"
          >
            <p className="text-xl font-outfit font-medium text-surface-900 mb-2">Your cart is empty</p>
            <p className="text-surface-500 font-inter text-[14px] mb-8">Add some items from the menu to get started.</p>
            <button 
              onClick={() => navigate("/menu")} 
              className="bg-surface-900 text-white px-6 py-3 rounded-xl font-inter font-medium text-[14px] hover:bg-surface-800 transition-colors shadow-sm"
            >
              Browse menu
            </button>
          </motion.div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col lg:flex-row gap-10"
          >
            {/* Cart Items List */}
            <div className="flex-1">
              <div className="bg-white rounded-3xl border border-surface-200/60 shadow-sm overflow-hidden">
                <div className="hidden md:grid grid-cols-6 text-[11px] font-inter font-medium text-surface-500 uppercase tracking-widest px-6 py-4 border-b border-surface-100 bg-surface-50/50">
                  <p className="col-span-3">Item</p>
                  <p className="text-center">Quantity</p>
                  <p className="text-right">Total</p>
                  <p className="text-center"></p>
                </div>

                <div className="divide-y divide-surface-100">
                  <AnimatePresence>
                    {cartFoods.map((item) => (
                      <motion.div 
                        layout
                        variants={itemVariants}
                        exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                        key={item._id} 
                        className="grid grid-cols-3 md:grid-cols-6 items-center gap-4 px-6 py-5 group bg-white"
                      >
                        <div className="col-span-3 flex items-center gap-4">
                          <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-surface-100 bg-surface-50">
                            <img
                              src={item.image.startsWith('http') ? item.image : url + "/images/" + item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-inter font-medium text-[14px] text-surface-900 leading-tight mb-1">{item.name}</p>
                            <p className="text-surface-500 text-[13px] font-inter">₹{item.price}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-center col-span-2 md:col-span-1">
                          <span className="font-inter font-medium text-surface-900 text-[14px] bg-surface-50 px-3 py-1 rounded-md border border-surface-200">
                            {cartItems[item._id]}
                          </span>
                        </div>

                        <p className="text-right font-inter font-medium text-surface-900 text-[14px] hidden md:block">
                          ₹{cartItems[item._id] * item.price}
                        </p>
                        
                        <div className="flex justify-end md:justify-center col-span-1">
                          <button 
                            onClick={() => removeFromCart(item._id)} 
                            className="w-8 h-8 rounded-full text-surface-400 hover:bg-surface-100 hover:text-red-500 flex items-center justify-center transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Sidebar Summaries */}
            <div className="w-full lg:w-[380px] flex flex-col gap-6 shrink-0">
              
              {/* Order Summary */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-3xl p-8 shadow-sm border border-surface-200/60"
              >
                <h3 className="font-outfit font-medium text-lg text-surface-900 mb-6">Order summary</h3>
                
                <div className="flex flex-col gap-4 font-inter text-[14px]">
                  <div className="flex justify-between text-surface-600">
                    <span>Subtotal</span>
                    <span className="font-medium text-surface-900">₹{totalCartAmount()}</span>
                  </div>
                  <div className="flex justify-between text-surface-600">
                    <span>Delivery fee</span>
                    <span className="font-medium text-surface-900">₹{totalCartAmount() > 0 ? 49 : 0}</span>
                  </div>
                  
                  <div className="h-px bg-surface-200 my-2"></div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-[15px] font-medium text-surface-900">Total</span>
                    <span className="text-2xl font-medium font-inter text-surface-900">₹{totalCartAmount() > 0 ? totalCartAmount() + 49 : 0}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => navigate("/placeorder")}
                  className="w-full mt-8 bg-surface-900 text-white font-inter font-medium text-[15px] py-4 rounded-xl shadow-premium hover:bg-surface-800 transition-colors"
                >
                  Proceed to checkout
                </button>
              </motion.div>

              {/* Promo Code */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-sm border border-surface-200/60"
              >
                <p className="text-[13px] text-surface-600 font-inter mb-3">Add a promo code</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 bg-surface-50 border border-surface-200 rounded-lg px-4 py-2.5 text-[14px] font-inter focus:outline-none focus:ring-1 focus:ring-surface-400 transition-all placeholder:text-surface-400 text-surface-900 uppercase"
                  />
                  <button className="bg-surface-100 text-surface-900 border border-surface-200 font-inter font-medium px-4 py-2.5 rounded-lg hover:bg-surface-200 transition-colors shrink-0 text-[13px]">
                    Apply
                  </button>
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cart;
