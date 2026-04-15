import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is a trading journal?",
    answer: "A trading journal is a log that you use to record your trades. It helps you track your performance, identify patterns in your trading behavior, and improve your overall strategy by learning from both your wins and losses."
  },
  {
    question: "Why should I use an online trading journal instead of Excel?",
    answer: "While Excel is powerful, an online trading journal like ours automates the analytics process. We provide real-time performance metrics, visual charts, and strategy insights that would take hours to build and maintain in a spreadsheet."
  },
  {
    question: "Is my trading data secure?",
    answer: "Yes, security is our top priority. We use industry-standard encryption and secure server environments to ensure that your trading logs and personal information are always protected."
  },
  {
    question: "Can I track different types of assets?",
    answer: "Absolutely! Our journal is designed for versatility. You can track Forex, Crypto, Stocks, Options, and more. We provide specialized fields for each asset class to ensure you capture the right data."
  },
  {
    question: "How does the analytics help me improve?",
    answer: "Our analytics engine identifies your most profitable setups, sessions, and instruments. By seeing exactly where your edge lies, you can focus on what works and eliminate the mistakes that are costing you money."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-[10px] uppercase tracking-widest mb-4 block">FAQ</span>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-base">Everything you need to know about our trading journal.</p>
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
