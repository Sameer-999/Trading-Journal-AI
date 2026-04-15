import React from 'react';
import { motion } from 'motion/react';
import { Globe, Bitcoin, BarChart, Building2 } from 'lucide-react';
import { TraderType } from '../types';

const traderTypes: TraderType[] = [
  {
    id: 'forex',
    title: 'Forex Traders',
    description: 'Track currency pairs, pips, and sessions with precision.',
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    color: 'blue',
  },
  {
    id: 'crypto',
    title: 'Crypto Traders',
    description: 'Journal your spot and futures trades across all exchanges.',
    icon: <Bitcoin className="w-6 h-6 text-orange-500" />,
    color: 'orange',
  },
  {
    id: 'options',
    title: 'Options Traders',
    description: 'Log strikes, premiums, greeks — capture every detail.',
    icon: <BarChart className="w-6 h-6 text-purple-600" />,
    color: 'purple',
  },
  {
    id: 'prop',
    title: 'Prop Firm Traders',
    description: 'Stay on track with drawdown limits and challenge rules.',
    icon: <Building2 className="w-6 h-6 text-emerald-600" />,
    color: 'emerald',
  },
];

export default function TargetAudience() {
  return (
    <section id="traders" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-[10px] uppercase tracking-widest mb-4 block">Built For You</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">
            Designed for <span className="text-blue-600">every</span> <span className="text-emerald-500">trader</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-500 text-base">
            No matter your market or style, Trading Journal adapts to your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {traderTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                {type.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{type.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {type.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
