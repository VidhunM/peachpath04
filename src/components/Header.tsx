import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['about', 'services', 'peachpath', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold for better detection
          return rect.top <= 200 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(currentSection || "");
    };

    // Initial check for sections
    const checkSections = () => {
      const sections = ['about', 'services', 'peachpath', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (!element) {
          console.warn(`Section with id "${section}" not found`);
        }
      });
    };

    // Check sections after a short delay to ensure DOM is loaded
    setTimeout(checkSections, 1000);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: "Home", href: "#", isActive: activeSection === "" },
    { name: "About Us", href: "#about", isActive: activeSection === "about" },
    { name: "Our Services", href: "#services", isActive: activeSection === "services" },
    { name: "#Peachpath", href: "#peachpath", isActive: activeSection === "peachpath" },
    { name: "Contact Us", href: "#contact", isActive: activeSection === "contact" },
  ];

  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (href === "#") {
      // Scroll to top for home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to specific section
      const element = document.querySelector(href);
      if (element) {
        // Get actual header height for more accurate scrolling
        const headerElement = document.querySelector('header');
        const headerHeight = headerElement ? headerElement.offsetHeight : 80;
        
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      } else {
        // Fallback: scroll to approximate position if element not found
        console.warn(`Element with href "${href}" not found, attempting fallback scroll`);
        const sectionName = href.replace('#', '');
        const fallbackScroll = () => {
          // Try to find any element that might contain the section
          const possibleElements = document.querySelectorAll(`[id*="${sectionName}"], [class*="${sectionName}"]`);
          if (possibleElements.length > 0) {
            const firstElement = possibleElements[0];
            const headerHeight = 80;
            const elementPosition = firstElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            });
          }
        };
        setTimeout(fallbackScroll, 100);
      }
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-md bg-white/98' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Peachpath logo" 
              className="h-12 md:h-14 lg:h-20 w-auto rounded-full object-contain transition-all duration-300 hover:scale-105" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavigation(item.href, e)}
                className={`font-medium text-base lg:text-lg transition-all duration-300 hover:scale-105 relative group cursor-pointer ${
                  item.isActive ? 'text-orange-600' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#F17A57] transition-all duration-300 ${
                  item.isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-gray-700" />
              ) : (
                <Menu className="h-5 w-5 text-gray-700" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 px-4 space-y-2 bg-white border-t border-gray-200">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavigation(item.href, e)}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:bg-gray-50 cursor-pointer border-l-4 ${
                  item.isActive 
                    ? "text-orange-600 bg-orange-50 border-orange-500" 
                    : "text-gray-700 hover:text-gray-900 border-transparent hover:border-gray-300"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;