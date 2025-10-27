import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import liberdade15 from "@/assets/liberdade-15.jpg";
import housingParanaiba from "@/assets/housing-paranaiba-entrance.jpg";
import residencialJardimEuropa from "@/assets/residencial-jardim-europa.jpg";
import portalDoBuritis from "@/assets/portal-do-buritis.jpg";

type ProjectStatus = "Em Oferta" | "Em Obras" | "Obra entregue" | "Oportunidade";

interface Project {
  id: number;
  title: string;
  description: string;
  status: ProjectStatus;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Residencial Liberdade 15",
    description: "Sua casa na planta com a qualidade da MP Incorporadora.",
    status: "Em Oferta",
    image: liberdade15,
  },
  {
    id: 2,
    title: "Housing Paranaíba",
    description: "Condomínio Fechado de Casas Prontas mais próximo do centro de Itumbiara-GO",
    status: "Oportunidade",
    image: housingParanaiba,
  },
  {
    id: 3,
    title: "Residencial Jardim Europa",
    description: "Um novo padrão de qualidade de vida com infraestrutura completa.",
    status: "Obra entregue",
    image: residencialJardimEuropa,
  },
  {
    id: 4,
    title: "Portal do Buritis",
    description: "Empreendimento com apartamentos modernos em condomínio fechado com portaria 24 horas",
    status: "Obra entregue",
    image: portalDoBuritis,
  },
];

const ProjectsShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient">Empreendimentos pensados para você</span>
          </h2>
          <div className="w-32 h-1.5 gradient-primary mx-auto rounded-full shadow-glow" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const isHousingParanaiba = project.id === 2;
            const isLiberdade15 = project.id === 1;
            const projectLink = isHousingParanaiba ? "https://housingparanaiba.com.br" : undefined;
            return (
              <Card 
                key={project.id} 
                className="group overflow-hidden hover:shadow-3d transition-all duration-500 hover:-translate-y-3 bg-card border-2 border-border hover:border-primary/50 rounded-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  {isLiberdade15 ? (
                    <div className="w-full h-full gradient-primary flex items-center justify-center p-8 relative">
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-2xl" />
                        <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl" />
                      </div>
                      <h3 className="text-4xl sm:text-5xl font-bold text-white text-center leading-tight relative z-10 drop-shadow-lg">
                        Residencial<br />Liberdade 15
                      </h3>
                    </div>
                  ) : projectLink ? (
                    <a href={projectLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </a>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                  <Badge className="absolute top-4 right-4 gradient-accent backdrop-blur-sm shadow-glass text-white border-0 px-4 py-1.5 text-sm font-bold">
                    {project.status}
                  </Badge>
                </div>
                <CardHeader className="p-8">
                  {projectLink ? (
                    <a href={projectLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <CardTitle className="text-2xl sm:text-3xl mb-3">{project.title}</CardTitle>
                    </a>
                  ) : (
                    <CardTitle className="text-2xl sm:text-3xl mb-3">{project.title}</CardTitle>
                  )}
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
