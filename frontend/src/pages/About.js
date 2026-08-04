import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { assets } from '../assets/frontend_assets/assets';

const teamMembers = [
  { name: 'Shreeji Regmi', role: 'Head Chef & Co-founder', img: assets.shreeji, desc: 'Built delivery logistics networks across 3 unicorn startups in South Asia.' },
  { name: 'Nimish Rauniyar', role: 'CEO', img: assets.nimish, desc: 'Former product lead at leading tech firms, scaling consumer experiences to millions.' },
  { name: 'Aashish Sah', role: 'Operations Director', img: assets.aashish, desc: 'Logistics expert dedicated to ensuring fast, reliable delivery every single time.' },
];

const values = [
  { icon: '🌱', title: 'Sustainably Sourced', desc: 'We partner exclusively with farms that practice responsible, organic, and ethical agriculture.' },
  { icon: '🤝', title: 'Community First', desc: 'We actively support local chefs and food artisans, helping them grow sustainably.' },
  { icon: '✨', title: 'Zero Compromise Quality', desc: 'Every dish passes rigorous inspection. We would rather delay than disappoint.' },
  { icon: '💚', title: 'Eco-Friendly Packaging', desc: 'Our packaging is 100% biodegradable and designed to keep food at perfect temperature.' },
];

const milestones = [
  { year: '2022', title: 'The Beginning', event: 'Founded with a mission to democratize access to exceptional food.', img: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=600' },
  { year: '2023', title: 'Expansion', event: 'Launched in 5 cities simultaneously, redefining local delivery standards.', img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=600' },
  { year: '2024', title: 'Scale', event: 'Onboarded 200+ premium restaurants and certified chefs across regions.', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600' },
  { year: '2026', title: 'Present', event: 'Serving millions with an uncompromising focus on quality and speed.', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const About = () => {
  return (
    <div className='bg-surface-50'>

      {/* ── Hero ── */}
      <div className='relative min-h-[85vh] overflow-hidden flex items-center pt-20 bg-surface-950'>
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=90&w=1920" 
          alt="restaurant" 
          className="absolute inset-0 w-full h-full object-cover opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-950 via-surface-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-transparent to-transparent"></div>

        <div className='relative z-10 px-6 max-w-7xl mx-auto w-full py-20'>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl space-y-8"
          >
            <motion.span variants={fadeInUp} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-surface-800 bg-surface-900/50 backdrop-blur-md w-max text-surface-300 font-inter text-[12px] font-medium tracking-wide">
              Our Story
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-[56px] md:text-[72px] font-outfit font-medium text-white leading-[1.05] tracking-tight">
              A standard of <br />
              <span className="text-surface-400">excellence.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-surface-400 text-lg md:text-xl font-inter leading-[1.6] max-w-lg font-light">
              Yumzy was built to solve a simple problem: dining at home should feel just as premium as dining out.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* ── Mission Statement ── */}
      <div className="py-32 px-6 bg-white border-t border-surface-200/50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex-1 space-y-8"
          >
            <motion.h2 variants={fadeInUp} className="text-[40px] md:text-[48px] font-outfit font-medium text-surface-900 leading-[1.1] tracking-tight">
              Engineering the<br/>perfect meal.
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-6 text-surface-500 font-inter text-[16px] leading-[1.7] max-w-lg">
              <p>
                We're a team of engineers, designers, and culinary experts united by one goal: to remove the friction between you and great food.
              </p>
              <p>
                Every chef on our platform is personally vetted. Every ingredient is freshness-guaranteed. Every delivery is a promise we keep.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex-1 grid grid-cols-2 gap-4"
          >
            <img src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?auto=format&fit=crop&q=80&w=500" alt="chef" className="rounded-2xl h-64 w-full object-cover bg-surface-100" />
            <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=500" alt="salad" className="rounded-2xl h-64 w-full object-cover bg-surface-100 mt-8" />
          </motion.div>
        </div>
      </div>

      {/* ── Meet the Team ── */}
      <div className="py-32 px-6 bg-surface-50 border-t border-surface-200/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20 max-w-2xl"
          >
            <motion.h2 variants={fadeInUp} className="text-[40px] md:text-[48px] font-outfit font-medium text-surface-900 tracking-tight">
              Leadership
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-surface-500 mt-4 font-inter text-[16px] leading-relaxed">
              The team driving the future of culinary delivery.
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
                className="group flex flex-col"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-200 mb-6 border border-surface-200/50">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1] grayscale hover:grayscale-0" />
                </div>
                <h3 className="text-xl font-outfit font-medium text-surface-900 mb-1">{member.name}</h3>
                <p className="text-surface-500 font-inter text-[13px] uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-surface-600 font-inter text-[14px] leading-[1.6] max-w-sm">{member.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-surface-950 py-32 px-6 text-center border-t border-surface-800">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-[40px] md:text-[56px] font-outfit font-medium text-white mb-6 tracking-tight leading-[1.1]">
            Experience the<br />difference.
          </h2>
          <p className="text-surface-400 font-inter text-[16px] mb-10 leading-relaxed font-light">
            Join thousands of users who have elevated their daily dining.
          </p>
          <Link to="/menu" className="bg-white text-surface-950 font-inter font-medium text-[15px] px-8 py-4 rounded-full hover:bg-surface-200 hover:scale-[1.02] transition-all duration-300 shadow-premium">
            Explore the menu
          </Link>
        </motion.div>
      </div>

    </div>
  );
};

export default About;
