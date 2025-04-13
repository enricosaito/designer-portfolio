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
      className="relative inline-flex items-center justify-center w-12 h-12 text-sm font-medium rounded-lg border-2 border-black dark:border-white bg-accent text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
    >
      <Sun className="h-6 w-6 hidden dark:inline" />
      <Moon className="h-6 w-6 inline dark:hidden" />
      <span className="sr-only">Alternar tema</span>
    </motion.button>
  );
}
