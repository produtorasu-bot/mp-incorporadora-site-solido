import { Target, Eye, Heart, Award, Landmark, TrendingUp, Users2, Sparkles, Compass, Telescope, Gem, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";
import itumbiaraAerial from "@/assets/itumbiara-aerial.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NossaHistoria = () => {
  const timeline = [
    {
      year: "2013",
      title: "Nosso Início",
      description: "A MP Incorporadora foi fundada em 2013 em Itumbiara, Goiás, com um objetivo claro: oferecer moradias de qualidade com preços acessíveis para a comunidade local.",
      icon: Landmark,
    },
    {
      year: "2013-2018",
      title: "Construindo Confiança",
      subtitle: "Primeiros Anos",
      description: "Nos primeiros anos, focamos em empreendimentos populares. Entregamos centenas de unidades habitacionais e construímos um relacionamento sólido de confiança com nossos clientes e com a comunidade de Itumbiara.",
      icon: Users2,
    },
    {
      year: "2019-Presente",
      title: "Crescimento e Evolução",
      description: "Com a confiança conquistada, expandimos nossa atuação para imóveis de médio e alto padrão. Hoje, trabalhamos também com condomínios verticais, oferecendo mais opções para diferentes perfis de clientes.",
      icon: Sparkles,
    },
  ];

  const philosophy = [
    {
      icon: Compass,
      title: "Missão",
      description: "Buscar excelência na construção e comercialização de empreendimentos, superando as expectativas dos nossos clientes, garantindo a entrega rápida e a qualidade do produto final.",
      color: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Telescope,
      title: "Visão",
      description: "Ser uma empresa referência em qualidade, inovação e confiança em Itumbiara e região.",
      color: "bg-accent/10",
      iconColor: "text-accent",
    },
    {
      icon: Gem,
      title: "Valores",
      description: "Sustentabilidade, Excelência e Respeito guiam cada decisão e cada projeto que realizamos.",
      color: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: ShieldCheck,
      title: "Política de Qualidade",
      description: "Construir obras com qualidade, alcançando a satisfação dos nossos clientes por meio da melhoria contínua dos processos, inovação e comprometimento com a sustentabilidade.",
      color: "bg-accent/10",
      iconColor: "text-accent",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${itumbiaraAerial})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-accent/90" />
        
        {/* Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <img 
            src={logo} 
            alt="MP Incorporadora" 
            className="w-[600px] h-auto"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center mb-8 animate-fade-in">
              <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl">
                <img 
                  src={logo} 
                  alt="MP Incorporadora" 
                  className="h-16 sm:h-20 w-auto"
                />
              </div>
            </div>
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
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${item.icon === Landmark ? 'bg-primary/10' : item.icon === Users2 ? 'bg-accent/10' : 'bg-primary/10'}`}>
                              <Icon className={`w-8 h-8 ${item.icon === Landmark ? 'text-primary' : item.icon === Users2 ? 'text-accent' : 'text-primary'}`} />
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
