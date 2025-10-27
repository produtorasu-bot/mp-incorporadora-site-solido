import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src={logo} 
              alt="MP Incorporadora" 
              className="h-20 sm:h-24 w-auto drop-shadow-2xl" 
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up leading-tight drop-shadow-2xl">
            MP Incorporadora
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white mb-10 max-w-2xl animate-fade-in-up animation-delay-200 drop-shadow-xl">
            Desde 2013, sinônimo de excelência e inovação em empreendimentos imobiliários.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-400">
            <Button 
              size="lg" 
              className="group text-lg px-8 py-6 bg-primary hover:bg-accent transition-all duration-300 hover:scale-105 shadow-elegant"
            >
              Conheça os empreendimentos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
