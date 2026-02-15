"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [language, setLanguage] = useState<"tr" | "en">("tr");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "about";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 200;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute("id") || "about";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem("language") as "tr" | "en" | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "tr" ? "en" : "tr";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    
    // Dispatch custom event
    window.dispatchEvent(new CustomEvent("languageChange", { detail: newLanguage }));
  };

  const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const navText = language === "tr" ? {
    about: "[01_HAKKIMDA]",
    projects: "[02_PROJELER]",
    experience: "[03_DENEYİM]",
    contact: "[04_İLETİŞİM]"
  } : {
    about: "[01_ABOUT]",
    projects: "[02_PROJECTS]",
    experience: "[03_EXPERIENCE]",
    contact: "[04_CONTACT]"
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e14]/95 border-b border-[#334155] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-16 flex items-center justify-between text-xs">
        {/* Left - Available Status */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="dot"></div>
          <span className="text-slate-400 text-xs md:text-xs">AVAILABLE</span>
        </div>

        {/* Center - Navigation Links */}
        <div className="absolute left-1/2 -translate-x-1/2 flex space-x-6 md:space-x-8 text-sm md:text-xs">
          <a
            href="#about"
            onClick={(e) => smoothScrollTo(e, 'about')}
            className={`nav-link text-slate-400 hover:text-blue-400 transition uppercase ${
              activeSection === "about" ? "active" : ""
            }`}
          >
            <span className="hidden md:inline">{navText.about}</span>
            <span className="md:hidden font-bold">01</span>
          </a>
          <a
            href="#work"
            onClick={(e) => smoothScrollTo(e, 'work')}
            className={`nav-link text-slate-400 hover:text-blue-400 transition uppercase ${
              activeSection === "work" ? "active" : ""
            }`}
          >
            <span className="hidden md:inline">{navText.projects}</span>
            <span className="md:hidden font-bold">02</span>
          </a>
          <a
            href="#exp"
            onClick={(e) => smoothScrollTo(e, 'exp')}
            className={`nav-link text-slate-400 hover:text-blue-400 transition uppercase ${
              activeSection === "exp" ? "active" : ""
            }`}
          >
            <span className="hidden md:inline">{navText.experience}</span>
            <span className="md:hidden font-bold">03</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => smoothScrollTo(e, 'contact')}
            className={`nav-link text-slate-400 hover:text-blue-400 transition uppercase ${
              activeSection === "contact" ? "active" : ""
            }`}
          >
            <span className="hidden md:inline">{navText.contact}</span>
            <span className="md:hidden font-bold">04</span>
          </a>
        </div>

        {/* Right - Logo + Language Toggle */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Logo */}
          <div className="text-slate-400 text-xs flex items-center gap-1 md:gap-2">
            <span className="text-base md:text-3xl font-bold text-white glitch leading-none" data-text="YB">YB</span>
          </div>

          {/* Divider - Desktop Only */}
          <span className="hidden md:flex text-blue-400 items-center">/</span>

          {/* Language Toggle - Responsive */}
          <div className="flex items-center">
            {/* Mobile - Compact */}
            <button
              onClick={toggleLanguage}
              className="md:hidden relative inline-flex items-center justify-center w-[2.5em] h-[2em] rounded-[8px] border-2 border-slate-700 bg-slate-800/80 hover:border-blue-500 transition-all duration-300"
            >
              <span className="text-xs font-bold text-blue-400">
                {language.toUpperCase()}
              </span>
            </button>

            {/* Desktop - Animated Slider */}
            <button
              onClick={toggleLanguage}
              className="hidden md:inline-flex relative items-center justify-center w-[3.5em] h-[2em] rounded-[30px] border-2 border-slate-700 bg-slate-800/80 hover:border-blue-500 transition-all duration-500 overflow-hidden group"
            >
              {/* TR Text */}
              <span
                className={`absolute text-xs font-bold transition-all duration-500 ${
                  language === "tr"
                    ? "opacity-100 translate-x-0 text-blue-400"
                    : "opacity-0 -translate-x-4 text-slate-400"
                }`}
              >
                TR
              </span>
              
              {/* EN Text */}
              <span
                className={`absolute text-xs font-bold transition-all duration-500 ${
                  language === "en"
                    ? "opacity-100 translate-x-0 text-blue-400"
                    : "opacity-0 translate-x-4 text-slate-400"
                }`}
              >
                EN
              </span>

              {/* Sliding background indicator */}
              <span
                className={`absolute h-[1.2em] w-[1.4em] rounded-full bg-blue-500/20 transition-all duration-500 ${
                  language === "tr" ? "translate-x-[-0.7em]" : "translate-x-[0.7em]"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}