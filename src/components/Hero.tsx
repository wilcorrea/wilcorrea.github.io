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
      title: "Developer, Speaker, Teacher",
      description: "17+ years of experience crafting efficient solutions with PHP, TypeScript, and full-stack development. Passionate about teaching, speaking at tech events, and building collaborative communities.",
      cta: "Let's Connect",
      downloadResume: "Download Resume",
      viewProjects: "View Projects"
    },
    pt: {
      greeting: "Olá, eu sou",
      name: "William Correa", 
      title: "Desenvolvedor, Palestrante, Professor",
      description: "17+ anos de experiência criando soluções eficientes com PHP, TypeScript e desenvolvimento full-stack. Apaixonado por ensinar, palestrar em eventos tech e construir comunidades colaborativas.",
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
      href: "mailto:hi@wilcorrea.dev",
      label: "Email"
    }
  ];

  return (
    <section id="home" className="hero-section flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
          {/* Profile Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden card-elegant animate-float">
                <img
                  src={profileImage}
                  alt="William Correa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-highlight/20 rounded-full blur-xl opacity-70 animate-pulse"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up max-w-3xl">
            <p className="text-lg text-foreground/80 mb-4 font-medium">{t.greeting}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text block mb-2">{t.name}</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-8 text-balance leading-relaxed">
              {currentLang === 'pt' ? (
                <>
                  <span className="text-foreground">Desenvolvedor</span>
                  <span className="highlight-text mx-2">&</span>
                  <span className="highlight-text">Palestrante</span>
                </>
              ) : (
                <>
                  <span className="text-foreground">Developer</span>
                  <span className="highlight-text mx-2">&</span>
                  <span className="highlight-text">Speaker</span>
                </>
              )}
            </h2>
            <p className="text-lg lg:text-xl text-foreground/70 mb-10 max-w-2xl text-balance leading-relaxed">
              {t.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button
                className="glow-effect text-lg px-8 py-6 h-auto"
                size="lg"
                asChild
              >
                <a 
                  href="https://t.me/wilcorrea" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {t.cta}
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="hero" 
                size="lg"
                className="text-lg px-8 py-6 h-auto"
                asChild
              >
                <a 
                  href="https://devi.tools/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {t.viewProjects}
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
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
                  className="p-3 rounded-full bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300 group hover:glow-effect"
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6 text-foreground/60 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-highlight/10 rounded-full blur-lg animate-pulse"></div>
    </section>
  );
};

export default Hero;