import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentLang, setCurrentLang] = useState<string>("en");

  // Initialize language from URL or default to "en"
  useEffect(() => {
    const langFromUrl = searchParams.get("lang");
    if (langFromUrl && (langFromUrl === "en" || langFromUrl === "pt")) {
      setCurrentLang(langFromUrl);
    } else if (!langFromUrl) {
      // Set default language in URL if not present
      setSearchParams({ lang: "en" });
    }
  }, []);

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
    setSearchParams({ lang });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        currentLang={currentLang} 
        onLanguageChange={handleLanguageChange} 
      />
      <main>
        <Hero currentLang={currentLang} />
        <About currentLang={currentLang} />
        <Experience currentLang={currentLang} />
        <Contact currentLang={currentLang} />
      </main>
      <Footer currentLang={currentLang} />
    </div>
  );
};

export default Index;
