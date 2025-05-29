import { Car, Shield, Zap, Users, Clock, MapPin, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Excellence",
      description: "Produits haut de gamme et résultats impeccables"
    },
    {
      icon: Car,
      title: "Service Mobile",
      description: "Nous venons directement chez vous, sans compromis"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Méthodes modernes, efficaces et respectueuses"
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
    <section id="about" className="bg-black text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wide mb-4">
          KBK Prestige
        </h2>
        <p className="text-white/70 text-lg max-w-xl mx-auto mb-16">
          L'excellence du détaillage automobile mobile, adaptée à votre quotidien.
        </p>

        {/* Valeurs clés */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {values.map(({ icon: Icon, title, description }, i) => (
            <div key={i} className="border border-white/10 p-6 rounded-lg bg-white/5 text-left">
              <div className="mb-4 flex items-center gap-3">
                <Icon className="w-6 h-6 text-white" />
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="text-white/70 text-sm">{description}</p>
            </div>
          ))}
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20">
          {stats.map(({ icon: Icon, number, label }, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center mb-2">
                <Icon className="w-6 h-6 text-white/80" />
              </div>
              <div className="text-2xl font-bold">{number}</div>
              <div className="text-white/60 text-sm">{label}</div>
            </div>
          ))}
        </div>

        {/* Zones desservies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-4">Zones Desservies</h3>
          <p className="text-white/60 mb-6 text-sm">
            Intervention rapide dans la région de Lanaudière
          </p>
          <div className="flex flex-wrap justify-center gap-3">
          {zones.map((zone) => (
            <div key={zone} className="bg-white/10 text-white text-sm py-2 px-4 rounded-full flex items-center gap-2 min-w-[160px] justify-start sm:justify-center text-left sm:text-center">
              <MapPin className="w-4 h-4" />
              {zone}
            </div>
          ))}
          </div>
        </div>

        {/* Appel à l'action */}
        <div className="mt-10">
          <Link to="/devis">
            <button className="bg-white text-black font-semibold px-6 py-3 hover:bg-gray-100 transition">
              Demander un devis personnalisé →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
