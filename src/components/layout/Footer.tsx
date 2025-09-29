import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { SITE_CONFIG } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="below-fold bg-gray-900 text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-emerald-400">
            {SITE_CONFIG.name}
          </div>
          <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
            {SITE_CONFIG.tagline}
          </p>
          <div className="flex justify-center gap-4 md:gap-6 mb-6 md:mb-8">
            <a 
              href={SITE_CONFIG.social.instagram}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-emerald-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a 
              href={SITE_CONFIG.social.facebook}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-emerald-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
          <p className="text-gray-500 text-xs md:text-sm">
            © 2025 {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};