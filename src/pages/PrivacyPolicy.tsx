import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Data Protection",
      content: "Your trading data is your most valuable asset. We use industry-standard encryption to ensure that your logs, strategies, and performance metrics are protected at all times."
    },
    {
      icon: <Lock className="w-6 h-6 text-emerald-600" />,
      title: "Security First",
      content: "We implement multi-layered security protocols, including secure server environments and regular security audits, to prevent unauthorized access to your personal information."
    },
    {
      icon: <Eye className="w-6 h-6 text-purple-600" />,
      title: "Privacy Commitment",
      content: "We will never sell your personal data or trading history to third parties. Your information is used solely to provide and improve our services to you."
    },
    {
      icon: <FileText className="w-6 h-6 text-orange-600" />,
      title: "Transparency",
      content: "We are committed to being transparent about the data we collect and how it's used. You have full control over your data and can request deletion at any time."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Your Data Security is Our Priority</title>
        <meta name="description" content="Read our privacy policy to understand how we protect your trading data and personal information. We're committed to transparency and security." />
        <link rel="canonical" href="https://sameer-999.github.io/Trading-Journal-AI/#/privacy" />
      </Helmet>
      <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            Last updated: April 4, 2026. Your privacy is important to us. This policy explains 
            how we collect, use, and safeguard your information when you use our trading journal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {sections.map((section, index) => (
              <div key={index} className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-4">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{section.title}</h3>
                <p className="text-slate-600 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
              <p className="text-slate-600">
                We collect information that you provide directly to us, such as when you create an account, 
                log a trade, or contact support. This includes your name, email address, and trading data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-slate-600">
                We use the information we collect to provide, maintain, and improve our services, 
                to communicate with you, and to protect our users and our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Sharing and Disclosure</h2>
              <p className="text-slate-600">
                We do not share your personal information with third parties except as described in this policy, 
                such as with your consent or to comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Your Choices</h2>
              <p className="text-slate-600">
                You have the right to access, update, or delete your personal information at any time 
                through your account settings or by contacting us directly.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
