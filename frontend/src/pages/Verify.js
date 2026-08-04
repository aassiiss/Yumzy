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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='w-full min-h-[80vh] flex justify-center items-center bg-surface-50'>
            <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className='flex flex-col items-center gap-6 text-center px-8 py-16 bg-white rounded-[2rem] shadow-sm border border-surface-200/60 max-w-md w-full mx-4'
            >
                {status === 'verifying' && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center"
                    >
                        <div className="relative w-20 h-20 mb-8">
                            <div className="absolute inset-0 border-2 border-surface-100 rounded-full"></div>
                            <div className="absolute inset-0 border-2 border-surface-900 rounded-full border-t-transparent animate-spin"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg className="w-6 h-6 text-surface-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-2xl font-outfit font-medium text-surface-900 mb-2 tracking-tight">Verifying payment</h2>
                        <p className="text-surface-500 font-inter text-[14px]">Please don't close this window.</p>
                    </motion.div>
                )}
                
                {status === 'success' && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-8 border border-green-100">
                            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-outfit font-medium text-surface-900 mb-2 tracking-tight">Payment successful</h2>
                        <p className="text-surface-500 font-inter text-[14px]">Redirecting to your orders...</p>
                    </motion.div>
                )}
                
                {status === 'failed' && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-8 border border-red-100">
                            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-outfit font-medium text-surface-900 mb-2 tracking-tight">Payment failed</h2>
                        <p className="text-surface-500 font-inter text-[14px]">Redirecting to home...</p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}

export default Verify;
