import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Trading Journal</span>
            </a>
            <p className="text-slate-400 text-sm">
              Helping traders build consistency since 2024.
            </p>
          </div>

          <div className="flex items-center gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
          </div>

          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Trading Journal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
