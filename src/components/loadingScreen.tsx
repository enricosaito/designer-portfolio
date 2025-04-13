import React from "react";
import { motion } from "framer-motion";

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-primary dark:bg-background flex items-center justify-center overflow-hidden">
      <div className="relative">
        {/* Main loading container */}
        <motion.div
          className="text-5xl sm:text-6xl font-black bg-white dark:bg-background p-8 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
          initial={{ rotate: 5 }}
          animate={{ rotate: [5, -3, 5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          CARREGANDO
          {/* Loading dots */}
          <div className="flex gap-3 mt-6 justify-center">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-5 h-5 bg-black dark:bg-white rounded-full"
                initial={{ y: 0 }}
                animate={{ y: [-10, 0, -10] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute -top-10 -right-10 w-20 h-20 bg-accent border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        <motion.div
          className="absolute -bottom-8 -left-8 w-16 h-16 bg-green-400 border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rounded-md"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />

        {/* Rotating square */}
        <motion.div
          className="absolute -bottom-12 -right-12 w-24 h-24 bg-blue-400 border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: [0, 180, 360] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.6, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
