import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MessageCircle,
  Calendar,
  MapPin,
  Coffee
} from "lucide-react";

interface ContactProps {
  currentLang: string;
}

const Contact = ({ currentLang }: ContactProps) => {
  const content = {
    en: {
      title: "Let's Connect",
      subtitle: "Ready to collaborate or just want to chat about tech? I'd love to hear from you!",
      email: "Send Email",
      schedule: "Schedule a Call",
      coffee: "Let's Grab Coffee",
      location: "Based in Brazil",
      availability: "Available for freelance and collaboration",
      socialTitle: "Find me on social networks",
      getInTouch: "Get in Touch"
    },
    pt: {
      title: "Vamos Conversar",
      subtitle: "Pronto para colaborar ou apenas quer bater um papo sobre tech? Adoraria ouvir de você!",
      email: "Enviar Email",
      schedule: "Agendar Conversa",
      coffee: "Vamos Tomar um Café",
      location: "Baseado no Brasil",
      availability: "Disponível para freelances e colaborações",
      socialTitle: "Me encontre nas redes sociais",
      getInTouch: "Entre em Contato"
    }
  };

  const t = content[currentLang as keyof typeof content];

  const contactMethods = [
    {
      icon: Mail,
      title: t.email,
      description: "hi@wilcorrea.dev",
      action: "https://t.me/wilcorrea",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: t.schedule,
      description: currentLang === "pt" ? "Vamos marcar uma conversa" : "Let's schedule a chat",
      action: "https://calendly.com/wilcorrea",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Coffee,
      title: t.coffee,
      description: currentLang === "pt" ? "Para um papo descontraído" : "For a casual conversation",
      action: "https://t.me/wilcorrea",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/wilcorrea",
      username: "@wilcorrea"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/wilcorrea",
      username: "/in/wilcorrea"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/wilcorrea",
      username: "@wilcorrea"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 animate-slide-up">
            {contactMethods.map((method, index) => (
              <Card key={index} className="card-elegant group overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  <Button
                    asChild
                    variant="hero"
                    size="sm"
                    className="group-hover:glow-effect transition-all duration-300"
                  >
                    <a href={method.action} target="_blank" rel="noopener noreferrer">
                      {t.getInTouch}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 animate-slide-up">
            <Card className="card-elegant">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {t.location}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {currentLang === "pt" 
                    ? "Desenvolvedor brasileiro apaixonado por tecnologia e comunidades colaborativas."
                    : "Brazilian developer passionate about technology and collaborative communities."
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="h-6 w-6 text-accent" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {t.availability}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {currentLang === "pt"
                    ? "Sempre interessado em novos projetos desafiadores e oportunidades de colaboração."
                    : "Always interested in new challenging projects and collaboration opportunities."
                  }
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <div className="text-center animate-fade-in">
            <h3 className="text-xl font-semibold mb-8 text-foreground">
              {t.socialTitle}
            </h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="card-elegant p-6 hover:glow-effect transition-all duration-300">
                    <CardContent className="p-0 flex flex-col items-center gap-3">
                      <social.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                      <div className="text-center">
                        <div className="font-medium text-foreground text-sm">
                          {social.label}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {social.username}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;