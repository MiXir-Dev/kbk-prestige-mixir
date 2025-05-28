
const Services = () => {
  const services = [
    {
      title: "Service Express",
      description: "Solutions rapides pour vos besoins urgents avec qualité garantie",
      image: "/services/service_express.png",
      bgColor: "bg-zinc-700/70"
    },
    {
      title: "Détaillage Jantes", 
      description: "Nettoyage des jantes en profondeur avec brillance et protection des pneus",
      image: "/services/jantes.png",
      bgColor: "bg-zinc-700/80"
    },
    {
      title: "Lavage Premium",
      description: "Lavage à la main sans contact et nettoyage complet intérieur/extérieur",
      image: "/services/lavage_premium.png",
      bgColor: "bg-zinc-800/80"
    },
    {
      title: "Nettoyage Intérieur",
      description: "Shampoing des tapis et sièges avec traitement du cuir spécialisé",
      image: "/services/interior.gif",
      bgColor: "bg-zinc-800/70"
    },
    {
      title: "Désinfection Pro",
      description: "Désinfection antibactérienne complète pour une hygiène parfaite",
      image: "/services/desinfection.png",
      bgColor: "bg-zinc-900/60"
    },
    {
      title: "Finition Prestige",
      description: "Traitement complet avec cire de protection et finition miroir",
      image: "/services/finition.png",
      bgColor: "bg-zinc-800/60"
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-wider uppercase mb-8 animate-fade-in">
            Nos Services
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-white/10 hover:border-white/50 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
               <div className="relative w-full overflow-hidden aspect-square">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                  />
                </div>
              <div className={`p-6 backdrop-blur-sm ${service.bgColor}`}>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
