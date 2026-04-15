import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
  BarChart, Bar
} from 'recharts';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const performanceData = [
  { name: '10%', value: 30 },
  { name: '20%', value: 25 },
  { name: '30%', value: 45 },
  { name: '40%', value: 35 },
  { name: '50%', value: 65 },
  { name: '60%', value: 40 },
  { name: '70%', value: 55 },
  { name: '80%', value: 45 },
  { name: '90%', value: 75 },
  { name: '100%', value: 60 },
];

const allocationData = [
  { name: 'Crypto', value: 45, color: '#3b82f6' },
  { name: 'Bonds', value: 30, color: '#10b981' },
  { name: 'Stocks', value: 25, color: '#e5e7eb' },
];

const monthlyReturns = [
  { name: 'Jan', value: 102 },
  { name: 'Feb', value: 30 },
  { name: 'Mar', value: 28 },
  { name: 'Apr', value: 30 },
  { name: 'May', value: 18 },
  { name: 'Jun', value: 17 },
  { name: 'Jul', value: 10 },
  { name: 'Aug', value: 107 },
];

const trades = [
  { date: 'GOOG', type: 'BUY', entry: '$145.20', exit: '$145.20', pnl: '+$840.00', positive: true },
  { date: 'AAPL', type: '200', entry: '$178.50', exit: '$178.50', pnl: '+$450.00', positive: true },
  { date: 'SELL', type: '278.50', entry: '$540.00', exit: '$540.00', pnl: '-$480.00', positive: false },
  { date: 'TSLA', type: '50', entry: '-2225.10', exit: '-2225.10', pnl: '-$270.00', positive: false },
];

export default function DashboardPreview() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-5xl mx-auto mt-16 bg-slate-50/50 rounded-3xl border border-slate-200 p-4 md:p-8 shadow-2xl relative overflow-hidden"
    >
      {/* Window Controls */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-2 text-xs font-medium text-slate-400">Trading Journal — Dashboard</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Performance Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 mb-4">Performance Over Time</h3>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  strokeWidth={3} 
                  dot={false}
                  animationDuration={2000}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Portfolio Allocation */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 mb-4">Portfolio Allocation</h3>
          <div className="h-[200px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={allocationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {allocationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-bold text-slate-900">45%</span>
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Crypto</span>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            {allocationData.map((item) => (
              <div key={item.name} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-[10px] font-medium text-slate-500">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-col gap-4">
          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm flex flex-col items-center justify-center">
            <span className="text-xs font-medium text-blue-500 mb-1">Win Rate:</span>
            <span className="text-3xl font-bold text-blue-600">72%</span>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm flex flex-col items-center justify-center">
            <span className="text-xs font-medium text-emerald-500 mb-1">Profit Factor:</span>
            <span className="text-3xl font-bold text-emerald-600">1.45</span>
          </div>
        </div>

        {/* Monthly Returns */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 mb-4">Monthly Returns</h3>
          <div className="h-[140px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyReturns}>
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {monthlyReturns.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.value > 50 ? '#3b82f6' : '#10b981'} fillOpacity={0.6} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between mt-2 px-2">
            <span className="text-[8px] text-slate-400 font-bold">102%</span>
            <span className="text-[8px] text-slate-400 font-bold">30%</span>
            <span className="text-[8px] text-slate-400 font-bold">28%</span>
            <span className="text-[8px] text-slate-400 font-bold">30%</span>
            <span className="text-[8px] text-slate-400 font-bold">18%</span>
            <span className="text-[8px] text-slate-400 font-bold">17%</span>
            <span className="text-[8px] text-slate-400 font-bold">10%</span>
            <span className="text-[8px] text-slate-400 font-bold">107%</span>
          </div>
        </div>

        {/* Total P&L */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center">
           <span className="text-sm font-medium text-slate-500 mb-1">Total P&L:</span>
           <span className="text-3xl font-bold text-emerald-500">+$15,200.50</span>
        </div>

        {/* Trade Log */}
        <div className="lg:col-span-3 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm overflow-x-auto">
          <h3 className="text-sm font-semibold text-slate-900 mb-4">Trade Log</h3>
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-slate-400 border-b border-slate-50">
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Type</th>
                <th className="pb-3 font-medium">Entry Price</th>
                <th className="pb-3 font-medium">Exit Price</th>
                <th className="pb-3 font-medium text-right">P&L (USD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {trades.map((trade, i) => (
                <tr key={i}>
                  <td className="py-3 font-medium text-slate-600">{trade.date}</td>
                  <td className="py-3 font-medium text-slate-600">{trade.type}</td>
                  <td className="py-3 font-medium text-slate-600">{trade.entry}</td>
                  <td className="py-3 font-medium text-slate-600">{trade.exit}</td>
                  <td className={cn("py-3 font-bold text-right", trade.positive ? "text-emerald-500" : "text-red-500")}>
                    {trade.pnl}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
