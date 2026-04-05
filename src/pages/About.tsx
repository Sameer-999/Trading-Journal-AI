import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Target, TrendingUp, Shield, Users } from 'lucide-react';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Our Mission to Help Traders Succeed</title>
        <meta name="description" content="Learn about the mission and vision behind Trading Journal. We're dedicated to providing traders with the tools they need to achieve consistent profitability." />
        <link rel="canonical" href="https://sameer-999.github.io/Trading-Journal-AI/#/about" />
      </Helmet>
      <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            About Trading Journal
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            We believe that every trader has the potential to be consistently profitable. 
            The difference between those who succeed and those who struggle is often just 
            a matter of data, discipline, and self-awareness.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100">
              <Target className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
              <p className="text-slate-600">
                To provide traders with the most intuitive and powerful tools to track their performance, 
                identify their edge, and eliminate emotional decision-making.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100">
              <TrendingUp className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
              <p className="text-slate-600">
                To become the global standard for trading performance analytics, 
                helping millions of traders turn their passion into a professional career.
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why We Built This</h2>
            <p className="text-slate-600 mb-6">
              Most trading journals are either too complex or too simple. We wanted to build something 
              that fits right in the middle: powerful enough for professionals, but simple enough 
              that you'll actually use it every day.
            </p>
            <p className="text-slate-600 mb-6">
              Trading is 90% psychology. By looking at your data objectively, you can take the 
              emotion out of the game and start trading like a business.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
