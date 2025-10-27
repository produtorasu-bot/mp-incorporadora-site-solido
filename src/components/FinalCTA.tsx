import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <header className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Encontre o seu lugar ideal
            </h2>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Fale com nossa equipe de especialistas e descubra o projeto da MP Incorporadora 
              que mais combina com você.
            </p>
          </header>

          {/* CTA Button */}
          <div className="mb-12 sm:mb-16">
            <Button 
              size="lg" 
              variant="secondary"
              className="group text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 hover:scale-105 transition-all duration-300 shadow-xl w-full sm:w-auto"
              asChild
            >
              <a 
                href="https://wa.me/5564992433094?text=Oi,%20vim%20do%20site%20da%20MP%20e%20quero%20conhecer%20os%20empreendimentos!" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Entre em contato via WhatsApp"
              >
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                Fale com um consultor
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <footer className="grid sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-white/20">
            <address className="flex flex-col items-center space-y-2 not-italic">
              <Phone className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />
              <div className="text-sm font-semibold">Telefone</div>
              <a href="tel:+5564992433094" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                (64) 9 9243-3094
              </a>
            </address>

            <address className="flex flex-col items-center space-y-2 not-italic">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />
              <div className="text-sm font-semibold">E-mail</div>
              <a href="mailto:comercail@mpincorporadora.com.br" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                comercail@mpincorporadora.com.br
              </a>
            </address>

            <address className="flex flex-col items-center space-y-2 not-italic">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />
              <div className="text-sm font-semibold">Localização</div>
              <div className="text-sm sm:text-base text-white/80 text-center">
                Avenida Osvaldo Cruz, Sala 85<br />
                Setor Rodoviário, Afonso Pena<br />
                Itumbiara, Goiás
              </div>
            </address>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
