import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const [showArrow, setShowArrow] = useState(false);

  return (
    <section id="contact" className="py-24 lg:py-32 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-wider uppercase mb-6">
            Contactez-Nous
          </h2>
          <div className="w-24 h-px bg-white mx-auto" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Colonne gauche */}
          <div className="space-y-10">
            <h3 className="text-2xl font-display font-bold text-white tracking-wide text-center sm:text-left">
              Informations de Contact
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: "(450) 123-4567",
                  subtitle: "Disponible 7j/7"
                },
                {
                  icon: Mail,
                  title: "info@kbkprestige.com",
                  subtitle: "Réponse sous 24h"
                },
                {
                  icon: MapPin,
                  title: "Repentigny & environs",
                  subtitle: "Service mobile"
                },
                {
                  icon: Clock,
                  title: "Lun-Sam 8h-18h",
                  subtitle: "Dimanche sur demande"
                },
              ].map(({ icon: Icon, title, subtitle }, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 space-y-2 sm:space-y-0"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold text-base">{title}</p>
                    <p className="text-white/70 text-sm">{subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 px-4 sm:px-0">
              <Link to="/devis">
                <Button
                  size="lg"
                  className="group w-full bg-white text-black hover:bg-gray-100 font-semibold tracking-wider uppercase py-4 text-base transition-all duration-300"
                  onMouseEnter={() => setShowArrow(true)}
                  onMouseLeave={() => setShowArrow(false)}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Demander un devis</span>
                    <ArrowRight
                      className={`w-5 h-5 transition-all duration-300 ${
                        showArrow
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-2 opacity-0"
                      }`}
                    />
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Colonne droite : carte */}
          <div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
              <div className="w-full h-[300px] sm:h-[400px]">
                <iframe
                  title="Zone desservie"
                  src="https://www.google.com/maps/d/u/0/embed?mid=1OqiuRwfNM-VP0bRBJ3flz-zsKy8dDcI&ehbc=2E312F&noprof=1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-4 text-white/90 text-sm text-center border-t border-white/10 bg-black/30">
                <span className="font-semibold">Service étendu disponible</span> – nous acceptons les mandats exceptionnels hors zone principale.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
