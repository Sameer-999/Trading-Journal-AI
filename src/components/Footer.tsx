import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/">
              <Logo />
            </Link>
            <p className="text-slate-400 text-sm">
              Helping traders build consistency since 2024.
            </p>
          </div>

          <div className="flex items-center gap-8 text-sm font-medium text-slate-500">
            <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
          </div>

          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Trading Journal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
