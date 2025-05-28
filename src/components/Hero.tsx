
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    // Pour mobile, montrer la flèche après 2 secondes
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Corvette */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png"
          alt="Corvette noire de luxe - KBK Prestige"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay dégradé vertical de haut vers bas */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white tracking-wider leading-tight">
          Lavage Automobile de Luxe, Chez Vous.
          </h1>
          
          <h2 className="text-xl md:text-2xl font-sans font-light text-white/90 tracking-wide leading-relaxed max-w-3xl mx-auto">
            Des services de lavage automobile haut de gamme livrés directement chez vous.
          </h2>
        </div>

        {/* CTA Button */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Link to="/devis">
            <Button
              size="lg"
              className="group bg-white text-black hover:bg-gray-100 font-sans font-semibold tracking-wider uppercase px-10 py-4 text-lg transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden"
              onMouseEnter={() => setShowArrow(true)}
              onMouseLeave={() => setShowArrow(false)}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Obtenir un devis</span>
                <ArrowRight 
                  className={`w-5 h-5 transition-all duration-300 ${
                    showArrow 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-[-10px] opacity-0'
                  } 
                  md:${showArrow ? 'group-hover:translate-x-0 group-hover:opacity-100' : 'group-hover:translate-x-[-10px] group-hover:opacity-0'}`}
                />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
