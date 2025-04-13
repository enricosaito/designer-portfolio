import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-8px] transition-transform duration-300">
        <CardContent className="p-6">
          <div className="mb-4 text-4xl">{icon}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const AboutSection = () => {
  const skills = [
    {
      title: "Design Gráfico",
      description:
        "Criação de identidades visuais, branding e materiais impressos que comunicam a essência da sua marca.",
      icon: "🎨",
    },
    {
      title: "UI/UX Design",
      description: "Design de interfaces e experiências focadas no usuário para web e aplicativos móveis.",
      icon: "💻",
    },
    {
      title: "Motion Graphics",
      description: "Animações e efeitos visuais que dão vida às suas ideias e capturam a atenção do público.",
      icon: "✨",
    },
    {
      title: "Ilustração",
      description: "Ilustrações personalizadas que transmitem conceitos de forma visual e única.",
      icon: "✏️",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-darkBg">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-6 inline-block relative">
            <span className="relative z-10">Sobre Mim</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-main -z-10"></span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg">
            Olá! Sou Felipe, designer com mais de 5 anos de experiência. Minha paixão é criar designs que não apenas
            atraem o olhar, mas também comunicam de forma eficaz e resolvem problemas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-4">Minha Abordagem</h3>
            <p className="mb-4">
              Acredito que o bom design deve ser intencional e estratégico. Cada elemento visual deve ter um propósito e
              contribuir para a história que estamos contando.
            </p>
            <p>
              Trabalho de perto com meus clientes para entender seus objetivos e transformá-los em soluções visuais
              impactantes que geram resultados reais.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-main border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full h-64 md:h-full rounded-xl -rotate-2">
              <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                Foto ou Ilustração
              </div>
            </div>
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">Habilidades & Serviços</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
