import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

interface HeroProps {
  currentLang: string;
}

const Hero = ({ currentLang }: HeroProps) => {
  const content = {
    en: {
      greeting: "Hello, I'm",
      name: "William Correa",
      title: "Software Developer & Tech Community Enthusiast",
      description: "17+ years of experience crafting efficient solutions with PHP, TypeScript, and full-stack development. Passionate about collaborative environments and building robust software.",
      cta: "Let's Connect",
      downloadResume: "Download Resume",
      viewProjects: "View Projects"
    },
    pt: {
      greeting: "Olá, eu sou",
      name: "William Correa",
      title: "Desenvolvedor de Software & Entusiasta de Comunidades Tech",
      description: "17+ anos de experiência criando soluções eficientes com PHP, TypeScript e desenvolvimento full-stack. Apaixonado por ambientes colaborativos e construção de software robusto.",
      cta: "Vamos Conversar",
      downloadResume: "Baixar Currículo",
      viewProjects: "Ver Projetos"
    }
  };

  const t = content[currentLang as keyof typeof content];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/wilcorrea",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/wilcorrea",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/wilcorrea",
      label: "Twitter"
    },
    {
      icon: Mail,
      href: "mailto:wil@wilcorrea.dev",
      label: "Email"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-section pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden card-elegant animate-float">
                <img
                  src={profileImage}
                  alt="William Correa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl opacity-70 animate-pulse"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <p className="text-lg text-muted-foreground mb-2">{t.greeting}</p>
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
              <span className="gradient-text">{t.name}</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6 text-balance">
              {t.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-balance">
              {t.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={scrollToContact}
                className="glow-effect"
                size="lg"
              >
                {t.cta}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="hero" size="lg">
                {t.viewProjects}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;