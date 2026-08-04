import React, { useRef } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { motion, useInView } from 'framer-motion'

const MobileApp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className='relative overflow-hidden rounded-[2.5rem] my-24 mx-6 lg:mx-auto max-w-7xl flex flex-col lg:flex-row items-center shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] group bg-white' id='MobileApp' ref={ref}>
      {/* Left - Text */}
      <div className='flex-1 py-20 px-10 md:px-16 relative overflow-hidden h-full flex flex-col justify-center' style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}>
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-rose-500/10 rounded-full blur-[60px] pointer-events-none"></div>
        
        <div className='flex flex-col gap-8 relative z-10'>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className='inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 text-orange-300 text-sm font-medium w-max backdrop-blur-sm'
          >
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
            Coming soon to iOS & Android
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-white font-outfit font-bold text-5xl md:text-6xl leading-[1.1] tracking-tight'
          >
            Take Yumzy<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
              Everywhere
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-slate-300 text-lg leading-relaxed max-w-md font-inter font-light'
          >
            Download the Yumzy app and unlock exclusive app-only deals, live order tracking, one-tap reordering, and AI-powered personalized food recommendations.
          </motion.p>

          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 text-slate-300 text-[15px] font-inter mt-2"
          >
            {[
              { icon: '🎁', text: 'Exclusive app-only discounts' },
              { icon: '📍', text: 'Real-time GPS order tracking' },
              { icon: '🤖', text: 'AI-powered recommendations' },
              { icon: '⚡', text: 'One-tap reorder your favorites' }
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm">{f.icon}</span>
                {f.text}
              </li>
            ))}
          </motion.ul>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='flex gap-4 flex-wrap mt-6'
          >
            <img src={assets.app_store} alt="App Store" className='h-[52px] hover:-translate-y-1 transition-transform duration-300 cursor-pointer drop-shadow-lg' />
            <img src={assets.play_store} alt='Play Store' className='h-[52px] hover:-translate-y-1 transition-transform duration-300 cursor-pointer drop-shadow-lg' />
          </motion.div>
        </div>
      </div>

      {/* Right - Real Image */}
      <div className='flex-1 h-[400px] lg:h-[700px] w-full overflow-hidden'>
        <motion.img
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=90&w=800"
          alt="Delicious food"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
        />
      </div>
    </div>
  )
}

export default MobileApp
