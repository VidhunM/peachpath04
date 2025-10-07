import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  quality = 90,
  sizes = '100vw',
  loading = 'lazy',
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate optimized src with quality parameters
  const getOptimizedSrc = () => {
    if (hasError) return src;
    
    // For local images, return as is
    if (src.startsWith('/') || src.startsWith('./') || src.startsWith('@/')) {
      return src;
    }
    
    // For external images, you could add optimization service here
    return src;
  };

  // Generate responsive srcset for different screen densities
  const getSrcSet = () => {
    if (src.startsWith('/') || src.startsWith('./') || src.startsWith('@/')) {
      return undefined; // Local images don't need srcset
    }
    
    // For external images, generate srcset for different densities
    const baseUrl = src.split('?')[0];
    const params = new URLSearchParams(src.split('?')[1] || '');
    
    return [
      `${baseUrl}?${new URLSearchParams({ ...Object.fromEntries(params), w: '400', q: quality.toString() }).toString()} 1x`,
      `${baseUrl}?${new URLSearchParams({ ...Object.fromEntries(params), w: '800', q: quality.toString() }).toString()} 2x`,
      `${baseUrl}?${new URLSearchParams({ ...Object.fromEntries(params), w: '1200', q: quality.toString() }).toString()} 3x`,
    ].join(', ');
  };

  return (
    <div 
      ref={imgRef}
      className={cn(
        'relative overflow-hidden',
        className
      )}
      style={{ width, height }}
    >
      {/* Blur placeholder */}
      {placeholder === 'blur' && blurDataURL && !isLoaded && (
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{ backgroundImage: `url(${blurDataURL})` }}
        />
      )}
      
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* Error placeholder */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-sm">Failed to load image</div>
        </div>
      )}
      
      {/* Actual image */}
      {isInView && (
        <img
          src={getOptimizedSrc()}
          srcSet={getSrcSet()}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={loading}
          className={cn(
            'w-full h-full transition-opacity duration-300 popup-image-optimized',
            isLoaded ? 'opacity-100' : 'opacity-0',
            className
          )}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            imageRendering: 'auto',
            imageRendering: '-webkit-optimize-contrast',
            imageRendering: 'crisp-edges',
            WebkitBackfaceVisibility: 'hidden',
            WebkitTransform: 'translateZ(0)',
            WebkitPerspective: '1000',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
