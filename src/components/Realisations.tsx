
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const Realisations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState(null);

  const realisations = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Chevrolet Corvette C8 Stringray 2022"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Tesla CyberTruck"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "AUDI Q8 2025"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Mercedes Benz G63 2020"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Mercedes Benz GLE 450 2024"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Mercedes-Benz GT 53 2023"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Mercedes Benz GLE 450 2024"
    }
  ];

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    return () => api.off("select", handleSelect);
  }, [api]);

  return (
    <section id="realisations" className="py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-wider uppercase mb-6 animate-fade-in">
            Nos Réalisations
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-white/70 font-light tracking-wide animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Chaque intervention est une vitrine de notre savoir-faire.
          </p>
        </div>

        <div className="relative px-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {realisations.map((realisation) => (
                <CarouselItem key={realisation.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500">
                    <img
                      src={realisation.image}
                      alt={realisation.alt}
                      className="w-full h-80 object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-semibold tracking-wide">{realisation.alt}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-black" />
            <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-black" />
          </Carousel>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {realisations.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Realisations;
