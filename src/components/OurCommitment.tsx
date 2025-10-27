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
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O alicerce do nosso sucesso
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </header>

        {/* Three Columns */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={index}
                className="group p-6 sm:p-8 bg-card rounded-xl border border-border hover:border-primary hover:shadow-elegant transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" aria-hidden="true" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground text-center leading-relaxed">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
