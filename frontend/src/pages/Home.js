import React, { useContext, useState, useRef } from 'react';
import Header from '../components/Header';
import ExploreMenu from '../components/ExploreMenu';
import FoodDisplay from '../components/FoodDisplay';
import MobileApp from '../components/MobileApp';
import Chatbot from '../components/Chatbot';
import { StoreContext } from '../context/StoreContext';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─── Stats Bar ─── */
const StatsBar = () => (
  <div className="bg-surface-50 py-20 px-6 border-b border-surface-200/50">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
      {[
        { value: '5000+', label: 'Deliveries' },
        { value: '20+', label: 'Partner Chefs' },
        { value: '24m', label: 'Average Time' },
        { value: '4.4', label: 'App Rating' },
      ].map((s, i) => (
        <Reveal key={i} delay={i * 0.1} className="flex flex-col items-center gap-2">
          <span className="text-4xl md:text-5xl font-outfit font-medium text-surface-900 tracking-tight">{s.value}</span>
          <span className="text-surface-500 text-[13px] font-inter uppercase tracking-[0.2em]">{s.label}</span>
        </Reveal>
      ))}
    </div>
  </div>
);

/* ─── Featured Categories ─── */
const FeaturedCategories = () => {
  const categories = [
    { name: 'Artisan Pizza', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600' },
    { name: 'Fresh Sushi', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=600' },
    { name: 'Healthy Bowls', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=600' },
    { name: 'Gourmet Burgers', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600' },
  ];
  return (
    <div className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[40px] md:text-[56px] font-outfit font-medium text-surface-900 leading-[1.1] tracking-tight">
              Curated collections
            </h2>
          </div>
          <Link to="/menu" className="text-[15px] font-inter font-medium text-surface-500 hover:text-surface-900 transition-colors flex items-center gap-2 group">
            View all categories
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <Link to="/menu" className="group block relative rounded-2xl overflow-hidden aspect-[4/5] bg-surface-100">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-surface-950/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-white font-outfit text-xl font-medium tracking-wide">{cat.name}</div>
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
  <div className="py-32 px-6 bg-surface-50 border-t border-surface-200/50">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
      <div className="flex-1 space-y-10">
        <Reveal>
          <h2 className="text-[40px] md:text-[56px] font-outfit font-medium text-surface-900 tracking-tight leading-[1.1]">
            Seamless delivery.<br />Zero friction.
          </h2>
          <p className="text-surface-500 text-lg leading-[1.6] mt-6 font-inter max-w-md">
            We engineered our entire process to ensure your food arrives exactly as the chef intended. Hot, fresh, and perfectly presented.
          </p>
        </Reveal>
        
        <div className="space-y-8 pt-4">
          {[
            { step: '01', title: 'Curated selection', desc: 'Browse menus from vetted, high-end partner restaurants.' },
            { step: '02', title: 'Precision preparation', desc: 'Orders are timed perfectly with our dispatch system.' },
            { step: '03', title: 'Direct delivery', desc: 'Direct-to-door routing ensures your meal arrives at peak quality.' },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.15} className="flex gap-6 items-start group">
              <div className="text-surface-300 font-outfit text-2xl font-medium pt-1">{item.step}</div>
              <div>
                <h3 className="text-lg font-inter font-medium text-surface-900 mb-2">{item.title}</h3>
                <p className="text-surface-500 text-[15px] leading-relaxed font-inter max-w-sm">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      
      <div className="flex-1 relative w-full aspect-square hidden lg:block rounded-3xl overflow-hidden bg-surface-200">
        <Reveal delay={0.2} className="w-full h-full">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800" alt="delivery" className="w-full h-full object-cover" />
        </Reveal>
      </div>
    </div>
  </div>
);

/* ─── Feature Banner ─── */
const FeatureBanner = () => (
  <div className="relative h-[80vh] min-h-[600px] overflow-hidden flex items-center bg-surface-950">
    <motion.img 
      initial={{ scale: 1.1 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=90&w=1920" 
      alt="restaurant" 
      className="absolute inset-0 w-full h-full object-cover opacity-60" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/20 to-transparent"></div>
    <div className="relative z-10 px-6 max-w-7xl mx-auto w-full text-center">
      <Reveal className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-[48px] md:text-[64px] lg:text-[72px] font-outfit font-medium text-white leading-[1.05] tracking-tight mb-8">
          The standard for<br />dining at home.
        </h2>
        <p className="text-surface-300 text-lg md:text-xl leading-[1.6] mb-10 font-inter font-light">
          No compromises on quality, presentation, or temperature. Enjoy a true restaurant experience from the comfort of your dining room.
        </p>
        <Link to="/menu" className="bg-white text-surface-950 rounded-full px-8 py-4 font-inter font-medium text-[15px] hover:bg-surface-200 hover:scale-[1.02] transition-all duration-300 shadow-premium">
          Browse the menu
        </Link>
      </Reveal>
    </div>
  </div>
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
      className="bg-white"
    >
      <Header />
      <StatsBar />
      <FeaturedCategories />
      <HowItWorks />
      
      {/* Menu Section wrapper */}
      <div className='bg-surface-50 border-t border-surface-200/50 py-12' id="menu-section">
        <div className='max-w-7xl mx-auto'>
          <ExploreMenu category={category} setCategory={setCategory} />
          <div className="px-6 pb-32">
            <FoodDisplay category={category} />
          </div>
        </div>
      </div>

      <FeatureBanner />
      
      <div className='bg-white border-t border-surface-200/50'>
        <MobileApp />
      </div>
      
      {token && <Chatbot />}
    </motion.div>
  );
};

export default Home;