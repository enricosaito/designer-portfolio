import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/loadingScreen";
import { ThemeProvider } from "./components/theme-provider";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import { Toaster } from "./components/ui/sonner";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [loadingState, setLoadingState] = useState({
    isLoading: true,
    isContentVisible: false,
  });

  useEffect(() => {
    let mounted = true;

    const loadInitialContent = async () => {
      try {
        // Simulating loading resources
        await new Promise((resolve) => setTimeout(resolve, 2000));

        if (mounted) {
          setLoadingState({
            isLoading: false,
            isContentVisible: true,
          });
        }
      } catch (error) {
        console.error("Loading error:", error);
        if (mounted) {
          setLoadingState({
            isLoading: false,
            isContentVisible: true,
          });
        }
      }
    };

    loadInitialContent();

    return () => {
      mounted = false;
    };
  }, []);

  const { isLoading } = loadingState;

  return (
    <ThemeProvider defaultTheme="light">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div key="loading" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <LoadingScreen />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-bg dark:bg-darkBg text-text dark:text-darkText"
          >
            <Navbar />

            <main className="relative pt-24">
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
              <ContactSection />
            </main>

            <Footer />
            <Toaster />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
