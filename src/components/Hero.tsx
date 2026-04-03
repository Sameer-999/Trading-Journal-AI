import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';
import DashboardPreview from './DashboardPreview';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-blue-50/50 blur-3xl -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          Track. Analyze. Grow.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6"
        >
          Track. Analyze.<br />
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">Improve</span> Your Trading.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 leading-relaxed mb-10"
        >
          A powerful trading journal to help you become a consistently profitable trader. 
          Log trades, spot patterns, and grow your edge.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="https://tradingjournall.base44.app"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            Log In <ChevronRight className="w-4 h-4" />
          </a>
          <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-2xl border border-slate-200 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95">
            <Play className="w-4 h-4 text-blue-600" /> See Features
          </button>
        </motion.div>

        <DashboardPreview />
      </div>
    </section>
  );
}
