"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";
import { LogoCloud } from "@/components/ui/logo-cloud";
import Image from "next/image";

// TRANSLATIONS
const translations = {
  tr: {
    hero: {
      subtitle: "// Portfolio 2026",
      title: "YİĞİT BADİK",
      role: "Full-Stack Developer",
      university: "Türk Hava Kurumu Üniversitesi - Bilgisayar Mühendisliği",
      description1: "Modern web teknolojileri ile ölçeklenebilir uygulamalar geliştiren full-stack developer. ASP.NET Core ve React ekosisteminde uzmanlaşmış, AI teknolojilerini aktif olarak kullanan ve teknoloji trendlerini yakından takip eden bir yazılımcıyım.",
      description2: "Backend'den frontend'e, database tasarımından DevOps süreçlerine kadar geniş bir yelpazede deneyime sahibim. Data engineering ve cloud teknolojileri konularında da bilgi sahibiyim. Yeni teknolojilere hızlı adapte olabilme ve problem çözme yeteneklerimle projelerime değer katıyorum.",
      stats: {
        age: "25 YAŞINDA",
        location: "İSTANBUL, TR",
        experience: "1 YIL DENEYİM",
        projects: "10+ PROJE",
        type: "FULL-STACK"
      }
    },
    sections: {
      projects: "Projeler",
      experience: "Deneyimler",
    },
    projects: [
      {
        title: "bLog.",
        tag: "[PROJECT_01]",
        description: "ASP.NET Core ve React ile geliştirilmiş full-stack blog platformu. Kullanıcı yönetimi, rol tabanlı yetkilendirme ve kategori bazlı içerik filtreleme özellikleri içeren modern bir CMS çözümü.",
        viewGithub: "GitHub'da Görüntüle ↗"
      },
      {
        title: "EcoSphere",
        tag: "[PROJECT_02]",
        description: "Biyolojik çeşitlilik gözlem ve yönetim platformu. OpenLayers harita üzerinde 15,000+ tür ve 80,000+ gözlem kaydı görselleştirmesi. Doğa koruma çalışmaları için rol tabanlı veri yönetimi ve Excel/CSV export özellikleri.",
        viewGithub: "GitHub'da Görüntüle ↗"
      },
      {
        title: "CareerAI - Smart CV Coach",
        tag: "[PROJECT_03 - DEVAM EDİYOR]",
        description: "Yapay zeka destekli kariyer yönetim platformu (SaaS). Kullanıcıların PDF CV'lerini analiz ederek iş ilanlarına göre optimize eden, eksik anahtar kelimeleri bulan ve özelleştirilmiş ön yazılar oluşturan bir araç. [Şu an geliştirilme aşamasındadır]",
        viewGithub: "GitHub'da Görüntüle ↗"
      }
    ],
    footer: {
      built: "Built with Next.js • TypeScript • Tailwind CSS",
      status: "OFFLINE"
    }
  },
  en: {
    hero: {
      subtitle: "// Portfolio 2026",
      title: "YİĞİT BADİK",
      role: "Full-Stack Developer",
      university: "Turkish Aeronautical Association University - Computer Engineering",
      description1: "Full-stack developer building scalable applications with modern web technologies. Specialized in ASP.NET Core and React ecosystem, actively using AI technologies and closely following tech trends.",
      description2: "Experienced across a wide range from backend to frontend, database design to DevOps processes. Knowledgeable in data engineering and cloud technologies. Adding value to projects with quick adaptation to new technologies and problem-solving abilities.",
      stats: {
        age: "25 YEARS OLD",
        location: "ISTANBUL, TR",
        experience: "1 YEAR EXPERIENCE",
        projects: "10+ PROJECTS",
        type: "FULL-STACK"
      }
    },
    sections: {
      projects: "Projects",
      experience: "Experience",
    },
    projects: [
      {
        title: "bLog.",
        tag: "[PROJECT_01]",
        description: "Full-stack blog platform built with ASP.NET Core and React. Modern CMS solution featuring user management, role-based authorization, and category-based content filtering.",
        viewGithub: "View on GitHub ↗"
      },
      {
        title: "EcoSphere",
        tag: "[PROJECT_02]",
        description: "Biodiversity observation and management platform. Interactive map visualization of 15,000+ species and 80,000+ observation records using OpenLayers. Role-based data management and Excel/CSV export for conservation efforts.",
        viewGithub: "View on GitHub ↗"
      },
      {
        title: "CareerAI - Smart CV Coach",
        tag: "[PROJECT_03 - IN PROGRESS]",
        description: "AI-powered career management platform (SaaS). Analyzes user PDFs to optimize for job listings, finds missing keywords, and generates customized cover letters. [Currently under development]",
        viewGithub: "View on GitHub ↗"
      }
    ],
    footer: {
      built: "Built with Next.js • TypeScript • Tailwind CSS",
      status: "OFFLINE"
    }
  }
};

// Timeline data function
const getTimelineData = (lang: "tr" | "en"): TimelineEntry[] => {
  if (lang === "en") {
    return [
      {
        year: "2025",
        endYear: "",
        title: "Doğa Koruma Merkezi - Ankara",
        company: "Graduation Project - EcoSphere Platform",
        description: "Developed a biodiversity observation and management platform for a real NGO as part of my graduation project. Gained professional project experience through customer meetings, sprint planning, and iterative development following contact established through our professor.",
        responsibilities: [
          "Full-stack web application development using ASP.NET MVC with Entity Framework",
          "Interactive map visualization of 15,000+ species and 80,000+ observation records using OpenLayers library",
          "Role-based authentication and authorization system (Admin, Moderator, User roles)",
          "Azure SQL Database schema design, stored procedures, and performance optimization",
          "2-week sprints and retrospective meetings with Scrum framework",
          "Containerization with Docker and deployment to Azure App Service",
        ],
        technologies: ["ASP.NET MVC", "Entity Framework", "OpenLayers", "Azure SQL", "Docker", "Bootstrap", "jQuery", "Git"],
      },
      {
        year: "2023",
        endYear: "2025",
        title: "Doğuş Teknoloji - Istanbul",
        company: "Full-Stack Developer Intern",
        description: "My internship process started with the Future Entry Program and continued for 3 years. After completing the university's mandatory internship requirement, I continued voluntarily. Returned after graduation and gained 1 year of active work experience. Acquired in-depth knowledge of .NET ecosystem, modern web technologies, and professional software development processes.",
        responsibilities: [
          "ASP.NET Core Web API development, RESTful service design and versioning strategies",
          "Code-First approach with Entity Framework Core, Migration management and database optimization",
          "SPA development with React & TypeScript and scalable application development in ASP.NET-based N-Layer Architecture",
          "Clean Architecture, Repository Pattern, SOLID principles and Design Patterns implementations",
          "CI/CD pipeline setup with Azure DevOps, automated testing and release management",
          "Project development according to Agile/Scrum principles, version control with Git and branch-based workflow experience",
        ],
        technologies: ["ASP.NET Core", "Java", "React", "Next.js", "TypeScript", "Entity Framework Core", "SQL Server", "Git", "Swagger"],
      },
      {
        year: "2020",
        endYear: "2025",
        title: "Turkish Aeronautical Association University",
        company: "Computer Engineering Department - Ankara",
        description: "Completed comprehensive 5-year education including 1-year English Preparatory and 4-year undergraduate program. Completed a wide curriculum from software engineering fundamentals to advanced topics. Had the opportunity to experience different languages and frameworks thanks to the freedom of technology choice in projects.",
        responsibilities: [
          "Gained technical English, academic writing, and presentation skills through English Preparatory Program",
          "Learned HTML, CSS, JavaScript and HTTP fundamentals in web development courses",
          "Studied Linked List, Stack, Queue, Tree and Graph structures with basic sorting and search algorithms and Big-O analysis in Data Structures and Algorithms",
          "Learned SOLID principles, interface and abstract class structures, and UML-based design in Object-Oriented Programming",
          "Worked on 2D/3D game mechanics and component-based architecture using Unity and C#",
          "Learned supervised and unsupervised learning approaches with basic machine learning algorithms in AI and ML courses",
        ],
        technologies: ["C#", "Python", "Java", "JavaScript", "SQL", "Unity", "Git", "Linux", "HTML/CSS","OOP","UML","Data Structures & Algorithms"],
      },
    ];
  }
  
  return [
    {
      year: "2025",
      endYear: "",
      title: "Doğa Koruma Merkezi - Ankara",
      company: "Bitirme Projesi - EcoSphere Platform",
      description: "Üniversite bitirme projesi kapsamında gerçek bir NGO'nun ihtiyacı olan biyolojik çeşitlilik gözlem ve yönetim platformunu geliştirdik. Öğretmenimiz aracılığıyla kurulan iletişim sonrası müşteri toplantıları, sprint planlamaları ve iteratif geliştirme süreçleriyle profesyonel bir proje deneyimi kazandık.",
      responsibilities: [
        "ASP.NET MVC ile Entity Framework kullanarak full-stack web uygulaması geliştirme",
        "OpenLayers kütüphanesi ile interaktif harita üzerinde 15,000+ tür ve 80,000+ gözlem kaydı görselleştirme",
        "Role-based authentication ve authorization sistemi (Admin, Moderator, User rolleri)",
        "Azure SQL Database şeması tasarımı, stored procedure'ler ve performans optimizasyonu",
        "Scrum framework'ü ile 2 haftalık sprint'ler ve retrospective toplantıları",
        "Docker ile containerization ve Azure App Service'e deployment",
      ],
      technologies: ["ASP.NET MVC", "Entity Framework", "OpenLayers", "Azure SQL", "Docker", "Bootstrap", "jQuery", "Git"],
    },
    {
      year: "2023",
      endYear: "2025",
      title: "Doğuş Teknoloji - İstanbul",
      company: "Full-Stack Stajyer Yazılımcı",
      description: "Geleceğe Giriş Programı kapsamında başlayan ve 3 yıl boyunca devam eden staj sürecim. Üniversitenin zorunlu staj gereksinimini karşıladıktan sonra gönüllü olarak devam ettim. Mezuniyet sonrası da tekrar dönerek toplam 1 yıl aktif çalışma deneyimi kazandım. .NET ekosistemi, modern web teknolojileri ve profesyonel yazılım geliştirme süreçleri konusunda derinlemesine bilgi edindim.",
      responsibilities: [
        "ASP.NET Core Web API geliştirme, RESTful servis tasarımı ve versiyonlama stratejileri",
        "Entity Framework Core ile Code-First yaklaşımı, Migration yönetimi ve database optimizasyonu",
        "React & TypeScript ile SPA geliştirme ve ASP.NET tabanlı N-Layer Architecture yapısında ölçeklenebilir uygulama geliştirme.",
        "Clean Architecture, Repository Pattern, SOLID prensipleri ve Design Patterns uygulamaları",
        "Azure DevOps ile CI/CD pipeline kurulumu, automated testing ve release management",
        "Agile/Scrum prensiplerine uygun proje geliştirme, Git ile versiyon kontrolü ve branch-based workflow deneyimi.",
      ],
      technologies: ["ASP.NET Core", "Java", "React", "Next.js", "TypeScript", "Entity Framework Core", "SQL Server", "Git", "Swagger"],
    },
    {
      year: "2020",
      endYear: "2025",
      title: "Türk Hava Kurumu Üniversitesi",
      company: "Bilgisayar Mühendisliği Bölümü - Ankara",
      description: "1 yıl İngilizce Hazırlık ve 4 yıl lisans eğitimi olmak üzere 5 yıllık kapsamlı eğitim aldım. Yazılım mühendisliği temellerinden ileri seviye konulara kadar geniş bir müfredat tamamladım. Projelerde teknoloji seçimi özgürlüğü sayesinde farklı diller ve framework'ler deneyimleme fırsatı buldum.",
      responsibilities: [
        "İngilizce Hazırlık Programı kapsamında teknik İngilizce, akademik yazma ve sunum becerileri kazandım.",
        "Web geliştirme derslerinde HTML, CSS, JavaScript ve HTTP temellerini öğrendim.",
        "Veri Yapıları ve Algoritmalar dersinde Linked List, Stack, Queue, Tree ve Graph yapıları ile temel sıralama ve arama algoritmalarını ve Big-O analizini çalıştım.",
        "Nesne Yönelimli Programlama kapsamında SOLID prensipleri, interface ve abstract class yapıları ile UML tabanlı tasarım öğrendim.",
        "Unity ve C# kullanarak 2D/3D oyun mekaniği ve component-based architecture üzerine çalışmalar yaptım.",
        "Yapay Zeka ve Makine Öğrenmesi derslerinde supervised ve unsupervised learning yaklaşımları ile temel makine öğrenmesi algoritmalarını öğrendim.",
      ],
      technologies: ["C#", "Python", "Java", "JavaScript", "SQL", "Unity", "Git", "Linux", "HTML/CSS","OOP","UML","Data Structures & Algorithms"],
    },
  ];
};

const techStack = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", alt: "C#", name: "C#", url: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", alt: ".NET", name: ".NET", url: "https://dotnet.microsoft.com/" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js", name: "Next.js", url: "https://nextjs.org/" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", name: "React", url: "https://react.dev/" },
  { src: "https://svgl.app/library/typescript.svg", alt: "TypeScript", name: "TypeScript", url: "https://www.typescriptlang.org/" },
  { src: "https://svgl.app/library/javascript.svg", alt: "JavaScript", name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { src: "https://svgl.app/library/tailwindcss.svg", alt: "Tailwind CSS", name: "Tailwind", url: "https://tailwindcss.com/" },
  { src: "https://svgl.app/library/bootstrap.svg", alt: "Bootstrap", name: "Bootstrap", url: "https://getbootstrap.com/" },
  { src: "https://svgl.app/library/framer.svg", alt: "Framer Motion", name: "Framer", url: "https://www.framer.com/motion/" },
  { src: "https://svgl.app/library/python.svg", alt: "Python", name: "Python", url: "https://www.python.org/" },
  { src: "https://svgl.app/library/java.svg", alt: "Java", name: "Java", url: "https://www.java.com/" },
  { src: "https://svgl.app/library/docker.svg", alt: "Docker", name: "Docker", url: "https://www.docker.com/" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", alt: "SQL Server", name: "MSSQL", url: "https://www.microsoft.com/en-us/sql-server" },
  { src: "https://svgl.app/library/git.svg", alt: "Git", name: "Git", url: "https://git-scm.com/" },
  { src: "https://svgl.app/library/unity.svg", alt: "Unity", name: "Unity", url: "https://unity.com/" },
];

const projectsData = [
  {
    tags: ["ASP.NET Core", "React", "Tailwind", "Entity Framework", "FluentValidation"],
    direction: "left" as const,
    images: ["/projects/blog-login.png", "/projects/blog-logo.png"],
    github: "https://github.com/Yigitbdk/Blog"
  },
  {
    tags: ["ASP.NET MVC", "OpenLayers", "Azure SQL", "Docker", "Bootstrap"],
    direction: "right" as const,
    images: ["/projects/gozlem-map.jpeg", "/projects/gozlem-team.jpeg"],
    github: "https://github.com/tolgaunlu99/EcoSphere"
  },
  {
    tags: ["Next.js 14", "Gemini AI API", "Supabase", "Stripe/Iyzico", "Tailwind CSS"],
    direction: "left" as const,
    images: [
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1920&h=1080&fit=crop&q=90",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop&q=90"
    ],
    github: "#"
  },
];

// IMAGE COMPARISON SLIDER
function ImageComparisonSlider({ beforeImage, afterImage, direction }: { beforeImage: string; afterImage: string; direction: "left" | "right" }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = ((clientX - rect.left) / rect.width) * 100;
    x = Math.max(0, Math.min(100, x));
    setSliderPosition(x);
  }, [isDragging]);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMove]);

  const offset = 28.125;

  const getClipPath = () => {
    return direction === "left"
      ? `polygon(0% 0%, ${sliderPosition + offset}% 0%, ${sliderPosition - offset}% 100%, 0% 100%)`
      : `polygon(${sliderPosition + offset}% 0%, 100% 0%, 100% 100%, ${sliderPosition - offset}% 100%)`;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video select-none overflow-hidden brutal bg-slate-900 cursor-ew-resize touch-none"
      onMouseDown={(e) => { e.preventDefault(); setIsDragging(true); }}
      onTouchStart={() => setIsDragging(true)}
    >
      <Image src={beforeImage} alt="Before" fill className="object-cover pointer-events-none" quality={95} sizes="100vw" />
      <div className="absolute inset-0 z-10 pointer-events-none transition-none" style={{ clipPath: getClipPath() }}>
        <Image src={afterImage} alt="After" fill className="object-cover transition-none" quality={95} sizes="100vw" priority />
      </div>
      <div className="absolute top-0 bottom-0 z-20 pointer-events-none transition-none" style={{ left: `${sliderPosition}%`, width: '1px' }}>
        <div className="absolute h-[250%] w-1 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]" style={{ top: '-75%', left: '0', transform: `rotate(45deg)`, transformOrigin: 'center' }} />
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-blue-500 border-2 border-white flex items-center justify-center shadow-2xl z-30">
           <span className="text-white font-bold">↔</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<"tr" | "en">("tr");
  const [timelineData, setTimelineData] = useState<TimelineEntry[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("language") as "tr" | "en" | null;
    if (saved) setLanguage(saved);

    const handleChange = (e: CustomEvent<"tr" | "en">) => {
      setLanguage(e.detail);
    };

    window.addEventListener("languageChange" as any, handleChange);
    return () => window.removeEventListener("languageChange" as any, handleChange);
  }, []);

  useEffect(() => {
    setTimelineData(getTimelineData(language));
  }, [language]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("active"); });
    }, { threshold: 0.1 });
    document.querySelectorAll(".scroll-reveal, .project-left, .project-right").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const t = translations[language];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center pt-16 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-500/20 rotate-12" style={{ animation: "float 8s ease-in-out infinite" }}></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-slate-700/30 -rotate-45" style={{ animation: "float 6s ease-in-out infinite" }}></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-500/5 rotate-45" style={{ animation: "float 10s ease-in-out infinite" }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="mb-4 md:mb-8">
            <span className="text-blue-400 text-sm">{t.hero.subtitle}</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-none glitch" data-text={t.hero.title}>
            <span className="text-white">{t.hero.title}</span>
          </h1>
          <div className="mb-8 space-y-3">
            <p className="text-2xl md:text-3xl text-slate-300 font-medium">{t.hero.role}</p>
            <p className="text-lg text-slate-400">{t.hero.university}</p>
          </div>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            {t.hero.description1}
          </p>
          <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t.hero.description2}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500">
            <div className="flex items-center space-x-2"><span className="text-blue-400">►</span><span>{t.hero.stats.age}</span></div>
            <div className="flex items-center space-x-2"><span className="text-blue-400">►</span><span>{t.hero.stats.location}</span></div>
            <div className="flex items-center space-x-2"><span className="text-blue-400">►</span><span>{t.hero.stats.experience}</span></div>
            <div className="flex items-center space-x-2"><span className="text-blue-400">►</span><span>{t.hero.stats.projects}</span></div>
            <div className="flex items-center space-x-2"><span className="text-blue-400">►</span><span>{t.hero.stats.type}</span></div>
          </div>
        </div>
        <div className="num hidden lg:block" style={{ left: "1rem", top: "50%", transform: "translateY(-50%)" }}>01</div>
      </section>

      <div className="divider my-8 md:my-16"></div>

      {/* Projects Section */}
      <section id="work" className="py-12 md:py-24 relative overflow-x-hidden">
        <div className="num hidden lg:block" style={{ right: "1rem", top: "10%" }}>02</div>
        <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-16">
          <div className="flex items-center space-x-4 mb-3 md:mb-4">
            <span className="text-blue-400 text-xs md:text-sm">[SECTION_02]</span>
            <div className="h-px flex-1 bg-slate-800"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white uppercase leading-none">{t.sections.projects}</h2>
        </div>
        <div className="flex flex-col gap-16 md:gap-32">
          {t.projects.map((project, index) => (
            <div key={index} className={`grid md:grid-cols-12 gap-6 md:gap-0 items-center w-full ${projectsData[index].direction === "left" ? "project-left" : "project-right"} scroll-reveal px-6 md:px-0`}>
              <div className={`md:col-span-7 ${projectsData[index].direction === "right" ? "md:order-2" : "md:order-1"}`}>
                <ImageComparisonSlider beforeImage={projectsData[index].images[0]} afterImage={projectsData[index].images[1]} direction={projectsData[index].direction} />
              </div>
              <div className={`md:col-span-5 md:px-16 ${projectsData[index].direction === "right" ? "md:order-1" : "md:order-2"}`}>
                <span className="text-xs text-blue-400">{project.tag}</span>
                <h3 className="text-4xl font-bold text-white mt-2 mb-4 uppercase">{project.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {projectsData[index].tags.map((tag, i) => <span key={i} className="px-3 py-1 bg-slate-800 border border-slate-700 text-blue-400 text-xs font-bold uppercase">{tag}</span>)}
                </div>
                <div className="flex gap-4">
                  <a href={projectsData[index].github} target="_blank" rel="noopener noreferrer" className="brutal bg-slate-800 dark:bg-slate-800 light:bg-white dark:text-slate-200 light:text-slate-900 px-6 py-3 text-xs font-bold uppercase hover:bg-blue-500/10 hover:border-blue-500 transition-all">{project.viewGithub}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider my-8 md:my-16"></div>

      {/* Experience Section */}
      <section id="exp" className="py-12 md:py-24 relative overflow-hidden">
        <div className="num hidden lg:block" style={{ right: "1rem", top: "10%" }}>03</div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 md:mb-16">
            <div className="flex items-center space-x-4 mb-3 md:mb-4">
              <span className="text-blue-400 text-xs md:text-sm">[SECTION_03]</span>
              <div className="h-px flex-1 bg-slate-800"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white uppercase">
              {t.sections.experience}
            </h2>
          </div>
          <Timeline data={timelineData} />
        </div>
      </section>

      <div className="divider my-8 md:my-16"></div>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-24 relative">
        <div className="num hidden lg:block" style={{ left: "1rem", top: "20%" }}>04</div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center space-x-4 mb-8 md:mb-12">
            <span className="text-blue-400 text-xs md:text-sm">[SECTION_04]</span>
            <div className="h-px flex-1 bg-slate-800"></div>
          </div>
          <ContactSection />
        </div>
      </section>

      {/* Tech Stack */}
      <div className="border-slider">
        <div className="max-w-7xl mx-auto px-6 py-4 md:py-6">
          <LogoCloud logos={techStack} />
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-[#0a0e14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <div className="text-xs text-slate-500 mb-1">© 2024 YİĞİT BADİK</div>
              <div className="text-xs text-slate-600">{t.footer.built}</div>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/yigitbadik" target="_blank" rel="noopener noreferrer" className="brutal bg-slate-900/50 p-3 hover:scale-110 hover:rotate-3 transition-all">
                <svg className="w-6 h-6 text-slate-400 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/yigitbadik" target="_blank" rel="noopener noreferrer" className="brutal bg-slate-900/50 p-3 hover:scale-110 hover:-rotate-3 transition-all">
                <svg className="w-6 h-6 text-slate-400 hover:text-blue-400 transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <div className="dot-red"></div>
              <span className="text-xs text-slate-500">{t.footer.status}</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}