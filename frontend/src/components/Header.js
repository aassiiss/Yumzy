import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className='relative w-full h-[95vh] min-h-[700px] overflow-hidden flex items-center group bg-slate-900'>
      {/* Background Image with Parallax feel */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=90&w=1920)` }}
      ></motion.div>

      {/* Premium Multi-layer gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent'></div>
      <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80'></div>

      {/* Content */}
      <div className='relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full pt-16'>
        <div className='max-w-[700px] flex flex-col gap-8'>
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-orange-400 font-medium text-sm w-max shadow-glass"
          >
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(249,115,22,1)]"></span>
            Premium Culinary Experience
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-6xl md:text-7xl lg:text-8xl font-outfit font-bold text-white leading-[1.05] tracking-tight'
          >
            Taste the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">
              Extraordinary
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-slate-300 text-lg md:text-xl font-inter font-light max-w-[540px] leading-relaxed"
          >
            Chef-crafted meals. Lightning-fast delivery. Unforgettable flavors — delivered straight to your door in under 30 minutes.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 mt-2"
          >
            <Link to="/menu" className="bg-orange-500 text-white rounded-full px-8 py-4 font-semibold text-[15px] shadow-[0_10px_30px_-10px_rgba(249,115,22,0.8)] hover:shadow-[0_15px_40px_-10px_rgba(249,115,22,0.9)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
              Explore Menu 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
            <Link to="/about" className="bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full px-8 py-4 font-semibold text-[15px] hover:bg-white/20 transition-all duration-300">
              Our Story
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex items-center gap-6 mt-8 border-t border-white/10 pt-8"
          >
            <div className="flex -space-x-4">
              {['https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80', 
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80', 
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80', 
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'].map((img, i) => (
                <img key={i} src={img} alt="Customer" className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover" />
              ))}
            </div>
            <div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
              </div>
              <p className="text-slate-300 text-sm font-medium font-inter">Trusted by 50,000+ food lovers</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating stats card */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden xl:block pr-12"
      >
        <div className="grid gap-4">
          {[
            { icon: '🚀', label: 'Avg Delivery', value: '28 min' },
            { icon: '👨‍🍳', label: 'Expert Chefs', value: '50+' },
            { icon: '🌟', label: 'Premium Dishes', value: '200+' },
          ].map((s, i) => (
            <motion.div 
              whileHover={{ scale: 1.05, x: -10 }}
              key={i} 
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-5 text-white flex items-center gap-4 w-64 shadow-glass cursor-pointer"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl border border-white/5">{s.icon}</div>
              <div>
                <div className="font-outfit font-bold text-xl">{s.value}</div>
                <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Header
