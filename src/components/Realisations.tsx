
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
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [api, setApi] = useState<any>(null);

  const realisations = [
    {
      id: 1,
      image: "/services/finition.png",
      video: null,
      alt: "Chevrolet Corvette C8 Stringray 2022",
    },
    {
      id: 2,
      image: "/realisations/cybertruck.png",
      video: "/realisations/cybertruck.mp4",
      alt: "Tesla CyberTruck",
    },
    {
      id: 3,
      image: "/realisations/Q8.png",
      video: "/realisations/Q8.mp4",
      alt: "AUDI Q8 2025",
    },
    {
      id: 4,
      image: "/realisations/G63.png",
      video: "/realisations/G63.mp4",
      alt: "Mercedes Benz G63 2020",
    },
    {
      id: 5,
      image: "/realisations/GLE450.png",
      video: "/realisations/GLE450.mp4",
      alt: "Mercedes Benz GLE 450 2024",
    },
    {
      id: 6,
      image: "/realisations/GT53.png",
      video: "/realisations/GT53.mp4",
      alt: "Mercedes-Benz GT 53 2023",
    },
  ];

  useEffect(() => {
    if (!api) return;
    const handleSelect = () => {
      const index = api.selectedScrollSnap();
      setActiveIndex(index);
    };
    api.on("select", handleSelect);
    return () => api.off("select", handleSelect);
  }, [api]);

  // Si on change de slide, on stoppe la vidéo
  useEffect(() => {
    if (playingIndex !== null && playingIndex !== activeIndex) {
      setPlayingIndex(null);
    }
  }, [activeIndex, playingIndex]);

  const handleItemClick = (index: number, hasVideo: boolean) => {
    console.log('Clicked item:', index, 'Has video:', hasVideo);
    if (hasVideo) {
      // Si on clique sur la même vidéo qui joue, on l'arrête
      if (playingIndex === index) {
        setPlayingIndex(null);
      } else {
        setPlayingIndex(index);
      }
    }
  };

  return (
    <section id="realisations" className="py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-wider uppercase mb-6 animate-fade-in">
            Nos Réalisations
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p
            className="text-lg md:text-xl text-white/70 font-light tracking-wide animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Chaque intervention est une vitrine de notre savoir-faire.
          </p>
        </div>

        <div className="relative px-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {realisations.map((realisation, index) => {
                const isPlaying = index === playingIndex && realisation.video;

                return (
                  <CarouselItem key={realisation.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div
                      className="group relative overflow-hidden rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer"
                      onClick={() => handleItemClick(index, !!realisation.video)}
                    >
                      {isPlaying ? (
                        <video
                          src={realisation.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className="w-full h-80 object-cover"
                          onLoadStart={() => console.log('Video loading started for:', realisation.alt)}
                          onCanPlay={() => console.log('Video can play:', realisation.alt)}
                          onError={(e) => console.error('Video error:', e, realisation.alt)}
                        />
                      ) : (
                        <img
                          src={realisation.image}
                          alt={realisation.alt}
                          className="w-full h-80 object-cover transition-all duration-500"
                          loading="lazy"
                        />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white font-semibold tracking-wide">
                            {realisation.alt}
                          </p>
                          {realisation.video && (
                            <p className="text-white/70 text-sm mt-1">
                              {isPlaying ? 'Cliquez pour arrêter' : 'Cliquez pour voir la vidéo'}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-black" />
            <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-black" />
          </Carousel>

          <div className="flex justify-center mt-8 space-x-3">
            {realisations.map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-white scale-125"
                    : "bg-white/30 hover:bg-white/50"
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
