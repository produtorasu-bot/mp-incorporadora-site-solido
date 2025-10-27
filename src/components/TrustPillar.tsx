import { Button } from "@/components/ui/button";
import { Award, ArrowRight } from "lucide-react";

const TrustPillar = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center mb-10 animate-fade-in">
            <div className="w-24 h-24 gradient-accent rounded-3xl flex items-center justify-center shadow-3d animate-glow-pulse rotate-6 hover:rotate-12 transition-transform duration-500">
              <Award className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up animation-delay-200">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Confiança validada pelo mercado</span>
              <br />
              <span className="text-gradient">e pelo setor público</span>
            </h2>
            <div className="w-32 h-1.5 gradient-primary mx-auto rounded-full shadow-glow" />
          </div>

          {/* Content */}
          <div className="space-y-10 text-center animate-fade-in-up animation-delay-400">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Fomos a incorporadora responsável pela execução do <strong className="text-foreground font-bold">Residencial Europa (Fases I e II)</strong>, 
              um projeto de alta complexidade em parceria com o Governo de Goiás e a Agehab.
            </p>

            {/* Quote */}
            <blockquote className="relative py-10 px-10 glass-card rounded-3xl border-l-4 border-primary shadow-3d">
              <div className="text-7xl text-primary/20 absolute top-6 left-6 font-serif">"</div>
              <p className="text-xl sm:text-2xl text-foreground italic relative z-10 leading-relaxed font-medium">
                A parceria com uma agência governamental atesta a capacidade técnica, 
                a estabilidade financeira e os padrões éticos da MP Incorporadora.
              </p>
            </blockquote>

            {/* CTA */}
            <div className="pt-6">
              <Button 
                size="lg" 
                className="group text-lg px-10 py-7 gradient-accent hover:shadow-glow transition-all duration-500 hover:scale-105 rounded-2xl font-bold border-0 text-white"
              >
                Conheça o case do Residencial Europa
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPillar;
