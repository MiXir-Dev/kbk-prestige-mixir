import { Star, Quote } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      text: "Mon pickup brille comme jamais. Ils sont venus direct chez moi à L’Assomption, super pratique.",
      author: "Patrick B.",
      company: null,
      logo: "/testimonials/pickup.png",
      rating: 5,
      location: "L'Assomption"
    },
    {
      id: 2,
      text: "Ma Tesla a l’air sortie du concessionnaire. J’ai même pas eu à bouger de chez moi à Mascouche.",
      author: "Sarah Dubois",
      company: "Cabinet Dubois & Associés",
      logo: "/testimonials/tesla.png",
      rating: 5,
      location: "Mascouche"
    },
    {
      id: 3,
      text: "Top service. Mon SUV est clean comme jamais, prêt pour le week-end. Les gars sont pros et rapides.",
      author: "Michel Tremblay",
      company: "Construction MTL",
      logo: "/testimonials/volks.png",
      rating: 5,
      location: "Repentigny"
    },
    {
      id: 4,
      text: "Toujours nickel. Ils s’occupent de mes chars pendant que je bosse. J’ai rien à faire, j’adore.",
      author: "Jean-François Leblanc",
      company: "Garage Elite",
      logo: "/testimonials/toyota.png",
      rating: 5,
      location: "Terrebonne"
    }
  ];

  // Swipe gesture
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let startX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const deltaX = endX - startX;

      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          setActiveTestimonial((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
          );
        } else {
          setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }
      }
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [testimonials.length]);

  // Auto-scroll every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleTestimonialChange = (index: number) => {
    setActiveTestimonial(index);
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-zinc-900/30 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-wider uppercase mb-8 animate-fade-in">
            Témoignages Clients
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-white/70 font-light tracking-wide">
            La satisfaction de nos clients est notre fierté
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10 relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-10 transition-all duration-500">
            {/* Text side */}
            <div className="flex-1">
              <div className="flex items-center mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-white/20 mb-4" />
              <blockquote className="text-lg md:text-xl lg:text-2xl text-white font-light leading-relaxed italic mb-6">
                "{testimonials[activeTestimonial].text}"
              </blockquote>

              <div>
                <h4 className="text-white font-semibold text-lg">
                  {testimonials[activeTestimonial].author}
                </h4>
                <p className="text-white/60 text-sm font-light">
                  {testimonials[activeTestimonial].company
                    ? `${testimonials[activeTestimonial].company} • `
                    : ""}
                  {testimonials[activeTestimonial].location}
                </p>
              </div>
            </div>

            {/* Car photo side */}
            <div className="w-full md:w-1/3">
              <img
                src={testimonials[activeTestimonial].logo}
                alt="Photo du véhicule"
                className="w-full h-64 object-cover rounded-xl shadow-md border border-white/10"
              />
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTestimonialChange(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === activeTestimonial
                  ? "bg-white scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Logos Strip */}
        <div className="border-t border-white/10 pt-12">
          <p className="text-center text-white/60 text-sm uppercase tracking-wide mb-8">
            Ils nous font confiance
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-300 cursor-pointer ${
                  index === activeTestimonial
                    ? "opacity-100 scale-110"
                    : "opacity-40 hover:opacity-70"
                }`}
                onClick={() => handleTestimonialChange(index)}
              >
                <img
                  src={testimonial.logo}
                  alt={testimonial.company || "Client"}
                  className="w-20 h-20 object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
