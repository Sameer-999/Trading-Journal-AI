import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';
import { cn } from '../lib/utils';

const plans: PricingPlan[] = [
  {
    id: 'daily',
    name: 'Starter',
    price: '₹19',
    period: '/day',
    description: 'Try it out with no commitment',
    features: ['Unlimited trade logs', 'Basic analytics', '1 strategy'],
  },
  {
    id: 'weekly',
    name: 'Active',
    price: '₹59',
    period: '/week',
    description: 'Great for active trading weeks',
    features: ['Unlimited trade logs', 'Full analytics suite', '3 strategies', 'Export reports'],
  },
  {
    id: 'monthly',
    name: 'Pro',
    price: '₹299',
    period: '/month',
    description: 'Most popular for serious traders',
    features: ['Unlimited trade logs', 'Full analytics suite', 'Unlimited strategies', 'Export reports', 'Priority support'],
    isPopular: true,
  },
  {
    id: 'yearly',
    name: 'Elite',
    price: '₹2,299',
    period: '/year',
    description: 'Best value — save over 4 months',
    features: ['Everything in Monthly', 'Advanced insights', 'API access', 'Early feature access', 'Dedicated support'],
    isBestValue: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 block">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Simple, <span className="text-blue-600">transparent</span> pricing
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 text-lg">
            No hidden fees. Pick the plan that fits your trading style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative p-8 rounded-3xl border transition-all flex flex-col",
                plan.isPopular 
                  ? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-200 scale-105 z-10" 
                  : "bg-white border-slate-100 text-slate-900 shadow-sm"
              )}
            >
              {plan.isBestValue && (
                <div className="absolute -top-4 right-8 px-3 py-1 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Best Value
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={cn("text-xl font-bold mb-2", plan.isPopular ? "text-white" : "text-slate-900")}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className={cn("text-sm font-medium", plan.isPopular ? "text-blue-100" : "text-slate-400")}>
                    {plan.period}
                  </span>
                </div>
                <p className={cn("text-sm leading-relaxed", plan.isPopular ? "text-blue-50" : "text-slate-500")}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={cn("w-4 h-4 mt-0.5 shrink-0", plan.isPopular ? "text-blue-200" : "text-emerald-500")} />
                    <span className={plan.isPopular ? "text-blue-50" : "text-slate-600"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://tradingjournall.base44.app"
                className={cn(
                  "w-full py-4 rounded-xl font-bold transition-all active:scale-95 text-center",
                  plan.isPopular 
                    ? "bg-white text-blue-600 hover:bg-blue-50" 
                    : "bg-blue-600 text-white hover:bg-blue-700"
                )}
              >
                Log In
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
