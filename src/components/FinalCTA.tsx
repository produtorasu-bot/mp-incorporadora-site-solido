import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-primary animate-gradient-shift" style={{ backgroundSize: "200% 200%" }} />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent rounded-full blur-3xl animate-float animation-delay-200" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Glass Card Container */}
          <div className="glass-card rounded-3xl p-10 sm:p-16 shadow-3d text-center">
            {/* Section Header */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
              Encontre o seu lugar ideal
            </h2>
            
            <p className="text-xl sm:text-2xl text-foreground/80 mb-14 max-w-3xl mx-auto leading-relaxed">
              Fale com nossa equipe de especialistas e descubra o projeto da MP Incorporadora 
              que mais combina com você.
            </p>

            {/* CTA Button */}
            <div className="mb-16">
              <Button 
                size="lg" 
                className="group text-lg px-12 py-8 gradient-accent hover:shadow-glow transition-all duration-500 hover:scale-110 rounded-2xl font-bold border-0 text-white shadow-3d"
                asChild
              >
                <a 
                  href="https://wa.me/5564992433094?text=Oi,%20vim%20do%20site%20da%20MP%20e%20quero%20conhecer%20os%20empreendimentos!" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  Fale com um consultor
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-3 gap-10 pt-12 border-t-2 border-primary/20">
              <div className="flex flex-col items-center space-y-3 group">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-500 group-hover:scale-110 rotate-6 group-hover:rotate-12">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-bold text-foreground uppercase tracking-wider">Telefone</div>
                <div className="text-foreground/70 font-medium">(64) 9 9243-3094</div>
              </div>

              <div className="flex flex-col items-center space-y-3 group">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-500 group-hover:scale-110 rotate-6 group-hover:rotate-12">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-bold text-foreground uppercase tracking-wider">E-mail</div>
                <div className="text-foreground/70 font-medium">comercail@mpincorporadora.com.br</div>
              </div>

              <div className="flex flex-col items-center space-y-3 group">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-500 group-hover:scale-110 rotate-6 group-hover:rotate-12">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-bold text-foreground uppercase tracking-wider">Localização</div>
                <div className="text-foreground/70 font-medium text-center">
                  Avenida Osvaldo Cruz, Sala 85<br />
                  Setor Rodoviário, Afonso Pena<br />
                  Itumbiara, Goiás
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
