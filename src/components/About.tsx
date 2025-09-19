import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Heart, Users, Zap } from "lucide-react";

interface AboutProps {
  currentLang: string;
}

const About = ({ currentLang }: AboutProps) => {
  const content = {
    en: {
      title: "About Me",
      subtitle: "Passionate about creating efficient and innovative solutions",
      bio: "I'm William Correa, a developer with extensive experience in various areas of development, from planning and execution to infrastructure. I hold a degree in Computer Science and have been active in the industry since 2007.",
      bio2: "Over the years, I have worked with a variety of technologies and programming languages, but my strongest expertise is in PHP and TypeScript. My passion for creating efficient and innovative solutions has driven me to participate in challenging projects, always with a focus on quality and collaboration.",
      bio3: "Beyond development, I'm also a speaker and teacher who actively participates in tech events and educational programs. I have a strong interest in collaborative environments and developer communities, where I can share knowledge and learn from other professionals. I regularly conduct workshops, training sessions, and speak at conferences to help other developers grow in their careers. I'm particularly enthusiastic about GenAI and its transformative potential in software development.",
      highlights: "Key Highlights",
      highlight1: "~20 Years Experience",
      highlight1Desc: "Professional development since 2007",
      highlight2: "Full-Stack Expertise", 
      highlight2Desc: "From planning to infrastructure deployment",
      highlight3: "Community Focused",
      highlight3Desc: "Active in tech communities and knowledge sharing",
      highlight4: "Quality Driven",
      highlight4Desc: "Always focused on collaboration and robust solutions"
    },
    pt: {
      title: "Sobre Mim",
      subtitle: "Apaixonado por criar soluções eficientes e inovadoras",
      bio: "Sou William Correa, desenvolvedor com vasta experiência em diversas áreas do desenvolvimento, desde planejamento e execução até infraestrutura. Tenho formação em Ciência da Computação e atuo na área desde 2007.",
      bio2: "Ao longo dos anos, trabalhei com uma variedade de tecnologias e linguagens de programação, mas minha expertise mais forte está em PHP e TypeScript. Minha paixão por criar soluções eficientes e inovadoras me levou a participar de projetos desafiadores, sempre com foco na qualidade e colaboração.",
      bio3: "Além do desenvolvimento, sou também palestrante e professor que participa ativamente de eventos tech e programas educacionais. Tenho forte interesse em ambientes colaborativos e comunidades de desenvolvedores, onde posso compartilhar conhecimento e aprender com outros profissionais. Conduzo regularmente workshops, treinamentos e palestro em conferências para ajudar outros desenvolvedores a crescerem em suas carreiras. Sou particularmente entusiasta de GenAI e seu potencial transformador no desenvolvimento de software.",
      highlights: "Principais Destaques",
      highlight1: "~20 Anos de Experiência",
      highlight1Desc: "Desenvolvimento profissional desde 2007",
      highlight2: "Expertise Full-Stack",
      highlight2Desc: "Do planejamento à implantação de infraestrutura",
      highlight3: "Foco em Comunidade",
      highlight3Desc: "Ativo em comunidades tech e compartilhamento de conhecimento",
      highlight4: "Orientado à Qualidade",
      highlight4Desc: "Sempre focado em colaboração e soluções robustas"
    }
  };

  const t = content[currentLang as keyof typeof content];

  const technologies = [
    "PHP", "TypeScript", "JavaScript", "React", "Node.js", "Laravel", 
    "Vue.js", "MySQL", "PostgreSQL", "MongoDB", "Docker", "AWS",
    "Git", "CI/CD", "Redis", "Elasticsearch"
  ];

  const highlights = [
    {
      icon: Code,
      title: t.highlight1,
      description: t.highlight1Desc,
      color: "text-primary"
    },
    {
      icon: Zap,
      title: t.highlight2,
      description: t.highlight2Desc,
      color: "text-accent"
    },
    {
      icon: Users,
      title: t.highlight3,
      description: t.highlight3Desc,
      color: "text-primary"
    },
    {
      icon: Heart,
      title: t.highlight4,
      description: t.highlight4Desc,
      color: "text-accent"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Content */}
          <div className="animate-slide-up">
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">{t.bio}</p>
              <p className="leading-relaxed">{t.bio2}</p>
              <p className="leading-relaxed">{t.bio3}</p>
            </div>

            {/* Technologies */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {currentLang === "pt" ? "Tecnologias" : "Technologies"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-8 gradient-text">
              {t.highlights}
            </h3>
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="card-elegant border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-primary/10 ${highlight.color}`}>
                        <highlight.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-foreground">
                          {highlight.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;