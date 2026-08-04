import React from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const inputClass = "w-full bg-surface-50 border border-surface-200 rounded-lg px-4 py-3 text-[14px] font-inter focus:outline-none focus:border-surface-400 focus:ring-1 focus:ring-surface-400 transition-all placeholder:text-surface-400 text-surface-900 shadow-inner";

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
    <div className="min-h-screen pt-32 pb-24 max-w-[1100px] mx-auto px-6 lg:px-8 bg-surface-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-4 mb-10"
      >
        <button 
          onClick={() => navigate('/cart')}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-surface-200 text-surface-500 hover:text-surface-900 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h1 className="text-[32px] md:text-[40px] font-outfit font-medium text-surface-900 tracking-tight">
          Delivery details
        </h1>
      </motion.div>

      <form onSubmit={placeOrderHandler} className="flex flex-col lg:flex-row gap-10">
        {/* Left - Delivery Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 bg-white rounded-3xl p-8 border border-surface-200/60 shadow-sm"
        >
          <h2 className="text-xl font-outfit font-medium text-surface-900 mb-6">Contact & Address</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required type="text" name="firstName" onChange={onChangeHandler} value={data.firstName} placeholder="First name" className={inputClass} />
            <input required type="text" name="lastName" onChange={onChangeHandler} value={data.lastName} placeholder="Last name" className={inputClass} />
            <input required type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder="Email address" className={`md:col-span-2 ${inputClass}`} />
            <input required type="number" name="phoneNumber" onChange={onChangeHandler} value={data.phoneNumber} placeholder="Phone number" className={`md:col-span-2 ${inputClass}`} />
            
            <div className="md:col-span-2 my-2 h-px bg-surface-100"></div>

            <input required type="text" name="city" onChange={onChangeHandler} value={data.city} placeholder="City" className={inputClass} />
            <input required type="text" name="state" onChange={onChangeHandler} value={data.state} placeholder="State / Province" className={inputClass} />
            <input required type="number" name="pinCode" onChange={onChangeHandler} value={data.pinCode} placeholder="ZIP / Postal Code" className={inputClass} />
            <input required type="text" name="country" onChange={onChangeHandler} value={data.country} placeholder="Country" className={inputClass} />
          </div>
        </motion.div>

        {/* Right - Order Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-[400px] flex flex-col gap-6 shrink-0"
        >
          <div className="bg-surface-900 rounded-3xl p-8 shadow-xl text-white">
            <h2 className="text-xl font-outfit font-medium mb-6">Order summary</h2>
            
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4 mb-2 max-h-[250px] overflow-y-auto hide-scrollbar">
                {food_list.filter(item => cartItems[item._id] > 0).map(item => (
                  <div key={item._id} className="flex justify-between items-center text-[13px] font-inter">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-surface-800 border border-surface-700">
                        <img src={item.image.startsWith('http') ? item.image : url + "/images/" + item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-surface-300 truncate max-w-[160px]">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-surface-500 font-medium">×{cartItems[item._id]}</span>
                      <span className="font-medium text-white text-right w-12">₹{item.price * cartItems[item._id]}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="h-px bg-surface-800 my-1"></div>
              
              <div className="flex flex-col gap-3 font-inter text-[14px]">
                <div className="flex justify-between text-surface-400">
                  <span>Subtotal</span>
                  <span className="font-medium text-white">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-surface-400">
                  <span>Delivery fee</span>
                  <span className="font-medium text-white">₹{delivery}</span>
                </div>
              </div>
              
              <div className="h-px bg-surface-800 my-1"></div>
              
              <div className="flex justify-between items-center">
                <span className="text-[15px] font-medium text-surface-300">Total</span>
                <span className="text-2xl font-medium font-inter text-white">₹{total}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-8 bg-white text-surface-900 font-inter font-medium text-[15px] py-4 rounded-xl hover:bg-surface-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-surface-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  Pay securely
                </>
              )}
            </button>
            
            <p className="text-center text-[11px] text-surface-500 mt-5 font-inter flex items-center justify-center gap-1.5 uppercase tracking-wide">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Secured by Stripe
            </p>
          </div>
        </motion.div>
      </form>
    </div>
  );
};

export default PlaceOrder;
