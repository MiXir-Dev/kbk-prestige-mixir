
import { Car, Shield, Zap, Users, Clock, MapPin, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Excellence",
      description: "Qualité premium garantie avec des produits haut de gamme"
    },
    {
      icon: Car,
      title: "Service Mobile",
      description: "Nous venons directement chez vous avec notre équipement professionnel"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Technologies modernes et méthodes révolutionnaires"
    }
  ];

  const stats = [
    { icon: Car, number: "100+", label: "Véhicules traités" },
    { icon: Users, number: "98%", label: "Clients satisfaits" },
    { icon: Clock, number: "24h", label: "Délai de réponse" },
    { icon: Award, number: "6", label: "Zones desservies" }
  ];

  const zones = [
    "Repentigny", "L'Assomption", "Joliette", 
    "Lavaltrie", "Terrebonne", "Mascouche"
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white tracking-wider uppercase mb-6">
            KBK Prestige
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            L'excellence du détaillage automobile mobile, redéfinie pour vous
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-8 text-center transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4 tracking-wide">
                  {value.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-6 text-center"
              >
                <div className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-display font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-white mb-4 tracking-wide">
              Zones Desservies
            </h3>
            <p className="text-white/70">
              Service mobile premium dans toute la région de Lanaudière
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {zones.map((zone, index) => (
              <div
                key={zone}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-4 text-center transition-all duration-300 hover:from-white/15 hover:to-white/10"
              >
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-4 h-4 text-white/70" />
                  <span className="text-white font-medium">
                    {zone}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extended Service */}
        <div className="w-full">
          <div className="bg-gradient-to-r from-white/10 via-white/15 to-white/10 border border-white/20 p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 border border-white/30 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-lg font-display font-bold text-white mb-2">
                    Service Étendu Disponible
                  </h4>
                  <p className="text-white/90">
                    Mandats exceptionnels acceptés en dehors de notre secteur principal
                  </p>
                </div>
              </div>
              
              <Link to="/devis" className="flex-shrink-0">
                <button className="bg-white/10 border border-white/20 text-white px-6 py-3 font-medium tracking-wide transition-all duration-300 hover:bg-white/20">
                  Discuter de vos besoins
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
