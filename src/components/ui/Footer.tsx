import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToHash = (element_id: string) => {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };

  return (
    <footer className="bg-main text-black py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-black mb-4 transform -rotate-2">Felipe</h2>
            <p className="max-w-xs">
              Designer gráfico e web com foco em experiências visuais únicas e comunicação efetiva.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", id: "home" },
                { label: "Sobre Mim", id: "about" },
                { label: "Projetos", id: "projects" },
                { label: "Contato", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="hover:underline inline-block border-b-2 border-transparent hover:border-black transition-all duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToHash(link.id);
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
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <ul className="space-y-2">
              {[
                { label: "Instagram", url: "#" },
                { label: "Behance", url: "#" },
                { label: "Dribbble", url: "#" },
                { label: "LinkedIn", url: "#" },
              ].map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    className="hover:underline inline-block border-b-2 border-transparent hover:border-black transition-all duration-200"
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
          <p className="font-bold text-lg">© {currentYear} Felipe | Designer</p>
          <div className="bg-black text-white px-4 py-2 font-mono text-sm">&lt;/&gt; Desenvolvido com Vite + React</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
