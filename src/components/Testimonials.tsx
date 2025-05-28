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
      logo: "https://images.unsplash.com/photo-1605559424843-2665dc80f6fd?q=80&w=800", // voiture
      rating: 5,
      location: "Repentigny"
    },
    {
      id: 2,
      text: "Incroyable transformation ! Ils ont redonné vie à ma BMW. Le service mobile est parfait pour mon horaire chargé.",
      author: "Sarah Dubois",
      position: "Avocate",
      company: "Cabinet Dubois & Associés",
      logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=800", // voiture
      rating: 5,
      location: "Mascouche"
    },
    {
      id: 3,
      text: "Qualité premium garantie ! Chaque détail compte chez KBK Prestige. Je recommande sans hésitation.",
      author: "Jean-François Leblanc",
      position: "Propriétaire",
      company: "Garage Elite",
      logo: "https://images.unsplash.com/photo-1617082434087-4147dc4d45d2?q=80&w=800", // voiture
      rating: 5,
      location: "Terrebonne"
    },
    {
      id: 4,
      text: "Service impeccable pour notre flotte de véhicules de luxe. KBK Prestige comprend nos exigences élevées.",
      author: "Marie-Claire Gagnon",
      position: "Gestionnaire de Flotte",
      company: "Prestige Auto Groupe",
      logo: "https://images.unsplash.com/photo-1571607381628-1f8db384bc94?q=80&w=800", // voiture
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
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10 relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-10">
            
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
                <p className="text-white/70 text-sm">{testimonials[activeTestimonial].position}</p>
                <p className="text-white/60 text-sm font-light">
                  {testimonials[activeTestimonial].company} • {testimonials[activeTestimonial].location}
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
                  ? 'bg-white scale-125'
                  : 'bg-white/30 hover:bg-white/50'
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
                  index === activeTestimonial ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-70'
                }`}
                onClick={() => handleTestimonialChange(index)}
              >
                <img
                  src={testimonial.logo}
                  alt={testimonial.company}
                  className="w-20 h-20 object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-300"
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
