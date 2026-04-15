import React from 'react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2 group", className)}>
      <div className="relative w-10 h-10 shrink-0 group-hover:scale-110 transition-transform duration-300">
        <svg 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full drop-shadow-sm"
          role="img"
          aria-label="Trading Journal Logo"
        >
          <defs>
            <linearGradient id="logo-gradient-comp" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#D946EF" />
            </linearGradient>
          </defs>
          <rect width="32" height="32" rx="8" fill="url(#logo-gradient-comp)"/>
          <path d="M9 15V21H12V15H9Z" fill="white"/>
          <path d="M14.5 9V25L17.5 22V9H14.5Z" fill="white"/>
          <path d="M20 13V21H23V13H20Z" fill="white"/>
        </svg>
      </div>
      {!iconOnly && (
        <span className="text-xl font-bold tracking-tight text-slate-900">Trading Journal</span>
      )}
    </div>
  );
}
