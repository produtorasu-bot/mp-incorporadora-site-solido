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
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Empreendimentos pensados para você
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => {
            const isHousingParanaiba = project.id === 2;
            const isLiberdade15 = project.id === 1;
            const projectLink = isHousingParanaiba ? "https://housingparanaiba.com.br" : undefined;
            return (
              <Card 
                key={project.id} 
                className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-border"
              >
                <div className="relative h-64 overflow-hidden">
                  {isLiberdade15 ? (
                    <div className="w-full h-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center p-8">
                      <h3 className="text-3xl sm:text-4xl font-bold text-white text-center leading-tight">
                        Residencial<br />Liberdade 15
                      </h3>
                    </div>
                  ) : projectLink ? (
                    <a href={projectLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </a>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                  )}
                  <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">
                    {project.status}
                  </Badge>
                </div>
                <CardHeader>
                  {projectLink ? (
                    <a href={projectLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                    </a>
                  ) : (
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                  )}
                  <CardDescription className="text-base">
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
