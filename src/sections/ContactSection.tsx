import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be replaced with actual form submission logic
    alert("Obrigado por entrar em contato! Esta funcionalidade estará disponível em breve.");
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-darkBg">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-6 inline-block relative">
            <span className="relative z-10">Contato</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-main -z-10"></span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg">
            Tem um projeto em mente? Vamos conversar! Preencha o formulário abaixo e entrarei em contato com você em
            breve.
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-bold">
                  Nome
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  required
                  className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] h-12"
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
                  className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] h-12"
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
                  className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] h-12"
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
                  className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>

              <Button type="submit" size="lg" className="text-lg w-full">
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-main border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 rounded-xl rotate-2">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold mb-1">Email</h4>
                  <p className="text-gray-800">felipe@designerportfolio.com</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-1">Instagram</h4>
                  <p className="text-gray-800">@felipe.designer</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-1">Localização</h4>
                  <p className="text-gray-800">São Paulo, Brasil</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-1">Horário de Trabalho</h4>
                  <p className="text-gray-800">Segunda a Sexta, 9h às 18h</p>
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
