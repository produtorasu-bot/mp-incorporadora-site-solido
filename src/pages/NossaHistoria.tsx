import { Target, Eye, Heart, Award, Building2, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NossaHistoria = () => {
  const timeline = [
    {
      year: "2013",
      title: "A Gênese",
      description: "A MP Incorporadora foi fundada em 2013, inserindo-se no dinâmico mercado de habitação de Itumbiara, Goiás. O objetivo era claro: oferecer soluções de moradia que aliassem qualidade e acessibilidade.",
      icon: Building2,
    },
    {
      year: "2013-2018",
      title: "Fase 1 - A Base Sólida",
      subtitle: "Habitação Popular",
      description: "Nos primeiros anos, concentramos nossos esforços no segmento de empreendimentos populares. Esta fase foi crucial para construir nossa reputação, entregando centenas de unidades habitacionais e estabelecendo um relacionamento de confiança com a comunidade local. Este histórico é a prova do nosso compromisso de longa data e capacidade de entrega.",
      icon: Users,
    },
    {
      year: "2019-Presente",
      title: "Fase 2 - Expansão Estratégica",
      description: "Com uma reputação estabelecida, iniciamos uma expansão deliberada para os segmentos de alto e médio padrão. Um marco foi nossa incursão em condomínios verticais multifamiliares, demonstrando nossa capacidade de gerir projetos de nível superior de complexidade técnica e financeira.",
      icon: TrendingUp,
    },
  ];

  const philosophy = [
    {
      icon: Target,
      title: "Missão",
      description: "Buscar excelência na construção e comercialização de empreendimentos, superando as expectativas dos nossos clientes, garantindo a entrega rápida e a qualidade do produto final.",
      color: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser uma empresa referência em qualidade, inovação e confiança em Itumbiara e região.",
      color: "bg-accent/10",
      iconColor: "text-accent",
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Sustentabilidade, Excelência e Respeito guiam cada decisão e cada projeto que realizamos.",
      color: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Award,
      title: "Política de Qualidade",
      description: "Construir obras com qualidade, alcançando a satisfação dos nossos clientes por meio da melhoria contínua dos processos, inovação e comprometimento com a sustentabilidade.",
      color: "bg-accent/10",
      iconColor: "text-accent",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-accent overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Nossa História
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 animate-fade-in animation-delay-200">
              Mais de uma década construindo qualidade e confiança.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`relative mb-16 last:mb-0 animate-fade-in ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}
                >
                  {/* Timeline Line */}
                  {index !== timeline.length - 1 && (
                    <div className="hidden lg:block absolute left-1/2 top-24 w-0.5 h-full bg-border -translate-x-1/2" />
                  )}
                  
                  <div className={`flex flex-col lg:flex-row items-center gap-8 ${!isEven && 'lg:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className="flex-1 w-full">
                      <Card className="hover:shadow-elegant transition-all duration-300 border-border">
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${item.icon === Building2 ? 'bg-primary/10' : item.icon === Users ? 'bg-accent/10' : 'bg-primary/10'}`}>
                              <Icon className={`w-8 h-8 ${item.icon === Building2 ? 'text-primary' : item.icon === Users ? 'text-accent' : 'text-primary'}`} />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-primary mb-2">{item.year}</div>
                              <CardTitle className="text-2xl mb-1">{item.title}</CardTitle>
                              {item.subtitle && (
                                <div className="text-muted-foreground font-medium">{item.subtitle}</div>
                              )}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Year Marker (Desktop) */}
                    <div className="hidden lg:flex w-24 h-24 rounded-full bg-primary text-white items-center justify-center font-bold text-lg shadow-elegant flex-shrink-0">
                      {item.year.split('-')[0]}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Nossa Filosofia Corporativa
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {philosophy.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-8 h-8 ${item.iconColor}`} />
                      </div>
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a 
            href="/"
            className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium text-lg group"
          >
            <span className="mr-2">←</span>
            <span className="story-link">Voltar para a página inicial</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default NossaHistoria;
