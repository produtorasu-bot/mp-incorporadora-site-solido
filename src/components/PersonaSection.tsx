import arianaImage from "@/assets/ariana-persona.jpg";
import housingBackground from "@/assets/housing-background.png";

const PersonaSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image - Housing */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${housingBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary/90 via-primary/70 to-transparent" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
        {/* Ariana Image with glow effect */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full" />
          <img
            src={arianaImage}
            alt="Ariana Campos - Fundadora da MP Incorporadora"
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-elegant border-4 border-white/20"
          />
        </div>
        
        {/* Text Content */}
        <div className="text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ariana Campos
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Fundadora da MP Incorporadora
          </p>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Com visão empreendedora e comprometimento com a excelência, 
            Ariana lidera projetos que transformam sonhos em realidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonaSection;
