
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Service exceptionnel ! Mon véhicule n'a jamais été aussi propre. L'équipe de KBK Prestige est professionnelle et ponctuelle.",
      author: "Michel Tremblay",
      position: "Directeur Général",
      company: "Construction MTL",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      location: "Repentigny"
    },
    {
      id: 2,
      text: "Incroyable transformation ! Ils ont redonné vie à ma BMW. Le service mobile est parfait pour mon horaire chargé.",
      author: "Sarah Dubois",
      position: "Avocate",
      company: "Cabinet Dubois & Associés",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      location: "Mascouche"
    },
    {
      id: 3,
      text: "Qualité premium garantie ! Chaque détail compte chez KBK Prestige. Je recommande sans hésitation.",
      author: "Jean-François Leblanc",
      position: "Propriétaire",
      company: "Garage Elite",
      logo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      location: "Terrebonne"
    },
    {
      id: 4,
      text: "Service impeccable pour notre flotte de véhicules de luxe. KBK Prestige comprend nos exigences élevées.",
      author: "Marie-Claire Gagnon",
      position: "Gestionnaire de Flotte",
      company: "Prestige Auto Groupe",
      logo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      location: "L'Assomption"
    }
  ];

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
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-white/20" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-relaxed text-center mb-8 italic">
                "{testimonials[activeTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-6">
                <img
                  src={testimonials[activeTestimonial].logo}
                  alt={testimonials[activeTestimonial].company}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                />
                <div className="text-center">
                  <h4 className="text-white font-semibold text-lg">
                    {testimonials[activeTestimonial].author}
                  </h4>
                  <p className="text-white/70 text-sm">
                    {testimonials[activeTestimonial].position}
                  </p>
                  <p className="text-white/60 text-sm font-light">
                    {testimonials[activeTestimonial].company} • {testimonials[activeTestimonial].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTestimonialChange(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === activeTestimonial
                  ? 'bg-white scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Company Logos Strip */}
        <div className="border-t border-white/10 pt-12">
          <p className="text-center text-white/60 text-sm uppercase tracking-wide mb-8">
            Ils nous font confiance
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-300 cursor-pointer ${
                  index === activeTestimonial ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-70'
                }`}
                onClick={() => handleTestimonialChange(index)}
              >
                <img
                  src={testimonial.logo}
                  alt={testimonial.company}
                  className="w-20 h-20 rounded-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
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
