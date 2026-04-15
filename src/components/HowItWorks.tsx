import React from 'react';
import { motion } from 'motion/react';
import { PenLine, TrendingUp, Rocket } from 'lucide-react';
import { Step } from '../types';

const steps: Step[] = [
  {
    id: 'log',
    stepNumber: 'STEP 01',
    title: 'Log Your Trades',
    description: 'Quickly record your entries, exits, strategy, and notes. It takes less than 30 seconds per trade.',
    icon: <PenLine className="w-6 h-6 text-white" />,
  },
  {
    id: 'analyze',
    stepNumber: 'STEP 02',
    title: 'Analyze Performance',
    description: 'Your dashboard auto-generates key metrics — win rate, profit factor, drawdown, and more. Spot your strengths.',
    icon: <TrendingUp className="w-6 h-6 text-white" />,
  },
  {
    id: 'improve',
    stepNumber: 'STEP 03',
    title: 'Improve Your Strategy',
    description: 'Use data-driven insights to refine your edge, eliminate mistakes, and build consistency over time.',
    icon: <Rocket className="w-6 h-6 text-white" />,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 block">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Three steps to <span className="text-blue-600">consistent</span><br />
            <span className="text-emerald-500">profits</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-24 left-0 w-full h-px bg-slate-200 -z-10" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-600 shadow-lg shadow-blue-200 flex items-center justify-center mb-8 relative">
                {step.icon}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold text-slate-400 tracking-widest">
                  {step.stepNumber}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-4">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
