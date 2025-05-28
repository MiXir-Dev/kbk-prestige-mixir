
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Realisations from "@/components/Realisations";
import Services from "@/components/Services";
import About from "@/components/About";
import AvantApres from "@/components/AvantApres";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Realisations />
      <Services />
      <AvantApres />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
