import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { assets } from '../assets/frontend_assets/assets';

const teamMembers = [
  { name: 'Shreeji Regmi', role: 'Head Chef & Co-founder', img: assets.shreeji, desc: 'Culinary enthusiast and the creative mind behind our diverse, mouth-watering menu selections.' },
  { name: 'Nimish Rauniyar', role: 'CEO', img: assets.nimish, desc: 'Passionate about creating seamless food delivery experiences and leading our product strategy.' },
  { name: 'Aashish Sah', role: 'Operations Director', img: assets.aashish, desc: 'Logistics and operations expert dedicated to ensuring fast, reliable delivery every single time.' },
];

const values = [
  { icon: '🌱', title: 'Sustainably Sourced', desc: 'We partner exclusively with farms that practice responsible, organic, and ethical agriculture. Every ingredient is traceable from field to fork.' },
  { icon: '🤝', title: 'Community First', desc: 'We actively support local chefs, small restaurants, and food artisans — helping them grow while keeping culinary culture alive.' },
  { icon: '✨', title: 'Zero Compromise Quality', desc: 'Every single dish passes a rigorous 12-point quality inspection before it leaves the kitchen. We\'d rather delay than disappoint.' },
  { icon: '💚', title: 'Eco-Friendly Packaging', desc: 'Our packaging is 100% biodegradable, plastic-free, and designed to keep your food at perfect temperature without harming the planet.' },
];

const milestones = [
  { year: '2022', title: 'The Beginning', event: 'Founded in a small Mumbai kitchen with a dream to democratize access to great food. First 100 orders were hand-delivered by the founders themselves.', img: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=600' },
  { year: '2023', title: 'Going Public', event: 'Launched in 5 cities simultaneously. Crossed 10,000 orders in the very first month. Featured in Forbes India\'s "Top Food Startups to Watch."', img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=600' },
  { year: '2024', title: 'Rapid Expansion', event: 'Expanded to 20+ cities, onboarded 200+ premium restaurants and certified chefs. Launched AI-powered food recommendations.', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600' },
  { year: '2026', title: 'The Present', event: 'Now serving 50,000+ customers monthly with a 4.9★ average rating. Named "Best Food Tech Platform" by TechCrunch India.', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const About = () => {
  return (
    <div className='bg-surface-50'>

      {/* ── Hero ── */}
      <div className='relative min-h-[90vh] overflow-hidden flex items-center pt-20'>
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=90&w=1920" 
          alt="restaurant" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

        <div className='relative z-10 px-6 lg:px-8 max-w-[1200px] mx-auto w-full py-20'>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl space-y-8"
          >
            <motion.span variants={fadeInUp} className="inline-block bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest font-outfit">
              Our Story
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-outfit font-bold text-white leading-[1.1] tracking-tight">
              We're On a<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-orange-400 bg-300% animate-gradient">
                Delicious Mission
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-slate-300 text-xl md:text-2xl font-inter leading-relaxed max-w-2xl font-light">
              Yumzy was born from a simple belief — extraordinary food shouldn't be a privilege. We're building the world's most premium food platform.
            </motion.p>
            <motion.div variants={staggerContainer} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {[
                { value: '50K+', label: 'Monthly Customers' },
                { value: '200+', label: 'Gourmet Dishes' },
                { value: '50+', label: 'Expert Chefs' },
                { value: '20+', label: 'Cities Covered' },
              ].map((s, i) => (
                <motion.div variants={fadeInUp} key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-5 text-center border border-white/10 hover:bg-white/10 transition-colors">
                  <p className="text-3xl font-outfit font-bold text-white mb-1">{s.value}</p>
                  <p className="text-slate-400 text-xs font-inter uppercase tracking-wider">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Mission Statement ── */}
      <div className="py-32 px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex-1 space-y-8"
          >
            <motion.span variants={fadeInUp} className="inline-block bg-slate-50 border border-slate-200 text-slate-500 text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest font-outfit">
              Who We Are
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-outfit font-bold text-slate-900 leading-[1.1] tracking-tight">
              More Than Just <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Delivery</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-6 text-slate-500 font-inter text-[17px] leading-relaxed">
              <p>
                We're a team of food lovers, tech builders, and culinary experts united by one goal: to make world-class dining accessible to everyone, everywhere. We don't just deliver food — we deliver experiences.
              </p>
              <p>
                Every chef on our platform is personally vetted. Every ingredient is freshness-guaranteed. Every delivery is a promise we keep. That's the Yumzy standard — and we never lower it.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="pt-6">
              <Link to="/menu" className="inline-flex items-center gap-2 bg-slate-900 text-white font-outfit font-bold px-10 py-4 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300">
                Explore Menu
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex-1 grid grid-cols-2 gap-6 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-rose-500/10 rounded-[3rem] blur-3xl -z-10"></div>
            <img src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?auto=format&fit=crop&q=80&w=500" alt="chef" className="rounded-[2rem] h-72 w-full object-cover shadow-xl hover:-translate-y-2 transition-transform duration-500" />
            <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=500" alt="salad" className="rounded-[2rem] h-72 w-full object-cover shadow-xl hover:-translate-y-2 transition-transform duration-500 mt-12" />
            <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=500" alt="pizza" className="rounded-[2rem] h-72 w-full object-cover shadow-xl hover:-translate-y-2 transition-transform duration-500 -mt-12" />
            <img src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=500" alt="biryani" className="rounded-[2rem] h-72 w-full object-cover shadow-xl hover:-translate-y-2 transition-transform duration-500" />
          </motion.div>
        </div>
      </div>

      {/* ── Our Values ── */}
      <div className="py-32 px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.span variants={fadeInUp} className="inline-block bg-white/5 border border-white/10 text-slate-300 text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest font-outfit mb-6">
              What We Stand For
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-outfit font-bold text-white tracking-tight">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">Values</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-400 mt-6 max-w-2xl mx-auto font-inter text-lg font-light">
              Principles that guide every meal we make and every delivery we complete.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v, i) => (
              <motion.div 
                variants={fadeInUp}
                key={i} 
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {v.icon}
                </div>
                <h3 className="font-outfit font-bold text-white text-xl mb-4">{v.title}</h3>
                <p className="text-slate-400 font-inter text-[15px] leading-relaxed font-light">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Our Journey ── */}
      <div className="py-32 px-6 lg:px-8 bg-surface-50">
        <div className="max-w-[1200px] mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.span variants={fadeInUp} className="inline-block bg-slate-200/50 border border-slate-200 text-slate-500 text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest font-outfit mb-6">
              Timeline
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-outfit font-bold text-slate-900 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Journey</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-500 mt-6 max-w-2xl mx-auto font-inter text-lg">
              From a small Mumbai kitchen to a nationwide culinary movement.
            </motion.p>
          </motion.div>
          
          <div className="flex flex-col gap-16">
            {milestones.map((m, i) => (
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                key={i} 
                className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <motion.div variants={fadeInUp} className="flex-1 relative rounded-[2.5rem] overflow-hidden shadow-2xl group h-[400px] w-full">
                  <img src={m.img} alt={m.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <span className="bg-white/20 backdrop-blur-md text-white font-outfit font-bold text-xl px-6 py-3 rounded-xl border border-white/30">{m.year}</span>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex-1 space-y-5 px-4 lg:px-0">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500 font-outfit font-bold text-2xl tracking-tight">
                    {m.year} — {m.title}
                  </span>
                  <p className="text-slate-500 font-inter text-lg leading-relaxed">{m.event}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Meet the Team ── */}
      <div className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.span variants={fadeInUp} className="inline-block bg-slate-50 border border-slate-200 text-slate-500 text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest font-outfit mb-6">
              The People
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-outfit font-bold text-slate-900 tracking-tight">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Team</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-500 mt-6 max-w-2xl mx-auto font-inter text-lg">
              The passionate people behind your favourite food experience.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, i) => (
              <motion.div 
                variants={fadeInUp}
                key={i} 
                className="group bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-premium hover:-translate-y-2 transition-all duration-500"
              >
                <div className="h-[350px] overflow-hidden relative">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-outfit font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-orange-500 font-inter font-medium text-[15px] mb-4">{member.role}</p>
                  <p className="text-slate-500 font-inter text-[15px] leading-relaxed">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[3rem] shadow-2xl"
        >
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=90&w=1920" alt="food spread" className="w-full h-[500px] object-cover" />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
            <h2 className="text-4xl md:text-6xl font-outfit font-bold text-white mb-6 tracking-tight">
              Ready to Taste <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">Extraordinary?</span>
            </h2>
            <p className="text-slate-300 font-inter text-lg md:text-xl mb-10 max-w-2xl font-light">
              Join 50,000+ food lovers who've made Yumzy their go-to for every craving. Your next great meal is just a click away.
            </p>
            <Link to="/menu" className="bg-white text-slate-900 font-outfit font-bold text-lg px-10 py-5 rounded-full shadow-[0_10px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
              Explore Our Menu
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default About;
