import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo-hd.png";
import heroEmpreendimento from "@/assets/hero-empreendimento.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0" aria-hidden="true">
        <img 
          src={heroEmpreendimento} 
          alt="Empreendimento MP Incorporadora" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A4FA8]/65 via-[#2763C4]/60 to-[#2763C4]/55" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="glass-card p-3 sm:p-4 rounded-2xl">
              <img 
                src={logo} 
                alt="MP Incorporadora - Empreendimentos Imobiliários em Itumbiara-GO" 
                className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain" 
                width="auto"
                height="80"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up leading-tight text-center px-2">
            MP Incorporadora
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-200 text-center px-4">
            Desde 2013, sinônimo de excelência e inovação em empreendimentos imobiliários.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-400 flex justify-center px-4">
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
