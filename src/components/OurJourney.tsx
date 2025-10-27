import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight } from "lucide-react";

const OurJourney = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Icon & Visual */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-64 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-32 h-32 text-primary" />
                </div>
                <div className="absolute -top-4 -right-4 bg-accent text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-elegant">
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-xs text-center">Anos de<br/>Experiência</div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                  Mais de uma década de evolução
                </h2>
                <div className="w-24 h-1 bg-primary" />
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa jornada começou em <strong className="text-foreground">2013</strong>, construindo uma base sólida de confiança 
                com a entrega de <strong className="text-foreground">centenas de unidades habitacionais</strong> no segmento popular.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Hoje, evoluímos estrategicamente para os segmentos de <strong className="text-foreground">médio e alto padrão</strong>, 
                incluindo <strong className="text-foreground">condomínios verticais multifamiliares</strong>.
              </p>

              <div className="pt-4">
                <a href="/nossa-historia">
                  <Button size="lg" variant="default" className="group">
                    Conheça nossa história
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
