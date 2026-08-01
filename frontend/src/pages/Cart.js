import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../assets/frontend_assets/assets";
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
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 max-w-[1200px] mx-auto px-6 lg:px-8 bg-surface-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-12"
      >
        <button 
          onClick={() => navigate('/menu')}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-x-1 transition-all text-slate-400 hover:text-slate-900 border border-slate-100"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h1 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 tracking-tight">
          Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Cart</span>
        </h1>
      </motion.div>

      <AnimatePresence mode="wait">
        {cartFoods.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center py-32 bg-white rounded-[3rem] shadow-sm border border-slate-100"
          >
            <div className="w-32 h-32 bg-slate-50 rounded-full flex items-center justify-center mb-8">
              <span className="text-6xl opacity-50 grayscale">🛍️</span>
            </div>
            <p className="text-3xl font-outfit font-bold text-slate-800 mb-2">Your cart is empty</p>
            <p className="text-slate-500 font-inter mb-8">Looks like you haven't added anything delicious yet.</p>
            <button 
              onClick={() => navigate("/menu")} 
              className="bg-slate-900 text-white px-8 py-4 rounded-full font-outfit font-bold text-[15px] shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              Browse Premium Menu
            </button>
          </motion.div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col lg:flex-row gap-8"
          >
            {/* Cart Items List */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="hidden md:grid grid-cols-6 text-[13px] font-outfit font-bold text-slate-400 uppercase tracking-widest px-6 pb-2 border-b border-slate-200">
                <p className="col-span-2">Item</p>
                <p className="text-center">Price</p>
                <p className="text-center">Qty</p>
                <p className="text-center">Total</p>
                <p className="text-center">Remove</p>
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <AnimatePresence>
                  {cartFoods.map((item) => (
                    <motion.div 
                      layout
                      variants={itemVariants}
                      exit={{ opacity: 0, x: -50, transition: { duration: 0.2 } }}
                      key={item._id} 
                      className="grid grid-cols-3 md:grid-cols-6 items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-slate-100/50 hover:shadow-premium transition-shadow group"
                    >
                      <div className="col-span-3 md:col-span-2 flex items-center gap-4">
                        <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-inner">
                          <img
                            src={item.image.startsWith('http') ? item.image : url + "/images/" + item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div>
                          <p className="font-outfit font-bold text-[17px] text-slate-900 leading-tight mb-1">{item.name}</p>
                          <span className="inline-block px-2.5 py-1 bg-slate-50 text-slate-500 text-[11px] font-bold uppercase tracking-wider rounded-md border border-slate-100">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <p className="text-center font-inter font-medium text-slate-500 hidden md:block">₹{item.price}</p>
                      
                      <div className="flex items-center justify-center col-span-2 md:col-span-1">
                        <div className="bg-slate-50 px-4 py-2 rounded-full border border-slate-100 flex items-center gap-4">
                          <p className="font-outfit font-bold text-slate-900">{cartItems[item._id]}</p>
                        </div>
                      </div>

                      <p className="text-center font-outfit font-bold text-orange-500 text-lg hidden md:block">₹{cartItems[item._id] * item.price}</p>
                      
                      <div className="flex justify-end md:justify-center col-span-1">
                        <button 
                          onClick={() => removeFromCart(item._id)} 
                          className="w-10 h-10 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors duration-200"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Sidebar Summaries */}
            <div className="w-full lg:w-[400px] flex flex-col gap-6 shrink-0">
              
              {/* Order Summary */}
              <motion.div 
                variants={itemVariants}
                className="bg-slate-900 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden text-white"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
                
                <h3 className="font-outfit font-bold text-2xl mb-8 relative z-10">Order Summary</h3>
                
                <div className="flex flex-col gap-5 relative z-10 font-inter text-[15px]">
                  <div className="flex justify-between text-slate-300">
                    <span>Subtotal</span>
                    <span className="font-medium text-white">₹{totalCartAmount()}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Delivery Fee</span>
                    <span className="font-medium text-white">₹{totalCartAmount() > 0 ? 49 : 0}</span>
                  </div>
                  
                  <div className="h-px bg-white/10 my-2"></div>
                  
                  <div className="flex justify-between items-center font-outfit">
                    <span className="text-lg font-medium text-slate-200">Total</span>
                    <span className="text-3xl font-bold text-orange-400">₹{totalCartAmount() > 0 ? totalCartAmount() + 49 : 0}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => navigate("/placeorder")}
                  className="w-full mt-8 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-outfit font-bold text-[17px] py-4 rounded-xl shadow-[0_10px_20px_-10px_rgba(249,115,22,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(249,115,22,0.6)] hover:-translate-y-1 transition-all duration-300 relative z-10"
                >
                  Proceed to Checkout
                </button>
              </motion.div>

              {/* Promo Code */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100"
              >
                <h3 className="font-outfit font-bold text-slate-900 text-xl mb-2">Have a Promo Code?</h3>
                <p className="text-[14px] text-slate-500 font-inter mb-6">Enter it below to apply your discount.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="e.g. YUMZY10"
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-[15px] font-inter focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400"
                  />
                  <button className="bg-slate-900 text-white font-outfit font-bold px-8 py-3.5 rounded-xl hover:bg-slate-800 transition-colors shrink-0">
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
