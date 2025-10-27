import { Button } from "@/components/ui/button";
import { Award, ArrowRight } from "lucide-react";

const TrustPillar = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <Award className="w-10 h-10 text-primary" />
            </div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Confiança validada pelo mercado e pelo setor público
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          {/* Content */}
          <div className="space-y-8 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fomos a incorporadora responsável pela execução do <strong className="text-foreground">Residencial Europa (Fases I e II)</strong>, 
              um projeto de alta complexidade em parceria com o Governo de Goiás e a Agehab.
            </p>

            {/* Quote */}
            <blockquote className="relative py-8 px-8 bg-secondary rounded-xl border-l-4 border-primary">
              <div className="text-6xl text-primary/20 absolute top-4 left-4">"</div>
              <p className="text-xl text-foreground italic relative z-10 leading-relaxed">
                A parceria com uma agência governamental atesta a capacidade técnica, 
                a estabilidade financeira e os padrões éticos da MP Incorporadora.
              </p>
            </blockquote>

            {/* CTA */}
            <div className="pt-4">
              <Button size="lg" variant="default" className="group">
                Conheça o case do Residencial Europa
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPillar;
