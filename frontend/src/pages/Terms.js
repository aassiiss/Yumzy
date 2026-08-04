import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
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
    <div className="min-h-screen pt-32 pb-24 bg-surface-50">
      
      <div className="max-w-[800px] mx-auto px-6 lg:px-8">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="mb-16"
        >
          <motion.span variants={fadeInUp} className="text-[12px] font-inter font-medium text-surface-500 uppercase tracking-wider mb-4 block">
            Legal
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-[40px] md:text-[56px] font-outfit font-medium text-surface-900 tracking-tight mb-6 leading-[1.1]">
            Terms of Service
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-surface-500 font-inter text-lg leading-relaxed font-light">
            These terms govern your use of the Yumzy platform and services.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex gap-6 mt-6 border-t border-surface-200/60 pt-6 text-[13px] font-inter text-surface-500">
            <span>Last updated: August 1, 2026</span>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
          }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-surface-200/60 shadow-sm space-y-12"
        >
          {sections.map((section, idx) => (
            <motion.section key={idx} variants={fadeInUp} className="group">
              <h2 className="text-[20px] font-outfit font-medium text-surface-900 mb-4 tracking-tight">
                {section.title}
              </h2>
              <p className="text-surface-600 font-inter text-[15px] leading-relaxed">
                {section.content}
              </p>
            </motion.section>
          ))}
          
          <motion.section variants={fadeInUp} className="pt-8 border-t border-surface-200/60">
            <h2 className="text-[20px] font-outfit font-medium text-surface-900 mb-4 tracking-tight">
              Questions?
            </h2>
            <p className="text-surface-600 font-inter text-[15px] leading-relaxed">
              If you have any questions about these Terms, please contact us at <a href="mailto:legal@yumzy.com" className="text-surface-900 font-medium hover:underline">legal@yumzy.com</a>.
            </p>
          </motion.section>
        </motion.div>

      </div>
    </div>
  );
};

export default Terms;
