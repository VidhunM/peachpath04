import { useState, useEffect } from 'react';

interface PreloadOptions {
  priority?: boolean;
  quality?: number;
  sizes?: string;
}

export const useImagePreloader = (src: string, options: PreloadOptions = {}) => {
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [preloadProgress, setPreloadProgress] = useState(0);

  useEffect(() => {
    if (!src || isPreloaded) return;

    const preloadImage = () => {
      const img = new Image();
      
      img.onload = () => {
        setIsPreloaded(true);
        setPreloadProgress(100);
      };
      
      img.onerror = () => {
        setHasError(true);
        setPreloadProgress(0);
      };
      
      img.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = (event.loaded / event.total) * 100;
          setPreloadProgress(progress);
        }
      };

      // Set quality and size parameters if provided
      if (options.quality || options.sizes) {
        const url = new URL(src, window.location.origin);
        if (options.quality) {
          url.searchParams.set('q', options.quality.toString());
        }
        if (options.sizes) {
          url.searchParams.set('sizes', options.sizes);
        }
        img.src = url.toString();
      } else {
        img.src = src;
      }
    };

    // Preload immediately for priority images
    if (options.priority) {
      preloadImage();
    } else {
      // Delay preloading for non-priority images
      const timeoutId = setTimeout(preloadImage, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [src, isPreloaded, options.priority, options.quality, options.sizes]);

  return {
    isPreloaded,
    hasError,
    preloadProgress,
  };
};

export default useImagePreloader;
