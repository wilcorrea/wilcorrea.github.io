import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, TrendingUp, Code2 } from "lucide-react";

interface ExperienceProps {
  currentLang: string;
}

const Experience = ({ currentLang }: ExperienceProps) => {
  const content = {
    en: {
      title: "Experience & Stats",
      subtitle: "Tracking my journey and achievements in software development",
      codersRankTitle: "CodersRank Profile",
      codersRankDesc: "View my coding activity, skills assessment, and contribution statistics",
      codeTraceTitle: "CodeTrace Profile", 
      codeTraceDesc: "Check out my development metrics and project analytics",
      viewProfile: "View Profile",
      nerdStats: "Developer Stats",
      since2007: "Coding since 2007",
      experience: "17+ Years of Experience",
      projects: "Countless Projects Delivered",
      communities: "Active in Tech Communities"
    },
    pt: {
      title: "Experiência & Estatísticas",
      subtitle: "Acompanhando minha jornada e conquistas no desenvolvimento de software",
      codersRankTitle: "Perfil CodersRank",
      codersRankDesc: "Veja minha atividade de código, avaliação de habilidades e estatísticas de contribuição",
      codeTraceTitle: "Perfil CodeTrace",
      codeTraceDesc: "Confira minhas métricas de desenvolvimento e análises de projetos",
      viewProfile: "Ver Perfil",
      nerdStats: "Estatísticas de Desenvolvedor",
      since2007: "Programando desde 2007",
      experience: "17+ Anos de Experiência",
      projects: "Inúmeros Projetos Entregues",
      communities: "Ativo em Comunidades Tech"
    }
  };

  const t = content[currentLang as keyof typeof content];

  const profiles = [
    {
      title: t.codersRankTitle,
      description: t.codersRankDesc,
      url: "https://profile.codersrank.io/user/wilcorrea",
      icon: Code2,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: t.codeTraceTitle,
      description: t.codeTraceDesc,
      url: "https://codetrace.com/users/wilcorrea",
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const stats = [
    {
      number: "2007",
      label: t.since2007,
      icon: "📅"
    },
    {
      number: "17+",
      label: currentLang === "pt" ? "Anos" : "Years",
      icon: "⚡"
    },
    {
      number: "100+",
      label: currentLang === "pt" ? "Projetos" : "Projects", 
      icon: "🚀"
    },
    {
      number: "∞",
      label: currentLang === "pt" ? "Aprendizado" : "Learning",
      icon: "🧠"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            {t.subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-slide-up">
          {stats.map((stat, index) => (
            <Card key={index} className="card-elegant text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Developer Profiles */}
        <div className="mb-16 animate-slide-up">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            {t.nerdStats}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {profiles.map((profile, index) => (
              <Card key={index} className="card-elegant group overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${profile.gradient} text-white`}>
                      <profile.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2 text-foreground">
                        {profile.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {profile.description}
                      </p>
                    </div>
                  </div>
                  
                  <Button
                    asChild
                    variant="hero"
                    className="w-full group-hover:glow-effect transition-all duration-300"
                  >
                    <a 
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.viewProfile}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="text-center animate-fade-in">
          <Card className="card-elegant max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  {currentLang === "pt" ? (
                    <>
                      <strong className="text-foreground">William Correa</strong> trabalha 
                      profissionalmente com desenvolvimento de software desde 2007, com vasta 
                      experiência em diversas tecnologias, especializando-se em <strong className="gradient-text">PHP</strong> e{" "}
                      <strong className="gradient-text">TypeScript</strong>.
                    </>
                  ) : (
                    <>
                      <strong className="text-foreground">William Correa</strong> has been 
                      professionally working in software development since 2007, with extensive 
                      experience in various technologies, specializing in <strong className="gradient-text">PHP</strong> and{" "}
                      <strong className="gradient-text">TypeScript</strong>.
                    </>
                  )}
                </p>
                <p className="leading-relaxed">
                  {currentLang === "pt" ? (
                    <>
                      Possui formação em Ciência da Computação e trabalha em todas as etapas 
                      do desenvolvimento de software, desde planejamento e execução até 
                      infraestrutura. William é apaixonado por ambientes colaborativos e 
                      está sempre procurando contribuir e aprender com comunidades de tecnologia.
                    </>
                  ) : (
                    <>
                      He holds a degree in Computer Science and works across all stages of 
                      software development, from planning and execution to infrastructure. 
                      William is passionate about collaborative environments and is always 
                      looking to contribute to and learn from technology communities.
                    </>
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;