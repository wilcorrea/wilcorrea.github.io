import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, MapPin, Mail, Globe, Calendar, Users, Award, GraduationCap } from "lucide-react";

interface ResumeProps {
  currentLang: string;
}

const Resume = ({ currentLang }: ResumeProps) => {
  const content = {
    en: {
      title: "Resume",
      subtitle: "Professional Experience & Background",
      downloadResume: "Download Full Resume",
      profile: "Profile",
      profileText: "Bachelor in Computer Science working in the market since 2007, involved in all phases of development and delivery of high-quality software. I constantly seek to improve my technical direction with teams to achieve the best results. My main skills are focused on creating sustainable and lasting web applications, aligned with the best software engineering practices available.",
      specialties: "Specialties",
      specialtiesList: "Software Architecture, Web Applications, Financial Services, Educational Services, On-Premise and Cloud Infrastructure, Developer Experience",
      experience: "Professional Experience", 
      community: "Community & Events",
      education: "Education",
      technologies: "Main Technologies",
      current: "Current",
      experiences: [
        {
          title: "Backend Software Developer & Tech Lead",
          company: "PicPay",
          period: "07/2022 - Current",
          location: "Remote",
          description: "Acting in tech enablement in the developer experience tribe, organizing and promoting knowledge propagation among new developers and existing teams. Responsible for creating tools to manage and conduct internal development, as well as creating materials ranging from tutorials on technologies used in the company to GenAI training.",
          technologies: "Go, Java, PHP, Python, React, Tailwind, ShadCN, AWS, GitHub Copilot",
          highlights: [
            "Organizational development and continuous onboarding",
            "Planning and development of high-volume applications",
            "Leading transactional integrity team services"
          ]
        },
        {
          title: "Tech Lead",
          company: "SmartFit",
          period: "12/2021 - 06/2022",
          location: "Remote",
          description: "Leading the company's growth team, directing A/B tests and various experiments while helping mature event capture and standardization flows.",
          technologies: "Ruby, Rails, Android, Kotlin, Swift"
        },
        {
          title: "Freelance Developer & Solution Architect",
          company: "Dracones",
          period: "05/2016 - Current",
          location: "Remote",
          description: "End-to-end application development for clients including Flix SRO, Brazilian Parachuting Confederation, Enpecel, Tigoo, Cyerlabs. For Flix SRO (2018-2021), organized and optimized management of a large portfolio of products and services, creating projects in biotechnology, financial services, e-commerce, affiliates, and digital token analysis. From requirements gathering to code implementation and infrastructure provisioning.",
          technologies: "PHP, Laravel, Symfony, Slim, MySQL, Vue.js, TypeScript, Quasar Framework, Docker, Terraform, AWS (RDS, SQS, SNS, S3), GCP, Digital Ocean"
        }
      ],
      communityItems: [
        {
          title: "Community Leader",
          organization: "PHP com Rapadura",
          period: "06/2021 - Current",
          description: "Leading a community that reaches audiences with limited access to technology, bringing knowledge that isn't always accessible to all audiences. With a reach of thousands of people on social media, PHP com Rapadura is a reference in knowledge and technology dissemination in Northeast Brazil."
        },
        {
          title: "Event Organizer",
          organization: "Rinha de Backend",
          period: "09/2023 - 09/2024", 
          description: "Organizing Backend Rinha to reach a large audience discussing how to solve problems that few developers will have opportunities throughout their careers, promoting advanced tool configurations for high-volume handling and architecture notions."
        }
      ]
    },
    pt: {
      title: "Currículo",
      subtitle: "Experiência Profissional e Formação",
      downloadResume: "Baixar Currículo Completo",
      profile: "Perfil",
      profileText: "Sou bacharel em Ciência da Computação e atuo no mercado desde 2007, envolvendo-me em todas as fases do desenvolvimento e entrega de software de alta qualidade. Busco constantemente aprimorar meu direcionamento técnico junto às equipes para alcançar os melhores resultados. Minhas principais habilidades estão voltadas para a criação de aplicações web sustentáveis e duradouras, alinhadas às melhores práticas de engenharia de software disponíveis.",
      specialties: "Especialidades",
      specialtiesList: "Arquitetura de software, Aplicações Web, Serviços Financeiros, Serviços Educacionais, Infraestrutura On-Premise e Cloud, Developer Experience",
      experience: "Experiência Profissional",
      community: "Comunidade e Eventos",
      education: "Formação",
      technologies: "Principais Tecnologias",
      current: "Atual",
      experiences: [
        {
          title: "Desenvolvedor de Software Backend e Tech Lead",
          company: "PicPay",
          period: "07/2022 - Atualmente",
          location: "Remoto",
          description: "Atuando em tech enablement na tribo de developer experience tenho organizado e promovido a propagação de conhecimento entre os novos desenvolvedores e dos times já existentes. Tenho sido responsável pela criação de ferramentas para gerenciar e conduzir o desenvolvimento interno, bem como a confecção de materiais que envolvem desde tutoriais sobre as tecnologias usadas na companhia até treinamentos em GenAI.",
          technologies: "Go, Java, PHP, Python, React, Tailwind, ShadCN, AWS, GitHub Copilot",
          highlights: [
            "Desenvolvimento organizacional e onboarding contínuo",
            "Planejamento e desenvolvimento de aplicações de alta volumetria", 
            "Liderança em serviços do time de integridade transacional"
          ]
        },
        {
          title: "Tech Lead",
          company: "SmartFit",
          period: "12/2021 - 06/2022",
          location: "Remoto",
          description: "Liderando o time de growth da empresa dirigi testes A/B e diversos experimentos além de ajudar no amadurecimento da captura e padronização dos fluxos de eventos.",
          technologies: "Ruby, Rails, Android, Kotlin, Swift"
        },
        {
          title: "Desenvolvedor Freelance e Arquiteto de Soluções",
          company: "Dracones", 
          period: "05/2016 - Atualmente",
          location: "Remoto",
          description: "Desenvolvimento ponta a ponta de aplicações para clientes incluindo Flix SRO, Confederação Brasileira de Paraquedismo, Enpecel, Tigoo, Cyerlabs. Para a Flix SRO (2018-2021), organizei e otimizei a gestão do grande parque de produtos e serviços, criando projetos nas áreas de biotecnologia, serviços financeiros, e-commerces, afiliados e análises de tokens digitais. Desde levantamento de requisitos até implementação do código e provisionamento da infraestrutura.",
          technologies: "PHP, Laravel, Symfony, Slim, MySQL, Vue.js, TypeScript, Quasar Framework, Docker, Terraform, AWS (RDS, SQS, SNS, S3), GCP, Digital Ocean"
        }
      ],
      communityItems: [
        {
          title: "Líder de comunidade",
          organization: "PHP com Rapadura",
          period: "06/2021 - Atualmente",
          description: "Pela comunidade PHP com Rapadura tenho conseguido alcançar públicos que possuem pouco acesso a tecnologia e levado a eles conhecimentos que nem sempre são acessíveis a todos os públicos. Com um alcance de alguns milhares de pessoas nas redes sociais, a PHP com Rapadura é uma referência na disseminação de conhecimento e tecnologia no nordeste."
        },
        {
          title: "Organizador de eventos",
          organization: "Rinha de Backend",
          period: "09/2023 - 09/2024",
          description: "Participando da organização da Rinha de Backend consegui alcançar um público muito grande para discutir como solucionar problemas que poucos desenvolvedores terão oportunidades ao longo de suas carreiras, promovendo configurações avançadas de ferramentas para lidar com alta volumetria e noções de arquitetura."
        }
      ]
    }
  };

  const t = content[currentLang as keyof typeof content];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/william-correa-resume-pt.pdf';
    link.download = 'william-correa-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {t.subtitle}
          </p>
          <Button
            onClick={downloadResume}
            className="glow-effect"
            size="lg"
          >
            <Download className="mr-2 h-5 w-5" />
            {t.downloadResume}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  {t.profile}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t.profileText}
                </p>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-lg">Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">Fortaleza, CE - Brasil</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:hey@wilcorrea.dev" className="text-sm hover:text-primary transition-colors">
                    hey@wilcorrea.dev
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-primary" />
                  <a href="https://wilcorrea.dev" className="text-sm hover:text-primary transition-colors">
                    wilcorrea.dev
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Specialties */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  {t.specialties}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t.specialtiesList}
                </p>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  {t.education}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">
                    {currentLang === "pt" ? "Ciência da Computação" : "Computer Science"}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {currentLang === "pt" 
                      ? "Centro Universitário Governador Ozanam Coelho (UniFagoc)"
                      : "UniFagoc University Center"
                    }
                  </p>
                  <p className="text-muted-foreground text-xs">2006 - 2009</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Experience & Community */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-6 highlight-text">{t.experience}</h3>
              <div className="space-y-6">
                {t.experiences.map((exp, index) => (
                  <Card key={index} className="card-elegant">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-lg">{exp.title}</CardTitle>
                          <p className="text-primary font-semibold">{exp.company}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-muted-foreground text-sm">
                            <Calendar className="h-3 w-3" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {exp.highlights && (
                        <div>
                          <h5 className="font-medium text-sm mb-2">{currentLang === "pt" ? "Principais atividades:" : "Key activities:"}</h5>
                          <ul className="text-muted-foreground text-sm space-y-1">
                            {exp.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div>
                        <h5 className="font-medium text-sm mb-2">{t.technologies}:</h5>
                        <p className="text-muted-foreground text-sm">
                          {exp.technologies}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Community & Events */}
            <div>
              <h3 className="text-2xl font-bold mb-6 highlight-text">{t.community}</h3>
              <div className="space-y-6">
                {t.communityItems.map((item, index) => (
                  <Card key={index} className="card-elegant">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <p className="text-primary font-semibold">{item.organization}</p>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <Calendar className="h-3 w-3" />
                          {item.period}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;