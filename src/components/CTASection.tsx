import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto rounded-[40px] bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-500 p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200"
      >
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
            Start Your Trading<br />Journey Today
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-blue-50 mb-12 leading-relaxed">
            Join thousands of traders who are already using Trading Journal to build consistency and confidence in their trading.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://tradingjournall.base44.app"
              className="w-full sm:w-auto px-10 py-5 bg-white text-blue-600 font-bold rounded-2xl shadow-xl hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              Log In <ChevronRight className="w-4 h-4" />
            </a>
            <button className="w-full sm:w-auto px-10 py-5 bg-white/10 text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105 active:scale-95">
              Learn More
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
