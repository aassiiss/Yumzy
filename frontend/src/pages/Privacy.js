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
      '• Provide personalized food recommendations.',
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
      '**Analytics Cookies:** Help us understand how users interact with our platform.',
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
    ],
  },
  {
    title: '6. Contact Us',
    content: [
      'If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out:',
      '**Email:** yumzy0000@gmail.com',
      '**Phone:** +91 9241332445',
      '**Address:** Yumzy Technologies Pvt. Ltd., Mumbai, Maharashtra, India',
    ],
  },
];

const Privacy = () => {
  return (
    <div className='bg-surface-50 min-h-screen pt-32 pb-24'>
      <div className="max-w-[800px] mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-[12px] font-inter font-medium text-surface-500 uppercase tracking-wider mb-4 block">Legal</span>
          <h1 className="text-[40px] md:text-[56px] font-outfit font-medium text-surface-900 tracking-tight mb-6 leading-[1.1]">
            Privacy Policy
          </h1>
          <p className="text-surface-500 font-inter text-lg leading-relaxed font-light">
            We take your privacy seriously. This document explains exactly what data we collect, how we use it, and what rights you have.
          </p>
          <div className="flex gap-6 mt-6 border-t border-surface-200/60 pt-6 text-[13px] font-inter text-surface-500">
            <span>Last updated: August 1, 2026</span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-surface-200/60 shadow-sm"
        >
          <p className="text-surface-600 font-inter text-[15px] leading-relaxed mb-12">
            Welcome to Yumzy. This Privacy Policy describes how Yumzy Technologies Pvt. Ltd. ("Yumzy", "we", "us", or "our") collects, uses, stores, and shares information about you when you use our website, mobile application, or any related services (collectively, the "Platform"). By using Yumzy, you agree to the collection and use of information as described in this policy.
          </p>

          <div className="space-y-12">
            {sections.map((section, i) => (
              <div key={i} className="group">
                <h2 className="text-[20px] font-outfit font-medium text-surface-900 mb-4 tracking-tight">
                  {section.title}
                </h2>
                <div className="flex flex-col gap-4">
                  {section.content.map((para, j) => (
                    <p key={j} className="text-surface-600 font-inter text-[15px] leading-relaxed">
                      {para.split('**').map((part, k) =>
                        k % 2 === 1 ? <strong key={k} className="text-surface-900 font-medium">{part}</strong> : part
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Privacy;
