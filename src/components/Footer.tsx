
import { Car, MapPin, Clock, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl md:text-4xl font-display font-black text-white tracking-widest">
                KBK PRESTIGE
              </h3>
              <div className="w-16 h-px bg-white mt-2"></div>
            </div>
            <p className="text-white/70 text-lg leading-relaxed max-w-md mb-6">
              Service de lavage automobile mobile haut de gamme. 
              Nous redéfinissons l'excellence dans le détaillage automobile.
            </p>
            <Link to="/devis">
              <button className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-white/90 transition-colors tracking-wide uppercase text-sm">
                Demander un devis
              </button>
            </Link>
          </div>

          {/* Contact Quick */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 tracking-wide">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white/60" />
                <span className="text-white/80">(450) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white/60" />
                <span className="text-white/80">info@kbkprestige.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-white/60" />
                <span className="text-white/80">Repentigny & environs</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-white/60" />
                <span className="text-white/80">Lun-Sam 8h-18h</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 tracking-wide">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li>Lavage à la main sans contact</li>
              <li>Nettoyage complet</li>
              <li>Traitement du cuir</li>
              <li>Désinfection antibactérienne</li>
              <li>Service mobile</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Car className="w-5 h-5 text-white/60" />
              <p className="text-white/60 text-sm">
                © 2024 KBK Prestige. Tous droits réservés.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://wa.me/4501234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors text-sm font-medium"
              >
                WhatsApp
              </a>
              <a 
                href="https://instagram.com/kbkprestige" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors text-sm font-medium"
              >
                Instagram
              </a>
              <button className="text-white/60 hover:text-white transition-colors text-sm">
                Politique de confidentialité
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
