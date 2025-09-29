import React from 'react';
import { SITE_CONFIG, COLORS } from '../../constants';

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  return (
    <nav className={`fixed top-0 w-full bg-slate-900 bg-opacity-95 backdrop-blur-sm z-40 border-b border-slate-700 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          <div className="flex items-center gap-3">
            <div className="text-xl md:text-2xl font-bold airmana-logo">{SITE_CONFIG.name.toUpperCase()}</div>
          </div>
          
          <div className="hidden lg:flex space-x-6 xl:space-x-8 justify-center flex-1">
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors airmana-logo">About</a>
            <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors airmana-logo">Services</a>
            <a href="#timetable" className="text-gray-700 hover:text-emerald-600 transition-colors airmana-logo">Timetable</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors airmana-logo">Contact</a>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <a 
              href="/headset-hire" 
              className="hidden sm:block px-3 md:px-6 py-2 rounded-full transition-all text-sm md:text-base"
              style={{ backgroundColor: COLORS.primary, color: COLORS.accent }}
            >
              <span className="airmana-logo">Headset Hire</span>
            </a>
            <a 
              href={SITE_CONFIG.booking.url}
              className="px-4 md:px-6 py-2 rounded-full transition-all text-sm md:text-base shadow-lg"
              style={{ backgroundColor: COLORS.primary, color: COLORS.accent }}
            >
              <span className="airmana-logo">Join Today</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};