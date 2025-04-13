import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/loadingScreen";
import { ThemeProvider } from "./components/theme-provider";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import "./App.css";

function App() {
  const [loadingState, setLoadingState] = useState({
    isLoading: true,
    isContentVisible: false,
  });

  useEffect(() => {
    let mounted = true;

    const loadInitialContent = async () => {
      try {
        // Wait a bit to show the loading screen for demo purposes
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

  const { isLoading, isContentVisible } = loadingState;

  if (isLoading) {
    return (
      <ThemeProvider>
        <LoadingScreen />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div
        className={`min-h-screen bg-bg dark:bg-darkBg ${
          isContentVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        <Navbar />

        <main className="relative">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
