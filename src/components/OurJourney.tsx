import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const OurJourney = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Column - Badge */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="bg-gradient-to-br from-accent to-primary text-white rounded-2xl w-56 h-56 sm:w-64 sm:h-64 flex flex-col items-center justify-center shadow-elegant glass-card">
                <div className="text-6xl sm:text-7xl font-bold mb-2">10+</div>
                <div className="text-lg sm:text-xl font-semibold text-center">Anos de<br/>Experiência</div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <header>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Mais de uma década de evolução
                </h2>
                <div className="w-24 h-1 bg-primary" />
              </header>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Nossa jornada começou em <strong className="text-foreground">2013</strong>, construindo uma base sólida de confiança 
                com a entrega de <strong className="text-foreground">centenas de unidades habitacionais</strong> no segmento popular.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Hoje, evoluímos estrategicamente para os segmentos de <strong className="text-foreground">médio e alto padrão</strong>, 
                incluindo <strong className="text-foreground">condomínios verticais multifamiliares</strong>.
              </p>

              <div className="pt-4">
                <a href="/nossa-historia" aria-label="Conheça a história completa da MP Incorporadora">
                  <Button size="lg" variant="default" className="group w-full sm:w-auto">
                    Conheça nossa história
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
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
