import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { cn } from "../lib/utils";

interface Project {
  id: number;
  title: string;
  category: string;
  imagePlaceholder: string;
  description: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Rebrand Café Cultura",
    category: "Identidade Visual",
    imagePlaceholder: "bg-yellow-400",
    description: "Redesign completo da marca de uma cafeteria local, incluindo logo, paleta de cores e aplicações.",
    featured: true,
  },
  {
    id: 2,
    title: "App Fitness+",
    category: "UI/UX Design",
    imagePlaceholder: "bg-blue-400",
    description: "Design de interface para aplicativo de fitness com foco em usabilidade e experiência do usuário.",
    featured: true,
  },
  {
    id: 3,
    title: "Campanha Verão 2024",
    category: "Design Gráfico",
    imagePlaceholder: "bg-green-400",
    description: "Criação de peças visuais para campanha de verão de uma marca de roupas.",
  },
  {
    id: 4,
    title: "Website Eco Tech",
    category: "Web Design",
    imagePlaceholder: "bg-purple-400",
    description: "Design de website para empresa de tecnologia sustentável, com foco em storytelling visual.",
    featured: true,
  },
  {
    id: 5,
    title: "Embalagem Orgânica",
    category: "Design de Produto",
    imagePlaceholder: "bg-red-400",
    description: "Design de embalagem sustentável para linha de produtos orgânicos.",
  },
  {
    id: 6,
    title: "Vídeo Institucional",
    category: "Motion Graphics",
    imagePlaceholder: "bg-pink-400",
    description: "Criação de vídeo institucional animado para empresa de tecnologia.",
    featured: true,
  },
];

const categories = [
  "Todos",
  "Identidade Visual",
  "UI/UX Design",
  "Design Gráfico",
  "Web Design",
  "Design de Produto",
  "Motion Graphics",
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div
        className={cn(
          "h-64 md:h-72 overflow-hidden rounded-lg mb-5 transform transition-all duration-300",
          "border-4 border-black dark:border-white",
          "shadow-custom-lg dark:shadow-custom-lg-white",
          "group-hover:-translate-y-2 group-hover:-rotate-2",
          project.imagePlaceholder
        )}
      >
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-2xl font-black text-black">Imagem do Projeto</span>
        </div>
      </div>

      <div>
        <div className="flex gap-2 mb-3">
          <span className="inline-block px-3 py-1 bg-primary text-black text-sm font-bold border-2 border-black dark:border-black rounded-lg transform -rotate-1">
            {project.category}
          </span>

          {project.featured && (
            <span className="inline-block px-3 py-1 bg-accent text-white text-sm font-bold border-2 border-black dark:border-black rounded-lg transform rotate-1">
              Destaque
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects =
    activeCategory === "Todos" ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-background dark:bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-black mb-6 inline-block relative">
            <span className="relative z-10">Projetos</span>
            <span className="absolute bottom-0 left-0 w-full h-4 bg-primary -z-10"></span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg mb-10">
            Uma seleção dos meus trabalhos recentes em design gráfico, branding, UI/UX e mais. Cada projeto é fruto de
            uma colaboração próxima e processos criativos dedicados.
          </p>

          {/* Featured projects */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {projects
                .filter((project) => project.featured)
                .slice(0, 3)
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
          </div>

          {/* Category filter */}
          <div className="flex justify-center mb-12 overflow-x-auto pb-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "border-2 border-black dark:border-white rounded-lg px-4 py-2 font-bold whitespace-nowrap",
                    activeCategory === category
                      ? "bg-primary text-black shadow-custom dark:shadow-custom-white"
                      : "bg-secondary hover:bg-primary/50 dark:bg-secondary dark:hover:bg-primary/50"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* More projects button */}
          <div className="mt-16 text-center">
            <Button
              size="lg"
              variant="accent"
              className="text-lg border-4 border-black dark:border-white font-bold px-8"
            >
              Ver Todos os Projetos
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
