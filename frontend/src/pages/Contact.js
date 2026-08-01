import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const inputClass = "w-full border border-slate-200 rounded-xl px-4 py-3.5 text-[15px] font-inter focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-slate-50 placeholder:text-slate-400 text-slate-900";

  return (
    <div className="min-h-screen pt-32 pb-24 bg-surface-50 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block bg-white border border-slate-200 text-slate-500 text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest font-outfit mb-6 shadow-sm">
            Get In Touch
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-outfit font-bold text-slate-900 tracking-tight mb-6">
            We'd love to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">hear from you</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-slate-500 font-inter text-lg leading-relaxed">
            Whether you have a question about our food, partnerships, or just want to say hi, our team is always ready to help.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
          
          {/* Contact Info Cards */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full lg:w-[400px] shrink-0 space-y-6"
          >
            {[
              {
                icon: "📍",
                title: "Our Headquarters",
                details: ["123 Gourmet Avenue, Cyber City", "Gurugram, Haryana 122002"]
              },
              {
                icon: "📧",
                title: "Email Us",
                details: ["support@yumzy.com", "partnerships@yumzy.com"]
              },
              {
                icon: "📞",
                title: "Call Us",
                details: ["+91 98765 43210", "Mon-Sun, 9am to 10pm"]
              }
            ].map((info, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex items-start gap-6 hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl border border-slate-100 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-slate-900 text-lg mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-slate-500 font-inter text-[15px]">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <h2 className="text-2xl font-outfit font-bold text-slate-900 mb-8">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-slate-600 font-outfit font-medium text-sm px-1">First Name</label>
                  <input type="text" placeholder="John" className={inputClass} />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-600 font-outfit font-medium text-sm px-1">Last Name</label>
                  <input type="text" placeholder="Doe" className={inputClass} />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-slate-600 font-outfit font-medium text-sm px-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className={inputClass} />
              </div>
              
              <div className="space-y-2">
                <label className="text-slate-600 font-outfit font-medium text-sm px-1">Subject</label>
                <input type="text" placeholder="How can we help?" className={inputClass} />
              </div>
              
              <div className="space-y-2">
                <label className="text-slate-600 font-outfit font-medium text-sm px-1">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Tell us everything..." 
                  className={`${inputClass} resize-none`}
                ></textarea>
              </div>

              <button className="w-full bg-slate-900 text-white font-outfit font-bold text-[16px] py-4 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
