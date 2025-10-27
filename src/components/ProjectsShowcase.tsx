import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import liberdade15 from "@/assets/liberdade-15.jpg";
import housingParanaiba from "@/assets/housing-paranaiba.jpg";
import europaReady from "@/assets/europa-ready.jpg";

type ProjectStatus = "Em Oferta" | "Em Obras" | "Prontos para Morar";

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
    description: "Pioneiro de casas prontas em condomínio fechado.",
    status: "Em Oferta",
    image: housingParanaiba,
  },
  {
    id: 3,
    title: "Residencial Europa",
    description: "Um novo padrão de qualidade de vida com infraestrutura completa.",
    status: "Prontos para Morar",
    image: europaReady,
  },
];

const ProjectsShowcase = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectStatus | "Todos">("Todos");

  const filteredProjects = activeFilter === "Todos" 
    ? projects 
    : projects.filter(p => p.status === activeFilter);

  const filters: (ProjectStatus | "Todos")[] = ["Todos", "Em Oferta", "Em Obras", "Prontos para Morar"];

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

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="transition-all duration-300"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-border"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">
                  {project.status}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" className="w-full group/btn">
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
