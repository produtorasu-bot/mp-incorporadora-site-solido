import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Award, Users } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in flex justify-center">
            <div className="glass-card p-4 rounded-2xl">
              <img 
                src={logo} 
                alt="MP Incorporadora" 
                className="h-16 sm:h-20 w-auto" 
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up leading-tight text-center">
            MP Incorporadora
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-200 text-center">
            Desde 2013, sinônimo de excelência e inovação em empreendimentos imobiliários.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-200">
            <div className="glass px-6 py-3 rounded-full flex items-center gap-2 text-white">
              <Building2 className="w-5 h-5" />
              <span className="font-medium">Projetos de Qualidade</span>
            </div>
            <div className="glass px-6 py-3 rounded-full flex items-center gap-2 text-white">
              <Award className="w-5 h-5" />
              <span className="font-medium">Excelência Garantida</span>
            </div>
            <div className="glass px-6 py-3 rounded-full flex items-center gap-2 text-white">
              <Users className="w-5 h-5" />
              <span className="font-medium">Atendimento Personalizado</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-400 flex justify-center">
            <Button 
              size="lg" 
              className="group text-lg px-10 py-7 bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-elegant rounded-full font-semibold"
            >
              Conheça os empreendimentos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 glass">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
