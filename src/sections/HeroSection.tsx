import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

const HeroSection = () => {
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

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-bg dark:bg-secondaryBlack bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] pt-16 lg:pt-0"
    >
      <motion.div
        className="mx-auto w-full max-w-5xl px-5 py-[110px] text-left lg:py-[150px] flex flex-col lg:flex-row"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:ml-8">
          <motion.h1 variants={itemVariants} className="text-5xl font-bold md:text-6xl lg:text-7xl">
            Felipe <span className="text-main">Designer</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="my-8 text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed"
          >
            Designer gráfico e web com foco em experiências visuais únicas e comunicação efetiva. Especializado em
            identidade visual e UI/UX.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <Button size="lg" className="text-lg">
              Ver Projetos
            </Button>

            <Button variant="neutral" size="lg" className="text-lg">
              Contato
            </Button>
          </motion.div>
        </div>

        <motion.div className="w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-center items-center" variants={itemVariants}>
          <div className="relative">
            {/* Placeholder for profile image - replace with actual image later */}
            <div className="bg-main border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center text-5xl font-bold rotate-3">
              F
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-14 h-14 bg-pink-500 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-md" />
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
