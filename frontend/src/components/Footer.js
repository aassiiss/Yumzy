import React, { useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() === '') {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Thanks for subscribing to our newsletter!");
    setEmail('');
  };

  return (
    <footer className='bg-surface-950 text-surface-400 w-full pt-32 pb-12' id='Contact'>
      <div className='max-w-7xl mx-auto px-6'>
        
        {/* Top Section - Newsletter & Branding */}
        <div className='flex flex-col lg:flex-row justify-between items-start gap-16 pb-20 border-b border-surface-800/50'>
          <div className='lg:w-[40%]'>
            <img src={assets.logo} alt="Yumzy Logo" className='w-32 brightness-0 invert opacity-90 mb-8' />
            <p className='text-surface-400 text-[15px] leading-relaxed mb-8 font-inter max-w-sm'>
              Crafting extraordinary culinary experiences. The world's finest dishes delivered with uncompromising speed and elegance.
            </p>
            
            <div className='flex gap-2'>
              {['twitter_icon', 'facebook_icon', 'linkedin_icon'].map((icon, idx) => (
                <a key={idx} href="#/" className='w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-800 text-surface-400 hover:text-white transition-all duration-300'>
                  {assets[icon] ? (
                    <img src={assets[icon]} alt='Social' className='w-4 h-4 brightness-0 invert opacity-70 hover:opacity-100 transition-opacity' />
                  ) : (
                    <div className='w-4 h-4 bg-white/30 rounded-full'></div>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className='lg:w-[45%]'>
            <h3 className='text-white font-outfit text-2xl font-medium mb-3 tracking-tight'>Stay updated</h3>
            <p className='text-surface-400 text-[15px] mb-8 font-inter'>Join our newsletter for exclusive tasting menus and early access to new partner restaurants.</p>
            <form className='flex flex-col sm:flex-row gap-3' onSubmit={handleSubscribe}>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address" 
                className='flex-1 bg-surface-900 border border-surface-800 rounded-xl px-5 py-3.5 text-[15px] font-inter focus:outline-none focus:ring-1 focus:ring-surface-700 transition-all text-white placeholder-surface-500 shadow-inner'
              />
              <button type="submit" className='bg-white text-surface-950 px-8 py-3.5 rounded-xl font-medium font-inter text-[14px] hover:bg-surface-200 transition-colors shadow-premium'>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-12 py-20 border-b border-surface-800/50'>
          <div className='flex flex-col gap-6'>
            <h4 className='text-white font-inter font-medium text-[15px]'>Platform</h4>
            <div className='flex flex-col gap-4 font-inter text-[14px]'>
              <Link to="/menu" className='text-surface-400 hover:text-white transition-colors w-max'>Explore Menu</Link>
              <Link to="/about" className='text-surface-400 hover:text-white transition-colors w-max'>Our Story</Link>
            </div>
          </div>

          <div className='flex flex-col gap-6'>
            <h4 className='text-white font-inter font-medium text-[15px]'>Support</h4>
            <div className='flex flex-col gap-4 font-inter text-[14px]'>
              <Link to="/contact" className='text-surface-400 hover:text-white transition-colors w-max'>Help Center</Link>
              <Link to="/myorders" className='text-surface-400 hover:text-white transition-colors w-max'>Track Order</Link>
            </div>
          </div>

          <div className='flex flex-col gap-6'>
            <h4 className='text-white font-inter font-medium text-[15px]'>Legal</h4>
            <div className='flex flex-col gap-4 font-inter text-[14px]'>
              <Link to="/terms" className='text-surface-400 hover:text-white transition-colors w-max'>Terms of Service</Link>
              <Link to="/privacy" className='text-surface-400 hover:text-white transition-colors w-max'>Privacy Policy</Link>
            </div>
          </div>
          
          <div className='flex flex-col gap-6'>
            <h4 className='text-white font-inter font-medium text-[15px]'>Locations</h4>
            <div className='flex flex-col gap-4 font-inter text-[14px]'>
              <span className='text-surface-500 w-max'>Mumbai</span>
              <span className='text-surface-500 w-max'>Bengaluru</span>
              <span className='text-surface-500 w-max'>Delhi</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='pt-12 flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='flex items-center gap-8'>
            <p className='text-surface-500 text-[13px] font-inter'>
              © {new Date().getFullYear()} Yumzy Inc. All rights reserved.
            </p>
            <div className='hidden md:flex items-center gap-2'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
              </span>
              <span className='text-surface-500 text-[13px] font-inter'>All systems operational</span>
            </div>
          </div>
          <div className='flex items-center gap-4 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500'>
            <div className='w-12 h-7 bg-surface-100 rounded flex items-center justify-center text-[10px] text-surface-900 font-bold'>VISA</div>
            <div className='w-12 h-7 bg-surface-100 rounded flex items-center justify-center text-[10px] text-surface-900 font-bold'>STRIPE</div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer;
