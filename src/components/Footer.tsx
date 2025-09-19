import { Heart } from "lucide-react";

interface FooterProps {
  currentLang: string;
}

const Footer = ({ currentLang }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/50 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>
              {currentLang === "pt" 
                ? `© ${currentYear} William Correa. Feito com` 
                : `© ${currentYear} William Correa. Made with`
              }
            </span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>
              {currentLang === "pt" ? "e muito café" : "and lots of coffee"}
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            {currentLang === "pt" 
              ? "Desenvolvedor • Professor • Palestrante • Organizador de Comunidade"
              : "Developer • Teacher • Speaker • Community Organizer"
            }
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;