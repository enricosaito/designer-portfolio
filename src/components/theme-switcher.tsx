import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="relative inline-flex items-center justify-center w-10 h-10 text-sm font-medium rounded-base border-2 border-border dark:border-darkBorder transition-colors hover:bg-main"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-6 w-6 hidden dark:inline" />
      <Moon className="h-6 w-6 inline dark:hidden" />
      <span className="sr-only">Alternar tema</span>
    </button>
  );
}
