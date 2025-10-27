import { Target, Heart, Award } from "lucide-react";

const OurCommitment = () => {
  const commitments = [
    {
      icon: Target,
      title: "Missão",
      description: "Buscar excelência na construção e comercialização de empreendimentos, superando as expectativas dos nossos clientes.",
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Sustentabilidade, Excelência e Respeito guiam cada decisão e cada projeto que realizamos.",
    },
    {
      icon: Award,
      title: "Política de Qualidade",
      description: "Construir obras com qualidade, alcançando a satisfação dos nossos clientes por meio da melhoria contínua dos processos e do comprometimento de toda a equipe.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float animation-delay-400" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">O alicerce do nosso sucesso</span>
          </h2>
          <div className="w-32 h-1.5 gradient-primary mx-auto rounded-full shadow-glow" />
        </div>

        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group p-10 glass-card rounded-3xl border-2 border-border hover:border-primary/50 hover:shadow-3d transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="mb-8 flex justify-center">
                  <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-500 group-hover:scale-110 rotate-6 group-hover:rotate-12">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-center leading-relaxed text-base">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
