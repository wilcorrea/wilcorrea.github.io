import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [currentLang, setCurrentLang] = useState<string>("en");

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
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
