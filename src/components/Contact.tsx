
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-wider uppercase mb-8 animate-fade-in">
            Contactez-Nous
          </h2>
          <div className="w-24 h-px bg-white mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-8 tracking-wide">
                Informations de Contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">(450) 123-4567</p>
                    <p className="text-white/70 text-sm">Disponible 7j/7</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">info@kbkprestige.com</p>
                    <p className="text-white/70 text-sm">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Repentigny & environs</p>
                    <p className="text-white/70 text-sm">Service mobile</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Lun-Sam 8h-18h</p>
                    <p className="text-white/70 text-sm">Dimanche sur demande</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link to="/devis">
                <Button 
                  size="lg"
                  className="group w-full bg-white text-black hover:bg-gray-100 font-semibold tracking-wider uppercase py-4 text-lg transition-all duration-300"
                  onMouseEnter={() => setShowArrow(true)}
                  onMouseLeave={() => setShowArrow(false)}
                >
                  <span className="flex items-center space-x-2">
                    <span>Demander un devis détaillé</span>
                    <ArrowRight 
                      className={`w-5 h-5 transition-all duration-300 ${
                        showArrow 
                          ? 'translate-x-0 opacity-100' 
                          : 'translate-x-[-10px] opacity-0'
                      }`}
                    />
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Google Maps */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-display font-bold text-white mb-6 tracking-wide">
                Zones Desservies
              </h3>
              
              {/* Google Maps Placeholder */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-lg overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179387.2658841429!2d-73.61!3d45.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc93dd1e4b6b5a5%3A0x5037b28c7231310!2sRepentigny%2C+QC!5e0!3m2!1sen!2sca!4v1625000000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>

              {/* Service Note */}
              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-white/90 text-sm text-center">
                  <span className="font-semibold">Service étendu disponible</span> - 
                  Nous acceptons les mandats exceptionnels en dehors de notre secteur principal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
