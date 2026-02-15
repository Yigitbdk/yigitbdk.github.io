"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface TimelineEntry {
  year: string;
  endYear?: string;
  title: string;
  company: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const update = () => {
      if (ref.current) setHeight(ref.current.getBoundingClientRect().height);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-transparent font-mono" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-1 md:pt-10 md:gap-1">
            {/* Timeline Year + Dot */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Animated Dot Container */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#0a0e14] flex items-center justify-center timeline-dot">
                {/* Animated Inner Dot */}
                <div className="h-4 w-4 rounded-full bg-slate-700 border-2 border-slate-600 timeline-dot-inner" />
              </div>
              
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-slate-500">
                {item.year}
                {item.endYear && (
                  <>
                    <br />
                    <span className="text-base md:text-xl">{item.endYear}</span>
                  </>
                )}
              </h3>
            </div>

            {/* Content - Card */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-slate-500">
                {item.year}
                {item.endYear && ` - ${item.endYear}`}
              </h3>
              
              {/* Card Content with entrance animation */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
                className="brutal border-2 md:border-3 border-slate-700 bg-slate-900/50 p-6 md:p-12 shadow-[4px_4px_0_#1e293b] md:shadow-[6px_6px_0_#1e293b]"
              >
                <h3 className="text-3xl md:text-5xl font-bold text-white uppercase mb-3 tracking-tight leading-tight">
                  {item.title}
                </h3>
                <div className="text-sm md:text-base text-slate-400 mb-6">{item.company}</div>
                <p className="text-slate-300 text-sm md:text-lg mb-8 leading-relaxed">
                  {item.description}
                </p>

                {item.responsibilities && item.responsibilities.length > 0 && (
                  <ul className="space-y-3 md:space-y-5 mb-8">
                    {item.responsibilities.slice(0, 6).map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 md:gap-4">
                        <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-slate-700 bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                          <span className="text-blue-400 text-xs md:text-sm font-bold">✓</span>
                        </div>
                        <span className="text-slate-400 text-xs md:text-base leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                    {item.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 md:px-4 py-1 md:py-2 bg-slate-800 border border-slate-700 text-blue-400 text-xs md:text-sm hover:border-[#4A7DD9] hover:bg-[#334155] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        ))}

        {/* TIMELINE LINE */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-slate-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-500 via-blue-400 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};