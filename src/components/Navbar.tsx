import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const scrollToHash = function (element_id: string) {
  const element = document.getElementById(element_id);
  element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        setShowNav(true);
      }

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }

      setLastScrollY(currentScrollY);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const menuButton = document.getElementById("mobile-menu-button");
      if (isOpen && menuButton && !menuButton.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollY, isOpen]);

  const navbarVariants = {
    hidden: { y: "-120%" },
    visible: {
      y: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  return (
    <>
      <motion.nav
        className="fixed left-0 top-0 z-50 w-full px-4"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <div
          className={cn(
            `mx-auto mt-4 flex h-[80px] w-full max-w-screen-xl 
            items-center justify-between px-6 transition-transform 
            duration-300 ease-in-out bg-main dark:bg-darkBg`,
            showNav ? "translate-y-0" : "-translate-y-[calc(100%+40px)]"
          )}
          style={{
            border: "3px solid black",
            boxShadow: "8px 8px 0px 0px #000000",
          }}
        >
          {/* Logo */}
          <h1
            className="text-3xl font-black tracking-tight 
                        text-black dark:text-white transform -rotate-2 hover:rotate-0 transition-transform 
                        duration-300 min-w-[80px] lg:text-5xl"
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash("home");
              }}
            >
              Felipe
            </a>
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center text-base lg:text-lg space-x-6">
            <NavLinks activeSection={activeSection} />
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeSwitcher />
            <Button
              id="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              size="icon"
              variant="neutral"
              className="p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[100px] z-50 w-full px-4">
          <div
            className="w-full bg-white dark:bg-darkBg p-4"
            style={{
              border: "3px solid black",
              boxShadow: "8px 8px 0px 0px #000000",
            }}
          >
            <MobileNavLinks setIsOpen={setIsOpen} activeSection={activeSection} />
          </div>
        </div>
      )}
    </>
  );
};

interface NavLinksProps {
  activeSection: string;
}

function NavLinks({ activeSection }: NavLinksProps) {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Sobre Mim" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <>
      {links.map((link) => {
        const isActive = activeSection === link.href.substring(1);
        return (
          <a
            key={link.href}
            href={link.href}
            className={cn(
              "px-3 py-1 font-bold text-black dark:text-white transform transition-all duration-200",
              isActive
                ? "bg-white dark:bg-main border-2 border-black -rotate-2"
                : "hover:-translate-y-1 hover:rotate-2 border-2 border-transparent"
            )}
            onClick={(e) => {
              if (link.href.startsWith("#")) {
                e.preventDefault();
                scrollToHash(link.href.substring(1));
              }
            }}
          >
            {link.label}
          </a>
        );
      })}
    </>
  );
}

interface MobileNavLinksProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string;
}

function MobileNavLinks({ setIsOpen, activeSection }: MobileNavLinksProps) {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Sobre Mim" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <div className="flex flex-col space-y-3">
      {links.map((link) => {
        const isActive = activeSection === link.href.substring(1);
        return (
          <a
            key={link.href}
            href={link.href}
            className={cn(
              "p-2 text-center text-lg font-bold transform transition-transform",
              isActive
                ? "bg-white dark:bg-main border-2 border-black -rotate-2"
                : "bg-main dark:bg-darkBg hover:rotate-2 border-2 border-black"
            )}
            style={{
              boxShadow: "4px 4px 0px 0px #000000",
            }}
            onClick={(e) => {
              if (link.href.startsWith("#")) {
                e.preventDefault();
                scrollToHash(link.href.substring(1));
              }
              setIsOpen(false);
            }}
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
}

export default NavBar;
