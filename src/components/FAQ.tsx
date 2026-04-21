import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is an AI trading journal and why do I need one?",
    answer: "An AI trading journal is more than just a notebook; it is a sophisticated data analysis tool. It records every detail of your trades and uses machine learning patterns to identify your behavioral biases. If you want to achieve professional consistency, you need to understand the mathematical edge of your strategies."
  },
  {
    question: "How does this compare to traditional Excel or Google Sheets?",
    answer: "While Excel is flexible, it requires manual setup and constant maintenance. Our AI journal automates all calculations, generates professional-grade visual reports instantly, and provides real-time risk-adjusted metrics like the Sortino ratio and Profit Factor without any complex formulas."
  },
  {
    question: "Is my sensitive trading data and capital information secure?",
    answer: "Absolutely. We utilize bank-grade 256-bit encryption for all data transmissions. Your trading logs are stored in isolated, secure server environments, and we never share your specific strategies or performance data with third parties."
  },
  {
    question: "Which markets and asset classes can I track?",
    answer: "Our platform is built for versatility. You can track a wide range of assets including Forex pairs, Cryptocurrencies, Global Stocks, Commodities, and Options. We offer custom fields for different execution styles like scalping, swing trading, or long-term investing."
  },
  {
    question: "How quickly will I see improvements in my trading?",
    answer: "Most users begin identifying costly emotional mistakes within the first 20-30 logged trades. By reviewing your 'Smart Insights' weekly, you can systematically eliminate losing setups and focus your capital on high-probability opportunities."
  },
  {
    question: "Can I export my data for tax or secondary analysis?",
    answer: "Yes, you can export your entire trading history at any time. We support multiple common formats like CSV and PDF, allowing you to share performance reports with mentors, partners, or use them for detailed tax preparation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 block">FAQ</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-lg">Everything you need to know about our trading journal.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
