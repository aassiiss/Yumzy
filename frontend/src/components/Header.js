import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className='relative w-full h-[95vh] min-h-[700px] overflow-hidden flex items-center bg-surface-950'>
      {/* Background Image with Parallax feel */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className='absolute inset-0 bg-cover bg-center opacity-40'
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=90&w=1920)` }}
      ></motion.div>

      {/* Elegant Gradient overlays */}
      <div className='absolute inset-0 bg-gradient-to-r from-surface-950 via-surface-950/80 to-transparent'></div>
      <div className='absolute inset-0 bg-gradient-to-t from-surface-950 via-transparent to-transparent opacity-90'></div>

      {/* Content */}
      <div className='relative z-10 px-6 max-w-7xl mx-auto w-full pt-20'>
        <div className='max-w-[700px] flex flex-col gap-8'>
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-surface-800 bg-surface-900/50 backdrop-blur-md w-max"
          >
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse-slow"></span>
            <span className="text-surface-300 font-inter text-[12px] font-medium tracking-wide">Yumzy Culinary Delivery</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className='text-[56px] md:text-[72px] lg:text-[84px] font-outfit font-medium text-white leading-[1.05] tracking-tight'
          >
            Exceptional food, <br />
            <span className="text-surface-400">delivered.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-surface-400 text-lg md:text-xl font-inter font-light max-w-[500px] leading-[1.6]"
          >
            Experience restaurant-quality meals prepared by world-class chefs, delivered directly to your door in under 30 minutes.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <Link to="/menu" className="bg-white text-surface-950 rounded-full px-7 py-3.5 font-inter font-medium text-[15px] hover:bg-surface-200 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-premium">
              Order now
            </Link>
            <Link to="/about" className="bg-transparent border border-surface-700 text-white rounded-full px-7 py-3.5 font-inter font-medium text-[15px] hover:bg-surface-800 transition-all duration-300">
              Read our story
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-5 mt-10 pt-8 border-t border-surface-800/50"
          >
            <div className="flex -space-x-3">
              {['https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80', 
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80', 
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80', 
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'].map((img, i) => (
                <img key={i} src={img} alt="Customer" className="w-10 h-10 rounded-full border-[3px] border-surface-950 object-cover" />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
              </div>
              <p className="text-surface-500 text-[13px] font-inter">4.4/5 from 1,000+ reviews</p>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  )
}

export default Header
