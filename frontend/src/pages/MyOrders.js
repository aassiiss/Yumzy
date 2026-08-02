import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import axios from 'axios'
import { StoreContext } from '../context/StoreContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const statusColors = {
  'Food Processing': 'bg-amber-100 text-amber-700 border-amber-200',
  'Out for Delivery': 'bg-blue-100 text-blue-700 border-blue-200',
  'Delivered': 'bg-emerald-100 text-emerald-700 border-emerald-200',
};

const MyOrders = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { url, token } = useContext(StoreContext);
  const navigate = useNavigate();

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await axios.post(url + "/api/v1/order/userorders", {}, { headers: { token } });
      setData(response.data.data.reverse()); // Show newest first
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (token) {
      fetchOrders();
    } else {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, navigate])

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
    <div className='min-h-screen pt-32 pb-24 max-w-[1200px] mx-auto px-6 lg:px-8 bg-surface-50'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Orders</span>
        </h1>
        
        <button 
          onClick={fetchOrders}
          className="flex items-center gap-2 text-[14px] font-inter font-medium text-slate-500 hover:text-orange-500 transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm hover:shadow-md"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Refresh
        </button>
      </motion.div>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div 
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-32"
          >
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-orange-500 rounded-full border-t-transparent animate-spin"></div>
            </div>
            <p className="mt-6 text-slate-500 font-inter text-[15px]">Fetching your orders...</p>
          </motion.div>
        ) : data.length === 0 ? (
          <motion.div 
            key="empty"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center py-32 bg-white rounded-[3rem] shadow-sm border border-slate-100"
          >
            <div className="w-32 h-32 bg-slate-50 rounded-full flex items-center justify-center mb-8">
              <span className="text-6xl opacity-50 grayscale">🧾</span>
            </div>
            <p className="text-3xl font-outfit font-bold text-slate-800 mb-2">No orders yet</p>
            <p className="text-slate-500 font-inter mb-8">Looks like you haven't placed any orders yet.</p>
            <button 
              onClick={() => navigate("/menu")} 
              className="bg-slate-900 text-white px-8 py-4 rounded-full font-outfit font-bold text-[15px] shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              Start Ordering
            </button>
          </motion.div>
        ) : (
          <motion.div 
            key="list"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className='flex flex-col gap-6'
          >
            {data.map((order, index) => (
              <motion.div 
                variants={itemVariants}
                key={index} 
                className='bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-premium transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6 relative overflow-hidden group'
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-50 to-rose-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-3xl shadow-inner border border-orange-100/50 group-hover:scale-110 transition-transform duration-300">
                  📦
                </div>
                
                <div className='flex-1 min-w-0'>
                  <p className='font-outfit font-bold text-[17px] text-slate-900 leading-relaxed truncate'>
                    {order.items.map((item, i) => (
                      i === order.items.length - 1
                        ? `${item.name} ×${item.quantity}`
                        : `${item.name} ×${item.quantity}, `
                    ))}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 mt-3 font-inter text-[14px]">
                    <span className="flex items-center gap-1.5 text-slate-500 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
                      <span className="text-lg">🛍️</span>
                      {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-900 font-bold bg-orange-50 px-3 py-1 rounded-lg border border-orange-100/50">
                      <span className="text-lg">💰</span>
                      ₹{order.amount}
                    </span>
                    <span className="text-slate-400 text-sm hidden sm:block">
                      {new Date(order.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-row md:flex-col lg:flex-row items-center gap-4 w-full md:w-auto mt-4 md:mt-0 justify-between md:justify-end border-t md:border-t-0 border-slate-100 pt-4 md:pt-0">
                  <div className={`px-4 py-1.5 rounded-full text-[13px] font-bold border flex items-center gap-2 shadow-sm ${statusColors[order.status] || 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                    <span className="relative flex h-2 w-2">
                      {order.status !== 'Delivered' && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-40"></span>
                      )}
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
                    </span>
                    {order.status}
                  </div>
                  
                  <button
                    onClick={fetchOrders}
                    className='bg-slate-900 hover:bg-orange-500 text-white text-[14px] font-outfit font-bold px-6 py-2.5 rounded-xl transition-colors flex-shrink-0 shadow-md hover:shadow-lg'
                  >
                    Track
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MyOrders
