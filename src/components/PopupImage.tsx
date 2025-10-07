import React, { useState, useEffect } from 'react';
import OptimizedImage from './OptimizedImage';
import { cn } from '@/lib/utils';

interface PopupImageProps {
  src: string;
  alt: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  priority?: boolean;
  onLoad?: () => void;
}

const PopupImage: React.FC<PopupImageProps> = ({
  src,
  alt,
  className = '',
  size = 'medium',
  priority = false,
  onLoad,
}) => {
  const [isPreloaded, setIsPreloaded] = useState(false);

  // Preload image for better quality in popups
  useEffect(() => {
    if (priority && !isPreloaded) {
      const img = new Image();
      img.onload = () => {
        setIsPreloaded(true);
        onLoad?.();
      };
      img.src = src;
    }
  }, [src, priority, isPreloaded, onLoad]);

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-16 h-16 sm:w-20 sm:h-20';
      case 'medium':
        return 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28';
      case 'large':
        return 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36';
      default:
        return 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28';
    }
  };

  return (
    <div className={cn(
      'rounded-full overflow-hidden shadow-lg',
      getSizeClasses(),
      className
    )}>
      <OptimizedImage
        src={src}
        alt={alt}
        className="w-full h-full object-contain bg-white"
        quality={95} // Higher quality for popup images
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        sizes="(max-width: 640px) 80px, (max-width: 768px) 88px, (max-width: 1024px) 96px, 112px"
        onLoad={onLoad}
      />
    </div>
  );
};

export default PopupImage;
