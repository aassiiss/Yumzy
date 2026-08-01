import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using Yumzy's platform, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using Yumzy's particular services, you shall be subject to any posted guidelines or rules applicable to such services."
    },
    {
      title: "2. Premium Service Commitment",
      content: "Yumzy is committed to delivering a premium culinary experience. We guarantee that all partner restaurants meet our rigorous 12-point quality inspection. However, we are not responsible for subjective dissatisfaction with taste or personal preferences."
    },
    {
      title: "3. User Accounts and Security",
      content: "To use certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete."
    },
    {
      title: "4. Pricing and Payments",
      content: "All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise. Delivery fees and platform fees are calculated at checkout. We use industry-standard encryption to ensure your payment details are secure."
    },
    {
      title: "5. Cancellation and Refunds",
      content: "Orders can only be cancelled before the restaurant begins preparation. Once preparation has started, the order cannot be cancelled and is not eligible for a refund. In cases of delayed delivery beyond our guaranteed window, you may be eligible for Yumzy Credits."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-white relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="mb-16 text-center"
        >
          <motion.span variants={fadeInUp} className="inline-block bg-slate-50 border border-slate-200 text-slate-500 text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest font-outfit mb-6">
            Legal & Compliance
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 tracking-tight mb-6">
            Terms of Service
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-slate-500 font-inter text-[15px]">
            Last updated: August 1, 2026
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
          }}
          className="space-y-12"
        >
          {sections.map((section, idx) => (
            <motion.section key={idx} variants={fadeInUp} className="group">
              <h2 className="text-xl font-outfit font-bold text-slate-900 mb-4 group-hover:text-orange-500 transition-colors">
                {section.title}
              </h2>
              <p className="text-slate-600 font-inter text-[15px] leading-relaxed">
                {section.content}
              </p>
            </motion.section>
          ))}
          
          <motion.section variants={fadeInUp} className="pt-8 border-t border-slate-100">
            <h2 className="text-xl font-outfit font-bold text-slate-900 mb-4">
              Questions?
            </h2>
            <p className="text-slate-600 font-inter text-[15px] leading-relaxed">
              If you have any questions about these Terms, please contact us at <a href="mailto:legal@yumzy.com" className="text-orange-500 font-medium hover:underline">legal@yumzy.com</a>.
            </p>
          </motion.section>
        </motion.div>

      </div>
    </div>
  );
};

export default Terms;
