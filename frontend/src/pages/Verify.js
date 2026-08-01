import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const navigate = useNavigate();
    const { url } = useContext(StoreContext);
    const [status, setStatus] = useState('verifying'); // 'verifying' | 'success' | 'failed'

    const verifyPayment = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(`${url}/api/v1/order/verify`, { success, orderId }, { headers: { token } });
            if (response.data.success) {
                setStatus('success');
                setTimeout(() => navigate("/myorders"), 2500);
            } else {
                setStatus('failed');
                setTimeout(() => navigate("/"), 2500);
            }
        } catch (error) {
            console.error("Error verifying payment:", error);
            setStatus('failed');
            setTimeout(() => navigate("/"), 2500);
        }
    }

    useEffect(() => {
        verifyPayment();
    }, []);

    return (
        <div className='w-full min-h-[80vh] flex justify-center items-center bg-surface-50'>
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className='flex flex-col items-center gap-6 text-center px-8 py-16 bg-white rounded-[3rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] border border-slate-100 max-w-md w-full mx-4'
            >
                {status === 'verifying' && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center"
                    >
                        <div className="relative w-24 h-24 mb-8">
                            <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
                            <div className="absolute inset-0 border-4 border-orange-500 rounded-full border-t-transparent animate-spin"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl">🔒</span>
                            </div>
                        </div>
                        <h2 className="text-3xl font-outfit font-bold text-slate-900 mb-2">Verifying Payment</h2>
                        <p className="text-slate-500 font-inter">Please don't close this window.</p>
                    </motion.div>
                )}
                
                {status === 'success' && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center text-4xl mb-8 shadow-inner border border-emerald-200">
                            ✨
                        </div>
                        <h2 className="text-3xl font-outfit font-bold text-emerald-600 mb-2">Payment Successful!</h2>
                        <p className="text-slate-500 font-inter">Redirecting you to your orders...</p>
                    </motion.div>
                )}
                
                {status === 'failed' && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center text-4xl mb-8 shadow-inner border border-rose-200">
                            ✕
                        </div>
                        <h2 className="text-3xl font-outfit font-bold text-rose-600 mb-2">Payment Failed</h2>
                        <p className="text-slate-500 font-inter">Redirecting you to the home page...</p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}

export default Verify;
