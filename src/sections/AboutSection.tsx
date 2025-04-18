import React from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, icon, color, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div
        className="rounded-lg overflow-hidden border-4 border-black dark:border-white shadow-custom-lg dark:shadow-custom-lg-white hover:translate-y-[-5px] transition-transform duration-300"
        style={{ backgroundColor: color }}
      >
        <div className="p-6">
          <div className="mb-4 text-4xl">{icon}</div>
          <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
          <p className="text-black/80">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const AboutSection: React.FC = () => {
  const skills = [
    {
      title: "Design Gráfico",
      description:
        "Criação de identidades visuais, branding e materiais impressos que comunicam a essência da sua marca.",
      icon: "🎨",
      color: "#FFD166",
    },
    {
      title: "UI/UX Design",
      description: "Design de interfaces e experiências focadas no usuário para web e aplicativos móveis.",
      icon: "💻",
      color: "#06D6A0",
    },
    {
      title: "Motion Graphics",
      description: "Animações e efeitos visuais que dão vida às suas ideias e capturam a atenção do público.",
      icon: "✨",
      color: "#118AB2",
    },
    {
      title: "Ilustração",
      description: "Ilustrações personalizadas que transmitem conceitos de forma visual e única.",
      icon: "✏️",
      color: "#EF476F",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary dark:bg-secondary">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-4 inline-block relative">
              <span className="relative z-10">Minha Abordagem</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-accent -z-10"></span>
            </h3>

            <p className="mb-4 text-lg">
              Acredito que o bom design deve ser <strong>intencional</strong> e <strong>estratégico</strong>. Cada
              elemento visual deve ter um propósito e contribuir para a história que estamos contando.
            </p>

            <div className="bg-background rounded-xl border-4 border-black dark:border-white p-6 shadow-custom-lg dark:shadow-custom-lg-white transform -rotate-1 mt-6">
              <p className="text-lg italic">
                "Design não é apenas como algo se parece, design é como algo funciona."
                <span className="block text-right mt-2 font-bold">— Steve Jobs</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-full h-64 md:h-96 bg-primary border-4 border-black dark:border-white shadow-custom-lg dark:shadow-custom-lg-white rounded-xl -rotate-2 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/MyLife.jpg" alt="Profile" className="w-full h-full object-cover object-center" />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-5 -left-5 w-12 h-12 bg-accent border-4 border-black dark:border-white rounded-full shadow-custom dark:shadow-custom-white"></div>
            <div className="absolute -top-5 -right-5 w-20 h-12 bg-blue-400 border-4 border-black dark:border-white rounded-lg shadow-custom dark:shadow-custom-white transform rotate-12"></div>
          </motion.div>
        </div>

        <motion.h3
          className="text-2xl font-bold mb-8 text-center inline-block relative mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="relative z-10">Habilidades & Serviços</span>
          <span className="absolute bottom-0 left-0 w-full h-2 bg-green-400 -z-10"></span>
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
              color={skill.color}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Experience timeline */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center inline-block relative mx-auto">
            <span className="relative z-10">Experiência</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-400 -z-10"></span>
          </h3>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                period: "2024 - Presente",
                role: "Lead Designer",
                company: "Óticas Sider",
                description: "Liderança de projetos de branding, criativos e campanhas de marketing.",
              },
              {
                period: "2023 - 2024",
                role: "Designer Júnior",
                company: "Casual Boutique",
                description: "Desenvolvimento de identidades visuais e rebranding.",
              },
              {
                period: "2018 - 2022",
                role: "Designer Gráfico",
                company: "Freelancer",
                description: "Criação de logos e banners para marcas pessoais.",
              },
            ].map((experience, index) => (
              <motion.div
                key={index}
                className="bg-background rounded-xl border-4 border-black dark:border-white p-6 shadow-custom-lg dark:shadow-custom-lg-white relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row gap-4 md:items-center">
                  <div className="bg-primary text-black font-bold py-2 px-4 rounded-lg border-2 border-black inline-block">
                    {experience.period}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{experience.role}</h4>
                    <p className="text-lg font-semibold">{experience.company}</p>
                    <p className="mt-2">{experience.description}</p>
                  </div>
                </div>

                {/* Decorative dot */}
                <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-accent border-4 border-black dark:border-white rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
