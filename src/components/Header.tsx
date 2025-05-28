
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false); // Fermer la sidebar après navigation
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:+15141234567"; // Remplacez par votre numéro
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'backdrop-blur-sm bg-black/20 border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src="/logo.png" 
              alt="KBK Prestige Logo" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <div className="hidden sm:flex text-xl md:text-3xl font-display font-black tracking-wide">
              <span className="text-black bg-white/95 px-3 py-1 rounded mr-2 shadow-lg">KBK</span>
              <span className="text-white">PRESTIGE</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
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

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center space-x-4">
          {/* Phone Icon */}
          <button
            onClick={handlePhoneCall}
            className="text-white p-2 hover:text-gray-300 transition-colors duration-300"
            aria-label="Appeler"
          >
            <Phone size={24} />
          </button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="text-white p-2 hover:text-gray-300 transition-colors duration-300"
                aria-label="Menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full h-full bg-black/95 border-l border-white/10">
              <div className="flex flex-col space-y-6 mt-8">
                <SheetClose asChild>
                  <button 
                    onClick={() => scrollToSection('hero')}
                    className="text-white text-lg font-sans font-medium tracking-wide text-left hover:text-gray-300 transition-colors duration-300"
                  >
                    ACCUEIL
                  </button>
                </SheetClose>
                <SheetClose asChild>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-white text-lg font-sans font-medium tracking-wide text-left hover:text-gray-300 transition-colors duration-300"
                  >
                    SERVICES
                  </button>
                </SheetClose>
                <SheetClose asChild>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-white text-lg font-sans font-medium tracking-wide text-left hover:text-gray-300 transition-colors duration-300"
                  >
                    À PROPOS
                  </button>
                </SheetClose>
                <SheetClose asChild>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-white text-lg font-sans font-medium tracking-wide text-left hover:text-gray-300 transition-colors duration-300"
                  >
                    CONTACT
                  </button>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/devis" 
                    className="bg-white text-black px-6 py-3 font-sans font-semibold tracking-wide uppercase hover:bg-gray-100 transition-all duration-300 text-center mt-4"
                  >
                    OBTENIR UN DEVIS
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
