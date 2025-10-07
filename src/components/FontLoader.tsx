import { useEffect, useState } from 'react';

interface FontLoaderProps {
  children: React.ReactNode;
}

const FontLoader: React.FC<FontLoaderProps> = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Check if fonts are loaded
    if ('fonts' in document) {
      Promise.all([
        document.fonts.load('400 1em Inter'),
        document.fonts.load('700 1em Inter'),
        document.fonts.load('400 1em Barlow'),
        document.fonts.load('700 1em "Playfair Display"')
      ]).then(() => {
        setFontsLoaded(true);
      }).catch(() => {
        // Fallback if font loading fails
        setFontsLoaded(true);
      });
    } else {
      // Fallback for browsers that don't support Font Loading API
      setFontsLoaded(true);
    }
  }, []);

  return (
    <div className={`font-loading ${fontsLoaded ? 'fonts-loaded' : ''}`}>
      {children}
    </div>
  );
};

export default FontLoader;
