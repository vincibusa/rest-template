'use client';

import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  className?: string;
  variant?: 'text' | 'circle' | 'rectangle';
  height?: string;
  width?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  className = '',
  variant = 'text',
  height = '1rem',
  width = '100%',
}) => {
  const baseClasses = 'bg-[var(--text-muted)]/20 rounded-[var(--radius-md)]';
  
  const variantClasses = {
    text: 'h-4',
    circle: 'rounded-full',
    rectangle: '',
  };

  return (
    <motion.div
      initial={{ opacity: 0.6 }}
      animate={{ 
        opacity: [0.6, 0.8, 0.6],
        transition: { 
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ 
        height: variant === 'text' ? '1rem' : height,
        width: variant === 'circle' ? height : width 
      }}
      aria-label="Caricamento in corso"
    />
  );
};

export default SkeletonLoader;