import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";

interface HeaderProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const Header = ({ currentLang, onLanguageChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text">
            wilcorrea<span className="text-foreground">.</span>dev
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {currentLang === "pt" ? "Início" : "Home"}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {currentLang === "pt" ? "Sobre" : "About"}
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {currentLang === "pt" ? "Experiência" : "Experience"}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {currentLang === "pt" ? "Contato" : "Contact"}
            </button>
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <button
                onClick={() => onLanguageChange("en")}
                className={`text-sm transition-colors ${
                  currentLang === "en" ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
              <span className="text-muted-foreground">|</span>
              <button
                onClick={() => onLanguageChange("pt")}
                className={`text-sm transition-colors ${
                  currentLang === "pt" ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                PT
              </button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/50">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                {currentLang === "pt" ? "Início" : "Home"}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                {currentLang === "pt" ? "Sobre" : "About"}
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                {currentLang === "pt" ? "Experiência" : "Experience"}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                {currentLang === "pt" ? "Contato" : "Contact"}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;