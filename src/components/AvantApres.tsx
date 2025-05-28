import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AvantApres = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Pour mobile, montrer la flèche après 2 secondes
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderValue(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderValue(Math.max(0, Math.min(100, percentage)));
  };

  const comparisons = [
    {
      id: 1,
      before: "https://images.unsplash.com/photo-1486326658981-ed68abe5868e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      after: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Transformation BMW"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-wider uppercase mb-8 animate-fade-in">
            Avant / Après
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-white/70 font-light tracking-wide animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Voyez la différence en un seul coup d'œil.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {comparisons.map((comparison) => (
            <div key={comparison.id} className="relative">
              <div 
                ref={containerRef}
                className="relative overflow-hidden rounded-lg aspect-[16/9] bg-black cursor-ew-resize select-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onClick={handleClick}
              >
                {/* Image Après (fond) */}
                <img
                  src={comparison.after}
                  alt={`${comparison.alt} - Après`}
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                />
                
                {/* Image Avant (masquée par le slider) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
                >
                  <img
                    src={comparison.before}
                    alt={`${comparison.alt} - Avant`}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>

                {/* Ligne de séparation verticale */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white z-10"
                  style={{ left: `${sliderValue}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-ew-resize">
                    <div className="flex items-center gap-1">
                      <ArrowLeft className="w-3 h-3 text-black" />
                      <ArrowRight className="w-3 h-3 text-black" />
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-semibold">
                  AVANT
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-semibold">
                  APRÈS
                </div>
              </div>

              {/* Indicateur de position */}
              <div className="mt-6 text-center">
                <div className="text-white/60 text-sm mb-6">
                  Cliquez et glissez horizontalement pour comparer
                </div>
                
                {/* CTA Button */}
                <Link to="/soumission">
                  <Button
                    size="lg"
                    className="group bg-white text-black hover:bg-gray-100 font-semibold tracking-wider uppercase px-8 py-3 text-lg transition-all duration-300"
                    onMouseEnter={() => setShowArrow(true)}
                    onMouseLeave={() => setShowArrow(false)}
                  >
                    <span className="flex items-center space-x-2">
                      <span>Demander un devis</span>
                      <ArrowRight 
                        className={`w-5 h-5 transition-all duration-300 ${
                          showArrow 
                            ? 'translate-x-0 opacity-100' 
                            : 'translate-x-[-10px] opacity-0'
                        }`}
                      />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvantApres;
