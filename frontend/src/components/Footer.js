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
    <footer className='bg-slate-900 text-slate-300 w-full pt-20 pb-10 border-t border-slate-800' id='Contact'>
      <div className='max-w-7xl mx-auto px-6'>
        
        {/* Top Section - Newsletter & Branding */}
        <div className='flex flex-col lg:flex-row justify-between items-start gap-12 pb-16 border-b border-slate-800'>
          <div className='lg:w-1/3'>
            <img src={assets.logo} alt="Yumzy Logo" className='w-40 brightness-0 invert opacity-100 mb-6' />
            <p className='text-slate-400 text-[15px] leading-relaxed mb-8 font-inter'>
              Elevating your dining experience. The world's best food, delivered right to your doorstep with speed, elegance, and uncompromising quality.
            </p>
            
            <div className='flex gap-4'>
              {['twitter_icon', 'facebook_icon', 'linkedin_icon'].map((icon, idx) => (
                <a key={idx} href="#" className='w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1'>
                  {assets[icon] ? (
                    <img src={assets[icon]} alt='Social' className='w-4 h-4 brightness-0 invert' />
                  ) : (
                    <div className='w-4 h-4 bg-white/50 rounded-full'></div>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className='lg:w-1/3 bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50'>
            <h3 className='text-white font-outfit text-xl font-semibold mb-3'>Subscribe to our newsletter</h3>
            <p className='text-slate-400 text-sm mb-6 font-inter'>Get exclusive offers, recipe tips, and first access to new premium restaurants.</p>
            <form className='flex gap-2' onSubmit={handleSubscribe}>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className='w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors text-white placeholder-slate-500'
              />
              <button type="submit" className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium transition-colors'>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-slate-800'>
          <div className='flex flex-col gap-5'>
            <h4 className='text-white font-outfit font-semibold text-lg tracking-wide'>Company</h4>
            <div className='flex flex-col gap-4 font-inter text-[15px]'>
              <Link to="/about" className='text-slate-400 hover:text-orange-500 transition-colors w-max'>About Us</Link>
            </div>
          </div>

          <div className='flex flex-col gap-5'>
            <h4 className='text-white font-outfit font-semibold text-lg tracking-wide'>Discover</h4>
            <div className='flex flex-col gap-4 font-inter text-[15px]'>
              <Link to="/menu" className='text-slate-400 hover:text-orange-500 transition-colors w-max'>Our Menu</Link>
            </div>
          </div>

          <div className='flex flex-col gap-5'>
            <h4 className='text-white font-outfit font-semibold text-lg tracking-wide'>Support</h4>
            <div className='flex flex-col gap-4 font-inter text-[15px]'>
              <Link to="/contact" className='text-slate-400 hover:text-orange-500 transition-colors w-max'>Contact Us</Link>
              <Link to="/myorders" className='text-slate-400 hover:text-orange-500 transition-colors w-max'>Track Order</Link>
            </div>
          </div>

          <div className='flex flex-col gap-5'>
            <h4 className='text-white font-outfit font-semibold text-lg tracking-wide'>Legal</h4>
            <div className='flex flex-col gap-4 font-inter text-[15px]'>
              <Link to="/terms" className='text-slate-400 hover:text-orange-500 transition-colors w-max'>Terms of Service</Link>
              <Link to="/privacy" className='text-slate-400 hover:text-orange-500 transition-colors w-max'>Privacy Policy</Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-slate-500 text-sm font-inter'>
            © {new Date().getFullYear()} Yumzy Technologies Inc. All rights reserved.
          </p>
          <div className='flex items-center gap-6'>
            <p className='text-slate-400 text-sm flex items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-green-500'></span>
              All systems operational
            </p>
            <div className='flex gap-3 opacity-50 grayscale'>
              <div className='w-10 h-6 bg-slate-200 rounded flex items-center justify-center text-[10px] text-slate-800 font-bold'>VISA</div>
              <div className='w-10 h-6 bg-slate-200 rounded flex items-center justify-center text-[10px] text-slate-800 font-bold'>STRIPE</div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer;
