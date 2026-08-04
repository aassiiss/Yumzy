import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const inputClass = "w-full bg-surface-50 border border-surface-200 rounded-lg px-4 py-3.5 text-[15px] font-inter focus:outline-none focus:border-surface-400 focus:ring-1 focus:ring-surface-400 transition-all placeholder:text-surface-400 text-surface-900 shadow-inner";

  return (
    <div className="min-h-screen pt-32 pb-24 bg-surface-50">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.h1 variants={fadeInUp} className="text-[40px] md:text-[56px] font-outfit font-medium text-surface-900 tracking-tight mb-6">
            Get in touch
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-surface-500 font-inter text-lg leading-relaxed font-light">
            Whether you have a question about our service, partnerships, or just want to say hi, our team is always ready to help.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Contact Info Cards */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full lg:w-[380px] shrink-0 space-y-6"
          >
            {[
              {
                title: "Headquarters",
                details: ["123 Gourmet Avenue, Cyber City", "Gurugram, Haryana 122002"]
              },
              {
                title: "Email",
                details: ["support@yumzy.com", "partnerships@yumzy.com"]
              },
              {
                title: "Phone",
                details: ["+91 98765 43210", "Mon-Sun, 9am to 10pm"]
              }
            ].map((info, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 border border-surface-200/60 shadow-sm flex items-start flex-col gap-2 group"
              >
                <h3 className="font-outfit font-medium text-surface-900 text-lg mb-1">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-surface-500 font-inter text-[14px] leading-relaxed">{detail}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full bg-white rounded-3xl p-8 md:p-10 border border-surface-200/60 shadow-sm"
          >
            <h2 className="text-2xl font-outfit font-medium text-surface-900 mb-8">Send a message</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" placeholder="First name" className={inputClass} />
                <input type="text" placeholder="Last name" className={inputClass} />
              </div>
              <input type="email" placeholder="Email address" className={inputClass} />
              <input type="text" placeholder="Subject" className={inputClass} />
              <textarea 
                rows={5} 
                placeholder="How can we help?" 
                className={`${inputClass} resize-none`}
              ></textarea>

              <button className="w-full bg-surface-900 text-white font-inter font-medium text-[15px] py-4 rounded-xl hover:bg-surface-800 transition-colors mt-2 shadow-sm">
                Send message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
