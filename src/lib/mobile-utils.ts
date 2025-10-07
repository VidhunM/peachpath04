// Mobile responsive utilities and constants
export const MOBILE_BREAKPOINTS = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1400,
  '3xl': 1600,
} as const;

export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < MOBILE_BREAKPOINTS.md;
};

export const isTablet = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= MOBILE_BREAKPOINTS.md && window.innerWidth < MOBILE_BREAKPOINTS.lg;
};

export const isDesktop = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= MOBILE_BREAKPOINTS.lg;
};

export const getDeviceType = () => {
  if (isMobile()) return 'mobile';
  if (isTablet()) return 'tablet';
  return 'desktop';
};

// Responsive spacing utilities
export const getResponsiveSpacing = (base: number, mobile: number, tablet: number, desktop: number) => {
  if (isMobile()) return mobile;
  if (isTablet()) return tablet;
  return desktop;
};

// Responsive font sizes
export const getResponsiveFontSize = (mobile: string, tablet: string, desktop: string) => {
  if (isMobile()) return mobile;
  if (isTablet()) return tablet;
  return desktop;
};

// Touch-friendly dimensions
export const TOUCH_TARGET_SIZE = 44; // Minimum 44px for touch targets

// Mobile-specific CSS classes
export const MOBILE_CLASSES = {
  container: 'px-4 sm:px-6 lg:px-8',
  spacing: 'space-y-4 sm:space-y-6 md:space-y-8',
  grid: 'grid gap-4 sm:gap-6 md:gap-8',
  text: 'text-sm sm:text-base md:text-lg',
  button: 'py-3 px-4 sm:py-4 sm:px-6 min-h-[44px]',
  form: 'space-y-3 sm:space-y-4 md:space-y-5',
  navigation: 'flex flex-col space-y-2',
} as const;

// Responsive breakpoint utilities
export const getBreakpointClass = (breakpoint: keyof typeof MOBILE_BREAKPOINTS) => {
  return MOBILE_BREAKPOINTS[breakpoint];
};

// Mobile-first responsive design helpers
export const createResponsiveClasses = (classes: {
  base: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}) => {
  const { base, sm, md, lg, xl } = classes;
  return [
    base,
    sm && `sm:${sm}`,
    md && `md:${md}`,
    lg && `lg:${lg}`,
    xl && `xl:${xl}`,
  ].filter(Boolean).join(' ');
};

// Prevent zoom on iOS inputs
export const preventIOSZoom = () => {
  if (typeof window === 'undefined') return;
  
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
  }
};

// Mobile gesture helpers
export const addSwipeSupport = (
  element: HTMLElement,
  onSwipeLeft?: () => void,
  onSwipeRight?: () => void,
  threshold = 50
) => {
  let startX = 0;
  let startY = 0;
  let endX = 0;
  let endY = 0;

  const handleTouchStart = (e: TouchEvent) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diffX = startX - endX;
    const diffY = startY - endY;

    // Check if horizontal swipe is more significant than vertical
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > threshold) {
      if (diffX > 0 && onSwipeLeft) {
        onSwipeLeft();
      } else if (diffX < 0 && onSwipeRight) {
        onSwipeRight();
      }
    }
  };

  element.addEventListener('touchstart', handleTouchStart);
  element.addEventListener('touchend', handleTouchEnd);

  return () => {
    element.removeEventListener('touchstart', handleTouchStart);
    element.removeEventListener('touchend', handleTouchEnd);
  };
};

// Mobile performance optimizations
export const optimizeForMobile = () => {
  if (typeof window === 'undefined') return;

  // Reduce motion for users who prefer it
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--transition-duration', '0.1s');
  }

  // Optimize for mobile devices
  if (isMobile()) {
    // Reduce animation complexity on mobile
    document.documentElement.style.setProperty('--animation-complexity', 'simple');
  }
};

// Export default utilities
export default {
  MOBILE_BREAKPOINTS,
  isMobile,
  isTablet,
  isDesktop,
  getDeviceType,
  getResponsiveSpacing,
  getResponsiveFontSize,
  TOUCH_TARGET_SIZE,
  MOBILE_CLASSES,
  getBreakpointClass,
  createResponsiveClasses,
  preventIOSZoom,
  addSwipeSupport,
  optimizeForMobile,
};
