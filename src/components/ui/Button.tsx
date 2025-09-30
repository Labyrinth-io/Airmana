import React from 'react';
import { COLORS } from '../../constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'rounded-full transition-all font-semibold airmana-logo inline-flex items-center justify-center whitespace-nowrap';
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 md:px-6 py-2 md:py-3 text-sm md:text-base',
    lg: 'px-6 md:px-8 py-3 md:py-4 text-base md:text-lg'
  };

  const variantStyles = {
    primary: {
      backgroundColor: COLORS.primary,
      color: COLORS.accent
    },
    secondary: {
      backgroundColor: 'transparent',
      color: COLORS.primary,
      border: `2px solid ${COLORS.primary}`
    }
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        style={variantStyles[variant]}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      style={variantStyles[variant]}
      {...props}
    >
      {children}
    </button>
  );
};