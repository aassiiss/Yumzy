import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { StoreContext } from '../context/StoreContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const statusColors = {
  'Food Processing': 'bg-surface-200 text-surface-700 border-surface-300',
  'Out for Delivery': 'bg-blue-50 text-blue-700 border-blue-200',
  'Delivered': 'bg-green-50 text-green-700 border-green-200',
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
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className='min-h-screen pt-32 pb-24 max-w-[1000px] mx-auto px-6 lg:px-8 bg-surface-50'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between mb-12"
      >
        <h1 className="text-[32px] md:text-[40px] font-outfit font-medium text-surface-900 tracking-tight">
          Order history
        </h1>
        
        <button 
          onClick={fetchOrders}
          className="flex items-center gap-2 text-[13px] font-inter font-medium text-surface-500 hover:text-surface-900 transition-colors bg-white px-4 py-2 rounded-full border border-surface-200 shadow-sm"
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
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 border-2 border-surface-200 rounded-full"></div>
              <div className="absolute inset-0 border-2 border-surface-900 rounded-full border-t-transparent animate-spin"></div>
            </div>
          </motion.div>
        ) : data.length === 0 ? (
          <motion.div 
            key="empty"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl shadow-sm border border-surface-200/50"
          >
            <div className="w-20 h-20 bg-surface-50 rounded-full flex items-center justify-center mb-6 border border-surface-100">
              <svg className="w-8 h-8 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <p className="text-xl font-outfit font-medium text-surface-900 mb-2">No orders yet</p>
            <p className="text-surface-500 font-inter text-[14px] mb-8">When you place an order, it will appear here.</p>
            <button 
              onClick={() => navigate("/menu")} 
              className="bg-surface-900 text-white px-6 py-3 rounded-xl font-inter font-medium text-[14px] hover:bg-surface-800 transition-colors shadow-sm"
            >
              Browse menu
            </button>
          </motion.div>
        ) : (
          <motion.div 
            key="list"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className='flex flex-col gap-4'
          >
            {data.map((order, index) => (
              <motion.div 
                variants={itemVariants}
                key={index} 
                className='bg-white rounded-2xl p-6 shadow-sm border border-surface-200/60 hover:shadow-premium transition-all duration-300 flex flex-col md:flex-row md:items-center gap-6 group'
              >
                <div className="w-12 h-12 bg-surface-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-surface-200">
                  <svg className="w-5 h-5 text-surface-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                
                <div className='flex-1 min-w-0'>
                  <p className='font-inter font-medium text-[15px] text-surface-900 leading-snug truncate mb-1.5'>
                    {order.items.map((item, i) => (
                      i === order.items.length - 1
                        ? `${item.name} ×${item.quantity}`
                        : `${item.name} ×${item.quantity}, `
                    ))}
                  </p>
                  
                  <div className="flex items-center gap-3 font-inter text-[13px] text-surface-500">
                    <span>{order.items.length} {order.items.length === 1 ? 'item' : 'items'}</span>
                    <span className="w-1 h-1 rounded-full bg-surface-300"></span>
                    <span className="font-medium text-surface-900">₹{order.amount}</span>
                    <span className="w-1 h-1 rounded-full bg-surface-300 hidden sm:block"></span>
                    <span className="hidden sm:block">
                      {new Date(order.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-surface-100 pt-4 md:pt-0">
                  <div className={`px-3 py-1.5 rounded-full text-[12px] font-medium border flex items-center gap-2 ${statusColors[order.status] || 'bg-surface-50 text-surface-600 border-surface-200'}`}>
                    {order.status !== 'Delivered' && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-40"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-current"></span>
                      </span>
                    )}
                    {order.status}
                  </div>
                  
                  <button
                    onClick={fetchOrders}
                    className='bg-white border border-surface-200 text-surface-900 text-[13px] font-inter font-medium px-4 py-2 rounded-lg hover:bg-surface-50 transition-colors shrink-0'
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
