import { Compass, Gem, Trophy } from "lucide-react";

const OurCommitment = () => {
  const commitments = [
    {
      icon: Compass,
      title: "Missão",
      description: "Buscar excelência na construção e comercialização de empreendimentos, superando as expectativas dos nossos clientes.",
    },
    {
      icon: Gem,
      title: "Valores",
      description: "Sustentabilidade, Excelência e Respeito guiam cada decisão e cada projeto que realizamos.",
    },
    {
      icon: Trophy,
      title: "Política de Qualidade",
      description: "Construir obras com qualidade, alcançando a satisfação dos nossos clientes por meio da melhoria contínua dos processos e do comprometimento de toda a equipe.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            O alicerce do nosso sucesso
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-card rounded-xl border border-border hover:border-primary hover:shadow-elegant transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground text-center mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-center leading-relaxed">
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
