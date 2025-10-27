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
            >
              <Phone className="mr-2 h-5 w-5" />
              Fale com um consultor
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-8 h-8" />
              <div className="text-sm font-semibold">Telefone</div>
              <div className="text-white/80">(62) 3000-0000</div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-8 h-8" />
              <div className="text-sm font-semibold">E-mail</div>
              <div className="text-white/80">contato@mpincorporadora.com.br</div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-8 h-8" />
              <div className="text-sm font-semibold">Localização</div>
              <div className="text-white/80">Goiânia, GO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
