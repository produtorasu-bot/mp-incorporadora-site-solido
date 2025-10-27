import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Encontre o seu lugar ideal
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Fale com nossa equipe de especialistas e descubra o projeto da MP Incorporadora 
            que mais combina com você.
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <Button 
              size="lg" 
              variant="secondary"
              className="group text-lg px-10 py-6 hover:scale-105 transition-all duration-300 shadow-xl"
              asChild
            >
              <a 
                href="https://wa.me/5564992433094?text=Oi,%20vim%20do%20site%20da%20MP%20e%20quero%20conhecer%20os%20empreendimentos!" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-5 w-5" />
                Fale com um consultor
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-8 h-8" />
              <div className="text-sm font-semibold">Telefone</div>
              <div className="text-white/80">(64) 9 9243-3094</div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-8 h-8" />
              <div className="text-sm font-semibold">E-mail</div>
              <div className="text-white/80">comercail@mpincorporadora.com.br</div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-8 h-8" />
              <div className="text-sm font-semibold">Localização</div>
              <div className="text-white/80 text-center">
                Avenida Osvaldo Cruz, Sala 85<br />
                Setor Rodoviário, Afonso Pena<br />
                Itumbiara, Goiás
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
