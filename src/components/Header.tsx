
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'backdrop-blur-sm bg-black/20 border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src="/logo.png" 
              alt="KBK Prestige Logo" 
              className="w-16 h-16 object-contain"
            />
            <div className="text-2xl md:text-3xl font-display font-black tracking-wide">
              <span className="text-black bg-white/95 px-3 py-1 rounded mr-2 shadow-lg">KBK</span>
              <span className="text-white">PRESTIGE</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-white hover:text-gray-300 font-sans font-medium tracking-wide transition-colors duration-300"
          >
            ACCUEIL
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-white hover:text-gray-300 font-sans font-medium tracking-wide transition-colors duration-300"
          >
            SERVICES
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-gray-300 font-sans font-medium tracking-wide transition-colors duration-300"
          >
            À PROPOS
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-gray-300 font-sans font-medium tracking-wide transition-colors duration-300"
          >
            CONTACT
          </button>
          <Link 
            to="/devis" 
            className="bg-white text-black px-6 py-2 font-sans font-semibold tracking-wide uppercase hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
          >
            OBTENIR UN DEVIS
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
