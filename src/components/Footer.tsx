import { motion } from "framer-motion";
import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contato@murilocelestino.com", label: "Email" },
  ];

  // Placeholder client logos - replace with actual client logos
  const clients = [
    { name: "Cliente 1", logo: "C1" },
    { name: "Cliente 2", logo: "C2" },
    { name: "Cliente 3", logo: "C3" },
    { name: "Cliente 4", logo: "C4" },
    { name: "Cliente 5", logo: "C5" },
  ];

  return (
    <footer className="relative py-20 border-t border-border">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-10"
          >
            <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-xs font-semibold text-primary uppercase tracking-widest">
              Confiança de Grandes Marcas
            </span>
          </motion.div>
          
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Clientes <span className="gradient-text">Atendidos</span>
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-12">
            Empresas que confiam no meu trabalho para transformar suas visões em realidade.
          </p>
          
          <div className="relative">
            {/* Glow effect behind cards */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-3xl" />
            
            <div className="relative flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative w-28 h-16 md:w-32 md:h-20 rounded-xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
                >
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  
                  <span className="relative z-10 text-muted-foreground font-display font-bold text-xl group-hover:text-primary transition-colors duration-300">
                    {client.logo}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="section-divider mb-12" />

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="inline-block mb-3">
              <span className="font-display text-2xl font-bold text-foreground">
                Murilo <span className="gradient-text">Celestino</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <a
              href="#portfolio"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Portfólio
            </a>
            <a
              href="#orcamento"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Orçamento
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="#orcamento"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
