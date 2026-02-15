"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1 && !visibleProjects.includes(index)) {
              setVisibleProjects((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: "-50px" }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      tag: "[PROJECT_01]",
      description:
        "Gerçek zamanlı envanter takibi, Stripe ödeme entegrasyonu ve kapsamlı admin paneli ile tam teşekküllü e-ticaret çözümü.",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      direction: "left" as const,
      images: [
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
      ]
    },
    {
      title: "AI Content Generator",
      tag: "[PROJECT_02]",
      description:
        "OpenAI destekli içerik üretim platformu. SEO optimizasyonu, çoklu dil desteği ve otomatik yayın akışları.",
      tags: ["Next.js", "OpenAI API", "Tailwind"],
      direction: "right" as const,
      images: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        "https://images.unsplash.com/photo-1676277791608-ac54525aa94f?w=800&q=80"
      ]
    },
    {
      title: "Analytics Dashboard",
      tag: "[PROJECT_03]",
      description:
        "Gerçek zamanlı veri görselleştirme platformu. Özelleştirilebilir widget'lar, gelişmiş filtreleme.",
      tags: ["React", "TypeScript", "Chart.js"],
      direction: "left" as const,
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
      ]
    },
  ];

  return (
    <section id="work" className="py-24 relative">
      <div className="num hidden lg:block">02</div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-blue-400 text-sm">[SECTION_02]</span>
            <div className="h-px flex-1 bg-slate-800"></div>
          </div>
          <h2 className="text-6xl font-bold text-white uppercase">
            Projeler
          </h2>
        </div>

        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => {
              projectRefs.current[index] = el;
            }}
            className={`mb-20 grid md:grid-cols-2 gap-8 items-center transition-all duration-700 ${
              visibleProjects.includes(index)
                ? "opacity-100 translate-x-0"
                : project.direction === "left"
                ? "opacity-0 -translate-x-20"
                : "opacity-0 translate-x-20"
            }`}
          >
            {/* Image Container with Diagonal Split */}
            <div
              className={`relative aspect-[4/3] overflow-hidden brutal bg-slate-900 ${
                project.direction === "right" ? "md:order-2" : ""
              }`}
            >
              {/* Image 1 - Top Left */}
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: project.direction === "left" 
                    ? "polygon(0 0, 100% 0, 0 100%)" 
                    : "polygon(100% 0, 100% 100%, 0 100%)"
                }}
              >
                <Image
                  src={project.images[0]}
                  alt={`${project.title} - View 1`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Diagonal Line */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: project.direction === "left"
                    ? "linear-gradient(135deg, transparent calc(50% - 2px), #4A7DD9 calc(50% - 2px), #4A7DD9 calc(50% + 2px), transparent calc(50% + 2px))"
                    : "linear-gradient(45deg, transparent calc(50% - 2px), #4A7DD9 calc(50% - 2px), #4A7DD9 calc(50% + 2px), transparent calc(50% + 2px))"
                }}
              />

              {/* Image 2 - Bottom Right */}
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: project.direction === "left"
                    ? "polygon(100% 0, 100% 100%, 0 100%)"
                    : "polygon(0 0, 100% 0, 0 100%)"
                }}
              >
                <Image
                  src={project.images[1]}
                  alt={`${project.title} - View 2`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity bg-blue-500 pointer-events-none" />
            </div>

            {/* Content */}
            <div className={project.direction === "right" ? "md:order-1" : ""}>
              <span className="text-xs text-blue-400">{project.tag}</span>
              <h3 className="text-3xl font-bold text-white mt-2 mb-4 uppercase">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-800 border border-slate-700 text-blue-400 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="brutal bg-slate-800 text-slate-400 hover:text-blue-400 px-4 py-2 text-xs uppercase transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
                >
                  Demo ↗
                </a>
                <a
                  href="#"
                  className="brutal bg-slate-800 text-slate-400 hover:text-blue-400 px-4 py-2 text-xs uppercase transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}