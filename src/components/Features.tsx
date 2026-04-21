import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, LineChart, Lightbulb, Layout } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 'tracking',
    title: 'Precision Trade Tracking',
    description: 'Log every entry, exit, and P&L with extreme detail. Capture instrument-specific metrics, setup types, emotional state, and risk-management parameters to build a comprehensive trading history.',
    icon: <LineChart className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 'analytics',
    title: 'Advanced Performance Analytics',
    description: 'Go beyond basic stats with deep analysis of your win rate, expectancy, max drawdown, and profit factor. Our interactive equity curves help you visualize your growth and market outliers.',
    icon: <BarChart3 className="w-6 h-6 text-emerald-500" />,
  },
  {
    id: 'insights',
    title: 'Actionable Strategy Insights',
    description: 'Our AI engine identifies which setups and trading sessions deliver the highest probabilistic outcomes. Learn exactly when to push your advantage and when to step away from the terminal.',
    icon: <Lightbulb className="w-6 h-6 text-amber-500" />,
  },
  {
    id: 'dashboard',
    title: 'Professional Grade Dashboard',
    description: 'Manage your trading business via a sleek, intuitive interface. Designed for rapid data entry and frictionless review sessions, so you can spend more time trading and less time spreadsheets.',
    icon: <Layout className="w-6 h-6 text-purple-500" />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 block">Features</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Everything you need to <span className="text-blue-600">trade</span><br />
            <span className="text-emerald-500">smarter</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 text-lg">
            Built by traders, for traders. Every feature is designed to close the gap between where you are and where you want to be.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50/50 border border-slate-100 hover:border-blue-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
