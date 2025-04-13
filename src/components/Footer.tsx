import React from "react";
import { scrollToElement } from "@/lib/utils";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-black py-16 relative">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-10 w-16 h-16 bg-accent rounded-full border-4 border-black dark:border-black transform -translate-y-1/2 shadow-custom"></div>
      <div className="absolute top-0 right-20 w-24 h-10 bg-green-400 rounded-lg border-4 border-black dark:border-black transform -translate-y-1/2 rotate-6 shadow-custom"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo & Description */}
          <div>
            <h2 className="text-4xl font-black mb-4 transform -rotate-2 inline-block">
              Felipe<span className="text-sm align-top">®</span>
            </h2>
            <p className="max-w-xs">
              Designer gráfico e web com foco em experiências visuais únicas e comunicação efetiva. Criando soluções
              visuais impactantes desde 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 inline-block relative">
              <span className="relative z-10">Links Rápidos</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-green-400 -z-10"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "home" },
                { label: "Sobre Mim", id: "about" },
                { label: "Projetos", id: "projects" },
                { label: "Contato", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="inline-block hover:underline hover:font-bold transition-all border-b-2 border-transparent hover:border-black"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement(link.id);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 inline-block relative">
              <span className="relative z-10">Redes Sociais</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-accent -z-10"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Instagram", url: "#" },
                { label: "Behance", url: "#" },
                { label: "Dribbble", url: "#" },
                { label: "LinkedIn", url: "#" },
              ].map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    className="inline-block hover:underline hover:font-bold transition-all border-b-2 border-transparent hover:border-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-bold">© {currentYear} Felipe Designer | Todos os direitos reservados</p>
          <div className="bg-black text-white px-4 py-2 font-mono text-sm border-2 border-black shadow-custom">
            &lt;/&gt; Desenvolvido com Vite + React
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
