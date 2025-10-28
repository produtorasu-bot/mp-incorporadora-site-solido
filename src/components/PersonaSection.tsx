import arianaImage from "@/assets/ariana-persona.jpg";
import housingBackground from "@/assets/housing-paranaiba-facade.png";

const PersonaSection = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Housing Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <img 
          src={housingBackground} 
          alt="Housing Paranaíba Fachada" 
          className="w-full h-full object-cover"
        />
        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Ariana Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-2xl" />
              <img 
                src={arianaImage} 
                alt="Ariana - Fundadora MP Incorporadora" 
                className="relative w-full max-w-md rounded-2xl shadow-elegant"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ariana Martins
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-4">
              Fundadora da MP Incorporadora
            </p>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Com visão empreendedora e dedicação, Ariana lidera a MP Incorporadora na missão de transformar sonhos em realidade, entregando empreendimentos de excelência que marcam a história de Itumbiara-GO.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonaSection;
