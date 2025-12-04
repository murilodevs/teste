import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Upload, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ProjectType = "vsl" | "short" | "longform" | "ads" | "";

const BudgetForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "" as ProjectType,
    description: "",
    referenceLink: "",
  });

  const projectTypes = [
    { value: "vsl", label: "VSL (Video Sales Letter)" },
    { value: "short", label: "Vídeo Curto (Reels/TikTok)" },
    { value: "longform", label: "Vídeo Longo (YouTube)" },
    { value: "ads", label: "Anúncio / Ad" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Create WhatsApp message
    const message = encodeURIComponent(
      `*Novo Orçamento - Portfólio*\n\n` +
        `*Nome:* ${formData.name}\n` +
        `*Email:* ${formData.email}\n` +
        `*Tipo de Projeto:* ${projectTypes.find((p) => p.value === formData.projectType)?.label}\n` +
        `*Descrição:* ${formData.description}\n` +
        `*Link de Referência:* ${formData.referenceLink || "Não informado"}`
    );

    // Open WhatsApp (replace with your number)
    window.open(`https://wa.me/5500000000000?text=${message}`, "_blank");

    toast({
      title: "Mensagem preparada!",
      description: "Você será redirecionado para o WhatsApp.",
    });

    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      projectType: "",
      description: "",
      referenceLink: "",
    });
  };

  const inputClasses =
    "w-full px-5 py-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300";

  return (
    <section id="orcamento" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-foreground">Solicite um </span>
              <span className="gradient-text">Orçamento</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Conte-me sobre seu projeto e retornarei em até 24 horas.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 space-y-6"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Seu nome"
                className={inputClasses}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="seu@email.com"
                className={inputClasses}
              />
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                Tipo de projeto
              </label>
              <select
                id="projectType"
                required
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value as ProjectType })}
                className={`${inputClasses} cursor-pointer`}
              >
                <option value="" disabled>
                  Selecione o tipo de projeto
                </option>
                {projectTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                Descrição do projeto
              </label>
              <textarea
                id="description"
                required
                rows={5}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Descreva seu projeto, objetivos, público-alvo e qualquer informação relevante..."
                className={`${inputClasses} resize-none`}
              />
            </div>

            {/* Reference Link */}
            <div>
              <label htmlFor="referenceLink" className="block text-sm font-medium text-foreground mb-2">
                Link de referência / briefing
                <span className="text-muted-foreground font-normal ml-2">(opcional)</span>
              </label>
              <div className="relative">
                <input
                  type="url"
                  id="referenceLink"
                  value={formData.referenceLink}
                  onChange={(e) => setFormData({ ...formData, referenceLink: e.target.value })}
                  placeholder="https://..."
                  className={inputClasses}
                />
                <Upload className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg flex items-center justify-center gap-3 hover:bg-primary/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/25"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Enviar Orçamento
                </>
              )}
            </motion.button>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                Resposta em 24h
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                Orçamento gratuito
              </span>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default BudgetForm;
