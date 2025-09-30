import React from 'react';
import { Video as LucideIcon } from 'lucide-react';
import LazyImage from '../LazyImage';
import { Button } from './Button';
import { SITE_CONFIG } from '../../constants';

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  image: string;
  description: string;
  benefits: string[];
  cta: string;
  isActive?: boolean;
  onHover?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon: Icon,
  image,
  description,
  benefits,
  cta,
  isActive,
  onHover
}) => {
  return (
    <div 
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 lg:col-span-1"
      onMouseEnter={onHover}
    >
      <div className="relative h-40 md:h-48 overflow-hidden">
        <LazyImage
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          width="400"
          height="300"
          webpSrc={image}
        />
        <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-full p-3">
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
        </div>
      </div>
      
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              {benefit}
            </li>
          ))}
        </ul>
        
        <Button href={SITE_CONFIG.booking.url} className="w-full text-center">
          {cta}
        </Button>
      </div>
    </div>
  );
};