import React from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const inputClass = "w-full border border-slate-200 rounded-xl px-4 py-3.5 text-[15px] font-inter focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-slate-50 placeholder:text-slate-400 text-slate-900";

const PlaceOrder = () => {
  const {
    url,
    totalCartAmount,
    cartItems,
    token,
    food_list,
  } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
    phoneNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const placeOrderHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item };
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: totalCartAmount() + 49,
    };
    try {
      let response = await axios.post(url + "/api/v1/order/place", orderData, {
        headers: { token },
      });
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Error placing order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    }
  }, [token, navigate]);

  const subtotal = totalCartAmount();
  const delivery = subtotal > 0 ? 49 : 0;
  const total = subtotal + delivery;

  return (
    <div className="min-h-screen pt-32 pb-24 max-w-[1200px] mx-auto px-6 lg:px-8 bg-surface-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-12"
      >
        <button 
          onClick={() => navigate('/cart')}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-x-1 transition-all text-slate-400 hover:text-slate-900 border border-slate-100"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h1 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 tracking-tight">
          Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Checkout</span>
        </h1>
      </motion.div>

      <form onSubmit={placeOrderHandler} className="flex flex-col lg:flex-row gap-8">
        {/* Left - Delivery Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex-1 bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-500">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-outfit font-bold text-slate-900">Delivery Details</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input required type="text" name="firstName" onChange={onChangeHandler} value={data.firstName} placeholder="First Name" className={inputClass} />
            <input required type="text" name="lastName" onChange={onChangeHandler} value={data.lastName} placeholder="Last Name" className={inputClass} />
            <input required type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder="Email Address" className={`md:col-span-2 ${inputClass}`} />
            <input required type="text" name="city" onChange={onChangeHandler} value={data.city} placeholder="City" className={inputClass} />
            <input required type="text" name="state" onChange={onChangeHandler} value={data.state} placeholder="State" className={inputClass} />
            <input required type="number" name="pinCode" onChange={onChangeHandler} value={data.pinCode} placeholder="Pin Code" className={inputClass} />
            <input required type="text" name="country" onChange={onChangeHandler} value={data.country} placeholder="Country" className={inputClass} />
            <input required type="number" name="phoneNumber" onChange={onChangeHandler} value={data.phoneNumber} placeholder="Phone Number" className={`md:col-span-2 ${inputClass}`} />
          </div>
        </motion.div>

        {/* Right - Order Summary */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:w-[450px] flex flex-col gap-6 shrink-0"
        >
          <div className="bg-slate-900 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
            
            <h2 className="text-2xl font-outfit font-bold mb-8 relative z-10">Order Summary</h2>
            
            <div className="flex flex-col gap-5 relative z-10">
              <div className="flex flex-col gap-3 mb-2 max-h-[200px] overflow-y-auto hide-scrollbar pr-2">
                {food_list.filter(item => cartItems[item._id] > 0).map(item => (
                  <div key={item._id} className="flex justify-between items-center text-[14px] font-inter">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                        <img src={item.image.startsWith('http') ? item.image : url + "/images/" + item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-slate-300 truncate max-w-[150px]">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-orange-400 font-bold bg-orange-500/10 px-2 py-0.5 rounded text-xs">×{cartItems[item._id]}</span>
                      <span className="font-semibold text-white w-12 text-right">₹{item.price * cartItems[item._id]}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="h-px bg-white/10 my-2"></div>
              
              <div className="flex flex-col gap-3 font-inter text-[15px]">
                <div className="flex justify-between text-slate-300">
                  <span>Subtotal</span>
                  <span className="font-medium text-white">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Delivery Fee</span>
                  <span className="font-medium text-white">₹{delivery}</span>
                </div>
              </div>
              
              <div className="h-px bg-white/10 my-2"></div>
              
              <div className="flex justify-between items-center font-outfit">
                <span className="text-lg font-medium text-slate-200">Total to Pay</span>
                <span className="text-3xl font-bold text-orange-400">₹{total}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-8 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-outfit font-bold text-[17px] py-4 rounded-xl shadow-[0_10px_20px_-10px_rgba(249,115,22,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(249,115,22,0.6)] hover:-translate-y-1 transition-all duration-300 relative z-10 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Pay Securely
                </>
              )}
            </button>
            
            <p className="text-center text-[12px] text-slate-400 mt-4 font-inter relative z-10 flex items-center justify-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Secured by Stripe. 256-bit encryption.
            </p>
          </div>
        </motion.div>
      </form>
    </div>
  );
};

export default PlaceOrder;
