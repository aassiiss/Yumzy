import React from 'react';
import { motion } from 'framer-motion';

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      'When you use Yumzy, we collect the following types of information:',
      '**Personal Information:** Name, email address, phone number, and delivery address when you create an account or place an order.',
      '**Payment Information:** We use Stripe for secure payment processing. We never store your full card details on our servers.',
      '**Usage Data:** Pages visited, features used, time spent on the app, device type, browser type, and IP address.',
      '**Location Data:** With your permission, we collect real-time location data to enable accurate delivery tracking and suggestions.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'We use collected information to:',
      '• Process and deliver your food orders accurately and on time.',
      '• Send order confirmations, delivery updates, and receipts.',
      '• Provide personalized food recommendations using AI.',
      '• Improve our platform, features, and user experience.',
      '• Detect and prevent fraud, abuse, or security incidents.',
      '• Comply with legal obligations and resolve disputes.',
    ],
  },
  {
    title: '3. Sharing of Information',
    content: [
      'Yumzy does not sell your personal data. We share your information only in the following circumstances:',
      '**Delivery Partners:** Your name, address, and phone number are shared with our delivery partners to fulfill your order.',
      '**Payment Processors:** We use Stripe to process payments securely. Stripe\'s privacy policy governs their use of your data.',
      '**Legal Requirements:** We may disclose information if required by law, court order, or government authority.',
      '**Business Transfers:** In the event of a merger or acquisition, your data may be transferred to the new entity.',
    ],
  },
  {
    title: '4. Cookies and Tracking Technologies',
    content: [
      'We use cookies and similar technologies to enhance your experience:',
      '**Essential Cookies:** Required for basic functionality such as login sessions and cart management.',
      '**Analytics Cookies:** Help us understand how users interact with our platform (e.g., Google Analytics).',
      '**Preference Cookies:** Remember your settings such as language, location, and dietary preferences.',
      'You can control cookies through your browser settings. Disabling cookies may affect some features.',
    ],
  },
  {
    title: '5. Data Security',
    content: [
      'We implement industry-leading security measures to protect your information:',
      '• All data is encrypted in transit using TLS 1.3 and at rest using AES-256.',
      '• Regular security audits and penetration testing are conducted.',
      '• Access to personal data is strictly limited to authorized personnel.',
      '• Our systems are monitored 24/7 for suspicious activity.',
      'However, no system is 100% secure. We encourage you to use a strong password and keep it confidential.',
    ],
  },
  {
    title: '6. Data Retention',
    content: [
      'We retain your personal information for as long as your account is active or as needed to provide services. Specifically:',
      '• Account data is retained for 5 years after account deletion for legal compliance.',
      '• Order history is retained for 3 years for warranty and dispute resolution.',
      '• Payment records are retained for 7 years as required by Indian financial regulations.',
    ],
  },
  {
    title: '7. Your Rights',
    content: [
      'As a Yumzy user, you have the following rights regarding your personal data:',
      '**Access:** Request a copy of all personal data we hold about you.',
      '**Correction:** Request correction of inaccurate or incomplete data.',
      '**Deletion:** Request deletion of your account and associated data (subject to legal retention requirements).',
      '**Portability:** Request your data in a machine-readable format.',
      '**Opt-Out:** Unsubscribe from marketing emails at any time via the unsubscribe link.',
      'To exercise these rights, contact us at yumzy0000@gmail.com.',
    ],
  },
  {
    title: '8. Children\'s Privacy',
    content: [
      'Yumzy is not directed at children under the age of 13. We do not knowingly collect personal information from children. If we discover that a child under 13 has provided us with personal information, we will delete it immediately.',
      'If you are a parent and believe your child has provided us with personal data, please contact us at yumzy0000@gmail.com.',
    ],
  },
  {
    title: '9. Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. When we make significant changes, we will:',
      '• Notify you via email or in-app notification.',
      '• Update the "Last Updated" date at the top of this page.',
      '• Provide a 30-day notice period before major changes take effect.',
      'Continued use of Yumzy after changes constitutes acceptance of the updated policy.',
    ],
  },
  {
    title: '10. Contact Us',
    content: [
      'If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out:',
      '**Email:** yumzy0000@gmail.com',
      '**Phone:** +91 9241332445',
      '**Address:** Yumzy Technologies Pvt. Ltd., Mumbai, Maharashtra, India',
      'We aim to respond to all privacy-related inquiries within 48 hours.',
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Privacy = () => {
  return (
    <div className='bg-surface-50 min-h-screen pt-32 pb-24 relative overflow-hidden'>
      {/* Hero */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="px-6 lg:px-8 max-w-[1000px] mx-auto text-center mb-24 relative z-10"
      >
        <motion.span variants={fadeInUp} className="inline-block bg-white border border-slate-200 text-slate-500 text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest font-outfit mb-6 shadow-sm">
          Legal
        </motion.span>
        <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-outfit font-bold text-slate-900 tracking-tight mb-6">
          Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Policy</span>
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-slate-500 font-inter text-lg leading-relaxed max-w-2xl mx-auto">
          We take your privacy seriously. This document explains exactly what data we collect, how we use it, and what rights you have.
        </motion.p>
        <motion.div variants={staggerContainer} className="flex flex-wrap gap-4 justify-center mt-8 text-[13px] font-inter font-medium text-slate-500">
          <motion.span variants={fadeInUp} className="bg-white rounded-full px-5 py-2 shadow-sm border border-slate-100 flex items-center gap-2">
            <span className="text-lg">📅</span> Last Updated: August 1, 2026
          </motion.span>
          <motion.span variants={fadeInUp} className="bg-white rounded-full px-5 py-2 shadow-sm border border-slate-100 flex items-center gap-2">
            <span className="text-lg">📍</span> Applicable in India
          </motion.span>
          <motion.span variants={fadeInUp} className="bg-white rounded-full px-5 py-2 shadow-sm border border-slate-100 flex items-center gap-2">
            <span className="text-lg">🔒</span> GDPR & IT Act Compliant
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto flex flex-col gap-12 relative z-10">

          {/* Quick Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100"
          >
            <h2 className="text-xl font-outfit font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-2xl">🔍</span> Quick Summary
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: '🛡️', title: 'No Data Selling', desc: 'We never sell your personal information to third parties.' },
                { icon: '🔒', title: 'Encrypted Storage', desc: 'All data is encrypted with AES-256 military-grade security.' },
                { icon: '✨', title: 'Your Control', desc: 'You can access, correct, or delete your data at any time.' },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <p className="font-outfit font-bold text-slate-900 text-lg mb-1">{item.title}</p>
                  <p className="text-slate-500 font-inter text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <p className="text-slate-600 font-inter text-lg leading-relaxed mb-12">
              Welcome to Yumzy. This Privacy Policy describes how Yumzy Technologies Pvt. Ltd. ("Yumzy", "we", "us", or "our") collects, uses, stores, and shares information about you when you use our website, mobile application, or any related services (collectively, the "Platform"). By using Yumzy, you agree to the collection and use of information as described in this policy.
            </p>

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((section, i) => (
                <div key={i} className="group">
                  <h2 className="text-2xl font-outfit font-bold text-slate-900 mb-6 flex items-center gap-4">
                    <span className="w-10 h-10 bg-slate-50 text-orange-500 rounded-xl flex items-center justify-center text-lg shadow-sm border border-slate-100 shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                      {i + 1}
                    </span>
                    {section.title.replace(/^\d+\.\s/, '')}
                  </h2>
                  <div className="flex flex-col gap-4 pl-14">
                    {section.content.map((para, j) => (
                      <p key={j} className="text-slate-600 font-inter text-[15px] leading-relaxed">
                        {para.split('**').map((part, k) =>
                          k % 2 === 1 ? <strong key={k} className="text-slate-900 font-bold">{part}</strong> : part
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 rounded-[3rem] p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
            
            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-white mb-4 relative z-10">Questions? We're Here.</h2>
            <p className="text-slate-400 font-inter text-lg mb-10 max-w-xl mx-auto relative z-10">Our privacy team responds to every inquiry within 48 hours.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a href="mailto:yumzy0000@gmail.com" className="bg-white text-slate-900 font-outfit font-bold px-8 py-4 rounded-full hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                <span className="text-xl">📧</span> yumzy0000@gmail.com
              </a>
              <a href="tel:+919241332445" className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-outfit font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                <span className="text-xl">📞</span> +91 9241332445
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Privacy;
