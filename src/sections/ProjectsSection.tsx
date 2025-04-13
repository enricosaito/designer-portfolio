import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

interface Project {
  id: number;
  title: string;
  category: string;
  imagePlaceholder: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Rebrand Café Cultura",
    category: "Identidade Visual",
    imagePlaceholder: "bg-yellow-400",
    description: "Redesign completo da marca de uma cafeteria local, incluindo logo, paleta de cores e aplicações.",
  },
  {
    id: 2,
    title: "App Fitness+",
    category: "UI/UX Design",
    imagePlaceholder: "bg-blue-400",
    description: "Design de interface para aplicativo de fitness com foco em usabilidade e experiência do usuário.",
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

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects =
    activeCategory === "Todos" ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-bg dark:bg-secondaryBlack">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-6 inline-block relative">
            <span className="relative z-10">Projetos</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-main -z-10"></span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg mb-8">
            Uma seleção dos meus trabalhos recentes em design gráfico, branding, UI/UX e mais.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "neutral"}
                onClick={() => setActiveCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group cursor-pointer">
                {/* Project image */}
                <div
                  className={`${project.imagePlaceholder} h-64 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden rounded-xl mb-4 transform transition-transform group-hover:-rotate-2 group-hover:translate-y-[-8px] duration-300 flex items-center justify-center`}
                >
                  <span className="text-black text-xl font-bold">Imagem do Projeto</span>
                </div>

                {/* Project info */}
                <div>
                  <span className="inline-block px-3 py-1 bg-white dark:bg-main text-black text-sm font-semibold border-2 border-black mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More projects button */}
        <div className="mt-16 text-center">
          <Button size="lg" className="text-lg px-8">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
