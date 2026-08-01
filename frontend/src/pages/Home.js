import React, { useContext, useState, useRef } from 'react';
import Header from '../components/Header';
import ExploreMenu from '../components/ExploreMenu';
import FoodDisplay from '../components/FoodDisplay';
import MobileApp from '../components/MobileApp';
import Chatbot from '../components/Chatbot';
import { StoreContext } from '../context/StoreContext';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

// Reusable scroll reveal component
const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─── Stats Bar ─── */
const StatsBar = () => (
  <div className="bg-slate-900 py-12 px-6 border-b border-white/10 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500/5 to-rose-500/5"></div>
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center relative z-10">
      {[
        { value: '50K+', label: 'Happy Customers', icon: '😍' },
        { value: '200+', label: 'Premium Dishes', icon: '🍽️' },
        { value: '28 min', label: 'Avg. Delivery', icon: '⚡' },
        { value: '4.9★', label: 'App Rating', icon: '🌟' },
      ].map((s, i) => (
        <Reveal key={i} delay={i * 0.1} className="flex flex-col items-center gap-2 group">
          <span className="text-4xl group-hover:scale-110 transition-transform">{s.icon}</span>
          <span className="text-4xl md:text-5xl font-outfit font-bold tracking-tight text-white">{s.value}</span>
          <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">{s.label}</span>
        </Reveal>
      ))}
    </div>
  </div>
);

/* ─── Featured Categories ─── */
const FeaturedCategories = () => {
  const categories = [
    { name: 'Biriyani', img: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=600', color: 'from-amber-500/80' },
    { name: 'Burgers', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600', color: 'from-red-500/80' },
    { name: 'Pizza', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600', color: 'from-yellow-600/80' },
    { name: 'Sushi', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=600', color: 'from-blue-600/80' },
    { name: 'Desserts', img: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=600', color: 'from-pink-500/80' },
    { name: 'Salads', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=600', color: 'from-green-600/80' },
  ];
  return (
    <div className="py-24 px-6 bg-surface-50">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 text-[13px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">Trending Now</span>
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 tracking-tight">Most Loved <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Selections</span></h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <Link to="/menu" className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 block h-64">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} via-transparent to-transparent opacity-80`}></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="text-white font-outfit font-bold text-lg tracking-wide">{cat.name}</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── How It Works ─── */
const HowItWorks = () => (
  <div className="py-24 px-6 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
      {/* Left: Image collage */}
      <div className="flex-1 relative h-[600px] w-full hidden lg:block">
        <Reveal className="absolute top-0 left-0 w-[65%] h-[400px] z-10" delay={0.1}>
          <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=700" alt="chef cooking" className="w-full h-full object-cover rounded-3xl shadow-2xl" />
        </Reveal>
        <Reveal className="absolute bottom-0 right-0 w-[60%] h-[350px] z-20" delay={0.3}>
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=500" alt="delivery" className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white" />
        </Reveal>
        
        <Reveal className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30" delay={0.5}>
          <div className="w-32 h-32 bg-orange-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.4)] text-white font-outfit font-bold text-center leading-tight">
            <span className="text-3xl">100%</span><br/><span className="text-sm opacity-80 uppercase tracking-widest">Fresh</span>
          </div>
        </Reveal>
      </div>
      
      {/* Right: Steps */}
      <div className="flex-1 space-y-8 z-10">
        <Reveal>
          <span className="inline-block bg-orange-100 text-orange-600 text-[13px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">Simple Process</span>
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 tracking-tight leading-[1.1]">Seamless experience,<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">pure bliss.</span></h2>
          <p className="text-slate-500 text-lg leading-relaxed mt-4 font-inter">We've made ordering incredibly easy. From craving to your doorstep in just three simple steps.</p>
        </Reveal>
        
        <div className="space-y-6 mt-8">
          {[
            { icon: '🍽️', step: '01', title: 'Choose Your Dish', desc: 'Browse 200+ handcrafted dishes curated by world-class chefs.' },
            { icon: '📍', step: '02', title: 'Set Delivery Details', desc: 'Enter your exact location and track your order in real-time.' },
            { icon: '🚀', step: '03', title: 'Enjoy Fast Delivery', desc: 'Arrives piping hot and ready to eat in under 30 minutes.' },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.2} className="flex gap-6 items-start group p-4 -ml-4 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-3xl shadow-sm group-hover:shadow-md group-hover:border-orange-200 transition-all duration-300">{item.icon}</div>
                <div className="absolute -top-2 -right-2 bg-slate-900 text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-md">{item.step}</div>
              </div>
              <div>
                <h3 className="text-xl font-outfit font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed font-inter">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ─── Why Choose Us ─── */
const WhyUs = () => (
  <div className="py-24 px-6 bg-slate-900 border-t border-white/5 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
    <div className="max-w-7xl mx-auto relative z-10">
      <Reveal className="text-center mb-16">
        <span className="inline-block bg-white/10 text-orange-400 text-[13px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 border border-white/10">Our Promise</span>
        <h2 className="text-4xl md:text-5xl font-outfit font-bold text-white tracking-tight">Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">Thousands</span> Choose Us</h2>
      </Reveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: '⚡', title: 'Lightning Delivery', desc: 'Average delivery time: 28 minutes. Guaranteed fresh or your money back.' },
          { icon: '👨‍🍳', title: 'World-Class Chefs', desc: 'Every chef on our platform is certified in international cuisines.' },
          { icon: '💎', title: 'Premium Quality', desc: 'We source only organic, locally grown produce for maximum flavor.' },
          { icon: '📱', title: 'Live Order Tracking', desc: 'Full transparency from our kitchen to your exact location.' },
          { icon: '🔒', title: 'Secure Payments', desc: 'Bank-grade 256-bit encryption. Your data is always protected.' },
          { icon: '🌟', title: '24/7 Live Support', desc: 'Human support team available around the clock. No bots.' },
        ].map((item, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="group h-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm cursor-pointer">
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-inner border border-white/5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-outfit font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">{item.title}</h3>
              <p className="text-slate-400 text-[15px] leading-relaxed font-inter">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </div>
);

/* ─── Full-Width Feature Banner ─── */
const FeatureBanner = () => (
  <div className="relative h-[600px] overflow-hidden flex items-center">
    <motion.img 
      initial={{ scale: 1.1 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=90&w=1920" 
      alt="restaurant" 
      className="absolute inset-0 w-full h-full object-cover" 
    />
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
    <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
      <Reveal className="max-w-2xl">
        <span className="inline-block bg-orange-500/20 border border-orange-500/30 text-orange-400 text-[13px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">Curated for You</span>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold text-white leading-[1.1] tracking-tight mb-6">
          Restaurant Quality,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">At Home Comfort.</span>
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-10 font-inter font-light">
          Our partner chefs prepare each order using the exact same techniques and premium ingredients found in award-winning restaurants. Zero compromise, maximum flavor.
        </p>
        <Link to="/menu" className="inline-flex bg-orange-500 text-white font-semibold text-[15px] px-8 py-4 rounded-full shadow-[0_10px_30px_-10px_rgba(249,115,22,0.8)] hover:shadow-[0_15px_40px_-10px_rgba(249,115,22,0.9)] hover:-translate-y-1 transition-all duration-300">
          Explore the Menu
        </Link>
      </Reveal>
    </div>
  </div>
);

/* ─── Testimonials ─── */
const Testimonials = () => (
  <div className="py-24 px-6 bg-surface-50">
    <div className="max-w-7xl mx-auto">
      <Reveal className="text-center mb-16">
        <span className="inline-block bg-orange-100 text-orange-600 text-[13px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">Real Reviews</span>
        <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 tracking-tight">Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Thousands</span></h2>
      </Reveal>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: 'Arjun Sharma', role: 'Food Blogger', text: 'Yumzy is in a league of its own. The Truffle Glazed Burger changed my life. I order 4 times a week and it\'s consistently perfect.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100' },
          { name: 'Priya Mehta', role: 'Product Manager', text: 'As someone who values design and food quality, Yumzy hits every mark. The app is gorgeous, and the food always arrives hotter than I expect.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100' },
          { name: 'Rohit Nair', role: 'Software Engineer', text: '28-minute delivery, always piping hot, portion sizes are massive. Nothing else compares. Worth every single rupee. Highly recommended!', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100' },
        ].map((t, i) => (
          <Reveal key={i} delay={i * 0.2}>
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity text-6xl text-slate-900 font-serif">"</div>
              <div className="flex gap-1 text-orange-400 mb-6">
                {[...Array(5)].map((_, idx) => <svg key={idx} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)}
              </div>
              <p className="text-slate-600 text-[15px] leading-relaxed flex-1 font-inter italic relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-100 relative z-10">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                <div>
                  <p className="font-outfit font-bold text-slate-900">{t.name}</p>
                  <p className="text-slate-500 text-xs font-inter">{t.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </div>
);

/* ─── CTA Banner ─── */
const CTABanner = () => (
  <Reveal>
    <div className="mx-6 max-w-7xl lg:mx-auto my-24 rounded-[2.5rem] overflow-hidden relative shadow-2xl" style={{ background: 'linear-gradient(135deg, #f97316 0%, #e11d48 100%)' }}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[80px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="relative z-10 py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div className="text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold tracking-tight leading-[1.1] mb-4">
            Hungry? Let's Fix That.
          </h2>
          <p className="text-white/90 text-lg md:text-xl font-inter font-light max-w-xl mb-6">
            Your first premium meal is on us. Enjoy a free delivery on your first order.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
            <span className="text-white/90 text-[13px] font-medium uppercase tracking-wider">Promo Code</span>
            <span className="font-outfit font-bold text-yellow-300 text-xl tracking-widest border-l border-white/20 pl-3">YUMZY10</span>
          </div>
        </div>
        <Link to="/menu" className="flex-shrink-0 bg-white text-orange-600 font-outfit font-bold text-[17px] px-10 py-5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300">
          Order Now
        </Link>
      </div>
    </div>
  </Reveal>
);

/* ─── Main Home ─── */
const Home = () => {
  const [category, setCategory] = useState('All');
  const { token } = useContext(StoreContext);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-surface-50"
    >
      <Header />
      <StatsBar />
      <FeaturedCategories />
      <HowItWorks />
      
      {/* Menu Section wrapper */}
      <div className='bg-surface-50 relative z-10 rounded-t-[3rem] -mt-8 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] pt-8'>
        <div className='max-w-7xl mx-auto'>
          <ExploreMenu category={category} setCategory={setCategory} />
          <div className="px-6 pb-24">
            <FoodDisplay category={category} />
          </div>
        </div>
      </div>

      <WhyUs />
      <FeatureBanner />
      <Testimonials />
      <CTABanner />
      
      <div className='bg-surface-50'>
        <MobileApp />
      </div>
      
      {token && <Chatbot />}
    </motion.div>
  );
};

export default Home;