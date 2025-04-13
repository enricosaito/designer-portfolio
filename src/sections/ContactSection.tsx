import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { cn } from "../lib/utils";
import { toast } from "sonner";

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your form submission logic here
    toast.success("Mensagem enviada com sucesso!", {
      description: "Entraremos em contato em breve.",
    });
  };

  return (
    <section id="contact" className="py-24 bg-secondary dark:bg-secondary">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-black mb-6 inline-block relative">
            <span className="relative z-10">Contato</span>
            <span className="absolute bottom-0 left-0 w-full h-4 bg-primary -z-10 transform rotate-1"></span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg mb-4">
            Tem um projeto em mente? Vamos conversar! Preencha o formulário abaixo ou entre em contato diretamente
            através dos meus canais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-background dark:bg-background border-4 border-black dark:border-white rounded-xl p-8 shadow-custom-lg dark:shadow-custom-lg-white">
              <h3 className="text-2xl font-bold mb-6 inline-block relative">
                <span className="relative z-10">Envie uma mensagem</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-accent -z-10"></span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-bold">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome completo"
                    required
                    className="border-2 border-black dark:border-white h-12 bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-bold">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="border-2 border-black dark:border-white h-12 bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-base font-bold">
                    Assunto
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Sobre o que você quer falar?"
                    required
                    className="border-2 border-black dark:border-white h-12 bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base font-bold">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Conte-me mais sobre seu projeto..."
                    rows={6}
                    required
                    className="border-2 border-black dark:border-white min-h-[150px] bg-background"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg bg-primary text-black border-2 border-black dark:border-black font-bold shadow-custom hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-8">
              <div
                className={cn(
                  "bg-accent text-accent-foreground border-4 border-black dark:border-white rounded-xl p-8",
                  "shadow-custom-lg dark:shadow-custom-lg-white",
                  "transform rotate-1"
                )}
              >
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary text-black flex items-center justify-center rounded-full border-2 border-black font-bold text-xl">
                      @
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Email</h4>
                      <p className="text-white">felipe@designerportfolio.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary text-black flex items-center justify-center rounded-full border-2 border-black font-bold text-xl">
                      📱
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Telefone</h4>
                      <p className="text-white">(11) 98765-4321</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary text-black flex items-center justify-center rounded-full border-2 border-black font-bold text-xl">
                      📍
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Localização</h4>
                      <p className="text-white">São Paulo, Brasil</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  "bg-green-400 text-black border-4 border-black dark:border-white rounded-xl p-8",
                  "shadow-custom-lg dark:shadow-custom-lg-white",
                  "transform -rotate-1"
                )}
              >
                <h3 className="text-2xl font-bold mb-4">Redes Sociais</h3>
                <p className="mb-6">Me encontre nas redes sociais e vamos conversar!</p>

                <div className="flex flex-wrap gap-4">
                  {[
                    { name: "Behance", icon: "Be" },
                    { name: "Instagram", icon: "Ig" },
                    { name: "LinkedIn", icon: "In" },
                    { name: "Dribbble", icon: "Dr" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg border-2 border-black font-bold hover:bg-primary transition-colors"
                    >
                      <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">
                        {social.icon}
                      </span>
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
