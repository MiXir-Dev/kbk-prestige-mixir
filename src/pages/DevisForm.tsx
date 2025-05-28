
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight, Upload, Check, Phone, Mail, Car } from "lucide-react";
import { Link } from "react-router-dom";

const DevisForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    prenom: "",
    telephone: "",
    typeService: "",
    optionsSupplementaires: [] as string[],
    besoinsSpecifiques: "",
    photos: null as FileList | null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const services = [
    "Lavage complet intérieur/extérieur",
    "Lavage extérieur premium",
    "Nettoyage intérieur en profondeur",
    "Détaillage complet",
    "Traitement cuir et plastiques",
    "Décontamination peinture",
    "Protection céramique",
    "Service sur mesure"
  ];

  const optionsSupplementaires = [
    "Nettoyage des jantes",
    "Shampooing des sièges",
    "Traitement anti-odeurs",
    "Cirage et protection",
    "Nettoyage du coffre",
    "Désinfection complète"
  ];

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here would be the actual form submission logic
    console.log("Form submitted:", formData);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, photos: event.target.files });
  };

  const toggleOption = (option: string) => {
    const updatedOptions = formData.optionsSupplementaires.includes(option)
      ? formData.optionsSupplementaires.filter(opt => opt !== option)
      : [...formData.optionsSupplementaires, option];
    setFormData({ ...formData, optionsSupplementaires: updatedOptions });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-display font-bold text-white mb-6">
              Demande Envoyée !
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Merci pour votre demande de devis. Notre équipe vous contactera sous 24h 
              pour confirmer votre soumission et planifier votre service.
            </p>
            <div className="space-y-4 text-white/70 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>(450) 123-4567</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>info@kbkprestige.com</span>
              </div>
            </div>
            <Link to="/">
              <Button className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-3">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-white/10 py-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4 text-white hover:text-white/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold tracking-wide">Retour</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <img 
              src="/logo.png" 
              alt="KBK Prestige Logo" 
              className="w-8 h-8 object-contain"
            />
            <h1 className="text-2xl md:text-3xl font-display font-black text-white tracking-widest">
              KBK PRESTIGE
            </h1>
          </div>
          
          <div className="w-20"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Title & Progress */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-wider uppercase mb-4">
              Obtenez votre devis gratuit
            </h2>
            <p className="text-lg text-white/70 mb-8">
              En moins de 2 minutes • Réponse sous 24h
            </p>
            
            {/* Progress Bar */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    currentStep >= step 
                      ? 'bg-white text-black' 
                      : 'bg-white/20 text-white/60'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 mx-2 transition-all duration-300 ${
                      currentStep > step ? 'bg-white' : 'bg-white/20'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Step 1: Contact Information */}
              {currentStep === 1 && (
                <div className="space-y-8 animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-display font-bold text-white mb-4">
                      Vos informations de contact
                    </h3>
                    <p className="text-white/70">
                      Pour que nous puissions vous recontacter rapidement
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-white/90 font-medium text-lg">
                        Adresse e-mail *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/50 h-12 text-lg"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="prenom" className="text-white/90 font-medium text-lg">
                        Prénom *
                      </Label>
                      <Input
                        id="prenom"
                        type="text"
                        required
                        value={formData.prenom}
                        onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/50 h-12 text-lg"
                        placeholder="Votre prénom"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="telephone" className="text-white/90 font-medium text-lg">
                      Numéro de téléphone *
                    </Label>
                    <Input
                      id="telephone"
                      type="tel"
                      required
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/50 h-12 text-lg"
                      placeholder="(450) 123-4567"
                    />
                  </div>

                  <div className="flex justify-end pt-6">
                    <Button 
                      type="button"
                      onClick={handleNextStep}
                      size="lg"
                      className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
                      disabled={!formData.email || !formData.prenom || !formData.telephone}
                    >
                      Continuer
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Service Details */}
              {currentStep === 2 && (
                <div className="space-y-8 animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-display font-bold text-white mb-4">
                      Détails du service
                    </h3>
                    <p className="text-white/70">
                      Sélectionnez le type de service souhaité
                    </p>
                  </div>

                  <div>
                    <Label className="text-white/90 font-medium text-lg mb-4 block">
                      Type de service principal *
                    </Label>
                    <Select value={formData.typeService} onValueChange={(value) => setFormData({ ...formData, typeService: value })}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white h-12 text-lg">
                        <SelectValue placeholder="Choisissez votre service" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-900 border-white/20">
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-white/90 font-medium text-lg mb-4 block">
                      Options supplémentaires (optionnel)
                    </Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {optionsSupplementaires.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => toggleOption(option)}
                          className={`p-4 rounded-lg border transition-all duration-200 text-left ${
                            formData.optionsSupplementaires.includes(option)
                              ? 'bg-white/20 border-white/40 text-white'
                              : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                              formData.optionsSupplementaires.includes(option)
                                ? 'border-white bg-white'
                                : 'border-white/40'
                            }`}>
                              {formData.optionsSupplementaires.includes(option) && (
                                <Check className="w-3 h-3 text-black" />
                              )}
                            </div>
                            <span className="font-medium">{option}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="besoins" className="text-white/90 font-medium text-lg">
                      Précisez votre besoin ou votre véhicule
                    </Label>
                    <Textarea
                      id="besoins"
                      value={formData.besoinsSpecifiques}
                      onChange={(e) => setFormData({ ...formData, besoinsSpecifiques: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/50 min-h-[120px] text-lg"
                      placeholder="Ex: BMW X5 2020, très sale, taches sur les sièges..."
                    />
                  </div>

                  <div className="flex justify-between pt-6">
                    <Button 
                      type="button"
                      onClick={handlePreviousStep}
                      size="lg"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg"
                    >
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Retour
                    </Button>
                    <Button 
                      type="button"
                      onClick={handleNextStep}
                      size="lg"
                      className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
                      disabled={!formData.typeService}
                    >
                      Étape suivante
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Photos & Confirmation */}
              {currentStep === 3 && (
                <div className="space-y-8 animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-display font-bold text-white mb-4">
                      Photos et confirmation
                    </h3>
                    <p className="text-white/70">
                      Ajoutez des photos de votre véhicule pour un devis plus précis
                    </p>
                  </div>

                  <div>
                    <Label className="text-white/90 font-medium text-lg mb-4 block">
                      Photos du véhicule (facultatif)
                    </Label>
                    <label className="block">
                      <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-white/40 transition-colors cursor-pointer bg-white/5">
                        <Upload className="w-12 h-12 text-white/60 mx-auto mb-4" />
                        <p className="text-white/80 text-lg font-medium mb-2">
                          Cliquez pour ajouter des photos
                        </p>
                        <p className="text-white/60">
                          PNG, JPG jusqu'à 10MB • Maximum 5 photos
                        </p>
                        {formData.photos && (
                          <p className="text-white/80 mt-4 font-medium">
                            {formData.photos.length} fichier(s) sélectionné(s)
                          </p>
                        )}
                      </div>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Summary */}
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Car className="w-5 h-5 mr-2" />
                      Résumé de votre demande
                    </h4>
                    <div className="space-y-2 text-white/80">
                      <p><span className="font-medium">Contact:</span> {formData.prenom} • {formData.email}</p>
                      <p><span className="font-medium">Service:</span> {formData.typeService}</p>
                      {formData.optionsSupplementaires.length > 0 && (
                        <p><span className="font-medium">Options:</span> {formData.optionsSupplementaires.join(', ')}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between pt-6">
                    <Button 
                      type="button"
                      onClick={handlePreviousStep}
                      size="lg"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg"
                    >
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Retour
                    </Button>
                    <Button 
                      type="submit"
                      size="lg"
                      className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
                    >
                      Envoyer ma demande
                      <Check className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-8 text-white/60">
            <p>Nous vous contacterons sous 24h pour confirmer votre soumission.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DevisForm;
