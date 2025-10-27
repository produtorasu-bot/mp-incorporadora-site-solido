import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight } from "lucide-react";

const OurJourney = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float animation-delay-400" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Icon & Visual */}
            <div className="flex justify-center lg:justify-start animate-fade-in-left">
              <div className="relative">
                <div className="w-72 h-72 glass-card rounded-full flex items-center justify-center shadow-3d border-2 border-primary/20">
                  <div className="w-48 h-48 gradient-primary rounded-full flex items-center justify-center animate-glow-pulse">
                    <TrendingUp className="w-24 h-24 text-white" />
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 gradient-accent text-white rounded-3xl w-32 h-32 flex flex-col items-center justify-center shadow-3d rotate-6 hover:rotate-12 transition-transform duration-500">
                  <div className="text-4xl font-bold">10+</div>
                  <div className="text-sm text-center font-semibold">Anos de<br/>Experiência</div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8 animate-fade-in-right">
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-gradient">Mais de uma década</span>
                  <br />
                  <span className="text-gradient">de evolução</span>
                </h2>
                <div className="w-32 h-1.5 gradient-primary rounded-full shadow-glow" />
              </div>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Nossa jornada começou em <strong className="text-foreground font-bold">2013</strong>, construindo uma base sólida de confiança 
                com a entrega de <strong className="text-foreground font-bold">centenas de unidades habitacionais</strong> no segmento popular.
              </p>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Hoje, evoluímos estrategicamente para os segmentos de <strong className="text-foreground font-bold">médio e alto padrão</strong>, 
                incluindo <strong className="text-foreground font-bold">condomínios verticais multifamiliares</strong>.
              </p>

              <div className="pt-6">
                <a href="/nossa-historia">
                  <Button 
                    size="lg" 
                    className="group text-lg px-10 py-7 gradient-primary hover:shadow-glow transition-all duration-500 hover:scale-105 rounded-2xl font-bold border-0 text-white"
                  >
                    Conheça nossa história
                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
