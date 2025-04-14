import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";
import { scrollToElement } from "../lib/utils";

const HeroSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const decorationVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.6,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-background dark:bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] pt-20 lg:pt-0"
    >
      <motion.div
        className="w-full max-w-6xl px-6 py-16 lg:py-24 mx-auto flex flex-col lg:flex-row lg:items-center gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div variants={itemVariants} className="relative inline-block mb-4">
            <span className="text-xl md:text-2xl font-semibold bg-accent text-accent-foreground border-2 border-black dark:border-white py-1 px-3 rounded-md shadow-custom dark:shadow-custom-white transform -rotate-2">
              Designer Gráfico & Web
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter"
          >
            Felipe{" "}
            <span className="inline-block relative">
              Moraes
              <span className="absolute bottom-2 left-0 w-full h-4 bg-primary -z-10"></span>
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            Designer apaixonado por criar experiências visuais únicas e com propósito. Especializado em identidade
            visual, UI/UX e motion graphics para marcas que querem se destacar.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <Button
              size="lg"
              onClick={() => scrollToElement("projects")}
              className="border-2 border-black dark:border-white bg-primary text-black dark:text-black font-bold shadow-custom dark:shadow-custom-white hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all"
            >
              Ver Projetos
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToElement("contact")}
              className="border-2 border-black dark:border-white bg-background text-foreground font-bold shadow-custom dark:shadow-custom-white hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all"
            >
              Fale Comigo
            </Button>
          </motion.div>
        </div>

        <motion.div className="w-full lg:w-1/2 flex justify-center items-center" variants={itemVariants}>
          <div className="relative">
            {/* Profile picture with container */}
            <div className="relative">
              {/* Contêiner principal com borda e shadow */}
              <div
                className={cn(
                  "w-64 h-64 md:w-80 md:h-80 rounded-xl",
                  "bg-primary border-4 border-black dark:border-white",
                  "shadow-custom-lg dark:shadow-custom-lg-white",
                  "transform rotate-3"
                )}
              />

              {/* Imagem posicionada sobre o contêiner */}
              <img
                src="/Felipones.png"
                alt="Profile Picture"
                className="absolute top-[-42.5%] left-[4%] right-[4%] w-[92%] h-auto z-10 transform rotate-3 scale-105"
              />
            </div>

            {/* Decorative elements */}
            <motion.div
              variants={decorationVariants}
              className="absolute -top-12 -right-8 w-20 h-20 bg-accent rounded-full border-4 border-black dark:border-white shadow-custom dark:shadow-custom-white"
            />
            <motion.div
              variants={decorationVariants}
              className="absolute -bottom-10 -left-10 w-16 h-16 bg-blue-400 rounded-md border-4 border-black dark:border-white shadow-custom dark:shadow-custom-white"
            />
            <motion.div
              variants={decorationVariants}
              className="absolute bottom-20 -right-12 w-24 h-12 bg-green-400 rounded-lg border-4 border-black dark:border-white shadow-custom dark:shadow-custom-white transform rotate-12"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ y: -10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 1.5,
            duration: 0.5,
          },
        }}
      >
        <div className="flex flex-col items-center">
          <p className="mb-2 text-sm font-medium">Role para baixo</p>
          <div className="w-6 h-10 border-2 border-black dark:border-white rounded-full flex justify-center">
            <motion.div
              className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
