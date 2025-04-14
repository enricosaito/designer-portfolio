import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface Project {
  id: number;
  title: string;
  category: string;
  imagePlaceholder: string;
  description: string;
  imageUrl?: string; // New optional field for actual image
}

const projects: Project[] = [
  {
    id: 1,
    title: "Lançamento Mini Casual",
    category: "Identidade Visual",
    imagePlaceholder: "bg-main",
    description: "Criação de peças visuais para campanha de verão de uma marca de roupas.",
    imageUrl: "/MiniCasual.png",
  },
  {
    id: 2,
    title: "Stellar Solutions",
    category: "Modelagem 3D",
    imagePlaceholder: "bg-purple-400",
    description: "Design de website para empresa de tecnologia sustentável, com foco em storytelling visual.",
    imageUrl: "/Stellar3D.png",
  },
  {
    id: 3,
    title: "Kingdom Pizzaria",
    category: "Design Gráfico",
    imagePlaceholder: "bg-green-400",
    description: "Redesign completo da marca de uma cafeteria local, incluindo logo, paleta de cores e aplicações.",
    imageUrl: "/Kingdom.png",
  },
  {
    id: 4,
    title: "Logo Martins Piscinas",
    category: "UI/UX Design",
    imagePlaceholder: "bg-blue-400",
    description: "Design de interface para aplicativo de fitness com foco em usabilidade e experiência do usuário.",
    imageUrl: "/MartinsPiscinas.png",
  },
  {
    id: 5,
    title: "Embalagem Orgânica",
    category: "Design de Produto",
    imagePlaceholder: "bg-red-400",
    description: "Design de embalagem sustentável para linha de produtos orgânicos.",
    imageUrl: "/CasualBag.png",
  },
  {
    id: 6,
    title: "Identidade Visual Atendflow",
    category: "Web Design",
    imagePlaceholder: "bg-pink-400",
    description: "Criação de branding, site animado e concepção de produto para empresa de tecnologia.",
    imageUrl: "/LogoAtendflow.png",
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

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <div
      className={cn(
        "h-64 md:h-72 overflow-hidden rounded-base mb-5 transform transition-all duration-300",
        "border-4 border-black dark:border-white",
        "shadow-custom-lg dark:shadow-custom-lg-white",
        "group-hover:-translate-y-2 group-hover:-rotate-2",
        !project.imageUrl && project.imagePlaceholder // Only apply background color if no image
      )}
    >
      {project.imageUrl ? (
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover object-center" />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-2xl font-black text-black">Imagem do Projeto</span>
        </div>
      )}
    </div>

    <div>
      <span className="inline-block px-3 py-1 bg-main text-black text-sm font-bold border-2 border-black dark:border-black rounded-base transform -rotate-1 mb-3">
        {project.category}
      </span>
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-text dark:text-darkText">{project.description}</p>
    </div>
  </motion.div>
);

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects =
    activeCategory === "Todos" ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-bg dark:bg-darkBg">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-black mb-6 inline-block relative">
            <span className="relative z-10">Projetos</span>
            <span className="absolute bottom-0 left-0 w-full h-4 bg-main -z-10"></span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg mb-10">
            Uma seleção dos meus trabalhos recentes em design gráfico, branding, UI/UX e mais. Cada projeto é fruto de
            uma colaboração próxima e processos criativos dedicados.
          </p>

          {/* Category Filter */}
          <div className="flex justify-center mb-12 overflow-x-auto pb-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "border-2 border-black dark:border-white rounded-base px-4 py-2 font-bold whitespace-nowrap",
                    activeCategory === category
                      ? "bg-main text-black shadow-custom dark:shadow-custom-white"
                      : "bg-bg hover:bg-main/50 dark:bg-darkBg dark:hover:bg-main/50"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
