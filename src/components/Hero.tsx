import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Award, Users } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl" />
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-10 w-32 h-32 border border-white/10 rounded-lg rotate-12 animate-float" />
        <div className="absolute bottom-1/3 right-16 w-24 h-24 border border-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Trust Badges Row */}
          <div className="mb-8 sm:mb-10 animate-fade-in flex justify-center gap-4 sm:gap-6 flex-wrap">
            <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="text-xs sm:text-sm text-white font-medium">10+ Anos</span>
            </div>
            <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="text-xs sm:text-sm text-white font-medium">5 Empreendimentos</span>
            </div>
            <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="text-xs sm:text-sm text-white font-medium">Centenas de Famílias</span>
            </div>
          </div>

          {/* Logo */}
          <div className="mb-6 sm:mb-8 animate-fade-in animation-delay-200 flex justify-center">
            <div className="glass-card p-3 sm:p-4 rounded-2xl shadow-elegant hover:scale-105 transition-transform">
              <img 
                src={logo} 
                alt="MP Incorporadora - Empreendimentos Imobiliários em Itumbiara-GO" 
                className="h-12 sm:h-16 lg:h-20 w-auto" 
                width="auto"
                height="80"
              />
            </div>
          </div>

          {/* Title with Gradient */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 animate-fade-in-up animation-delay-400 leading-tight text-center px-2">
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent drop-shadow-lg">
              MP Incorporadora
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-600 text-center px-4 leading-relaxed">
            Desde 2013, sinônimo de <span className="font-semibold text-white">excelência e inovação</span> em empreendimentos imobiliários.
          </p>

          {/* Highlight Feature */}
          <div className="mb-8 sm:mb-12 animate-fade-in-up animation-delay-800 flex justify-center px-4">
            <div className="glass-card px-6 py-3 rounded-2xl border border-white/20">
              <p className="text-sm sm:text-base text-white/95 text-center">
                🏗️ Transformando sonhos em realidade com <span className="font-semibold">qualidade e confiança</span>
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-1000 flex justify-center px-4">
            <Button
              size="lg" 
              className="group text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 lg:py-7 bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-elegant rounded-full font-semibold w-full max-w-sm sm:max-w-md md:max-w-none md:w-auto text-center leading-tight"
              onClick={() => {
                const projectsSection = document.querySelector('#empreendimentos');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <span className="block">Conheça nossa história</span>
              <span className="block">e empreendimentos</span>
              <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform inline-block mt-1" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden sm:block" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 glass">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
