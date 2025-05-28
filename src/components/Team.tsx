
import { Users, Star, Clock, Shield } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Kevin",
      role: "Expert en détaillage",
      quality: "Perfectionniste",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Brandon",
      role: "Spécialiste intérieur",
      quality: "Minutieux",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Karl",
      role: "Expert carrosserie",
      quality: "Passionné",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  const qualities = [
    { icon: Clock, text: "Ponctuel" },
    { icon: Star, text: "Professionnel" },
    { icon: Shield, text: "Fiable" },
    { icon: Users, text: "À l'écoute" }
  ];

  return (
    <section className="py-24 lg:py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-wider uppercase mb-8 animate-fade-in">
            Notre Équipe
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-white/70 font-light tracking-wide animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Des professionnels passionnés qui transforment l'entretien de votre véhicule en art.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-center">
                      <p className="text-white font-bold text-xl mb-1">{member.name}</p>
                      <p className="text-white/80 text-sm mb-2">{member.role}</p>
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        {member.quality}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-white/70 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Qualities */}
        <div className="grid md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {qualities.map((quality, index) => {
            const IconComponent = quality.icon;
            return (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300">
                <IconComponent className="w-8 h-8 text-white mx-auto mb-3" />
                <p className="text-white font-medium tracking-wide">{quality.text}</p>
              </div>
            );
          })}
        </div>

        {/* Manifesto Quote */}
        <div className="text-center mt-20 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
            <blockquote className="text-2xl md:text-3xl font-display font-light text-white/90 italic leading-relaxed">
              "Nous ne lavons pas que des voitures.<br />
              <span className="font-semibold text-white">Nous révélons leur éclat."</span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
