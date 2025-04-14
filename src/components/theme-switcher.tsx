import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./theme-provider";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-10 h-10 text-sm font-medium 
                rounded-base border-2 border-black dark:border-white bg-main
                shadow-custom hover:shadow-none hover:translate-x-1 
                hover:translate-y-1 transition-all"
      aria-label="Alternar tema"
    >
      <Sun className="h-5 w-5 text-black dark:hidden" />
      <Moon className="h-5 w-5 hidden text-white dark:inline" />
      <span className="sr-only">Alternar tema</span>
    </motion.button>
  );
}
