import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Award } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-primary animate-gradient-shift" style={{ backgroundSize: "200% 200%" }} />
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float animation-delay-400" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary rounded-full blur-3xl animate-float animation-delay-200" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Glass Card Container */}
          <div className="glass-card rounded-3xl p-8 sm:p-12 shadow-3d">
            {/* Logo */}
            <div className="mb-8 animate-fade-in flex justify-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-glass">
                <img 
                  src={logo} 
                  alt="MP Incorporadora" 
                  className="h-16 sm:h-20 w-auto" 
                />
              </div>
            </div>

            {/* Title with Gradient */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center mb-6 animate-fade-in-up leading-tight">
              <span className="text-gradient">MP Incorporadora</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-foreground/90 text-center mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 font-medium">
              Desde 2013, sinônimo de excelência e inovação em empreendimentos imobiliários.
            </p>

            {/* Features Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-primary/20 shadow-subtle">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">Qualidade Premium</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-primary/20 shadow-subtle">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">Valorização Garantida</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-primary/20 shadow-subtle">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">Confiança Comprovada</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center animate-fade-in-up animation-delay-600">
              <Button 
                size="lg" 
                className="group text-lg px-10 py-7 gradient-primary hover:shadow-glow transition-all duration-500 hover:scale-105 rounded-2xl font-bold border-0 text-white"
              >
                Conheça os empreendimentos
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-white/10">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
