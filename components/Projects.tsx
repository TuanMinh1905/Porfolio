"use client";

import Image from "next/image";
import { useLanguageStore } from "@/store/languageStore";
import { content } from "@/data/content";
import SectionWrapper from "./SectionWrapper";

const projectGradients = [
  "from-[#6C63FF]/20 to-[#00D4FF]/20 border-[#6C63FF]/20",
  "from-[#00D4FF]/20 to-[#6C63FF]/20 border-[#00D4FF]/20",
];

const glowColors = ["group-hover:shadow-[#6C63FF]/20", "group-hover:shadow-[#00D4FF]/20"];

const techColorMap: Record<string, string> = {
  "Next.js": "bg-white/10 text-white border-white/20",
  "React": "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  "Node.js": "bg-green-500/10 text-green-300 border-green-500/20",
  "HonoJS": "bg-orange-400/10 text-orange-300 border-orange-400/20",
  "MongoDB": "bg-green-600/10 text-green-400 border-green-600/20",
  "Zustand": "bg-amber-500/10 text-amber-300 border-amber-500/20",
  "Three.js": "bg-gray-400/10 text-gray-200 border-gray-400/20",
  "Nuxt.js": "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  "Vue.js": "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
  "Pinia": "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  "REST API": "bg-blue-500/10 text-blue-300 border-blue-500/20",
  "Tailwind CSS": "bg-sky-500/10 text-sky-300 border-sky-500/20",
  "TailorNet": "bg-violet-500/10 text-violet-300 border-violet-500/20",
  "SMPL": "bg-purple-500/10 text-purple-300 border-purple-500/20",
  "Python": "bg-yellow-600/10 text-yellow-400 border-yellow-600/20",
  "3D Rendering": "bg-pink-500/10 text-pink-300 border-pink-500/20",
  "SEO": "bg-orange-500/10 text-orange-300 border-orange-500/20",
  "SSR/CSR": "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  "GitHub": "bg-gray-500/10 text-gray-300 border-gray-500/20",
};

function getTechClass(tech: string) {
  return techColorMap[tech] ?? "bg-white/5 text-white/60 border-white/10";
}

export default function Projects() {
  const { lang } = useLanguageStore();
  const t = content.projects[lang];

  return (
    <SectionWrapper id="projects">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-[#6C63FF] font-mono text-sm mb-2">{t.subtitle}</p>
        <h2 className="text-4xl md:text-5xl font-black text-white">{t.title}</h2>
        <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] rounded-full mx-auto" />
      </div>

      <div className="space-y-10">
        {t.items.map((project, idx) => (
          <div
            key={project.id}
            className={`group relative overflow-hidden bg-gradient-to-br ${projectGradients[idx % 2]} border rounded-3xl p-8 md:p-10 hover:scale-[1.01] transition-all duration-500 hover:shadow-2xl ${glowColors[idx % 2]}`}
          >
            {/* Background image with blur + dark overlay (only when image field exists) */}
            {"image" in project && project.image && (
              <>
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.image as string}
                    alt={project.title}
                    fill
                    className="object-cover object-top blur-sm scale-105"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a0a0f]/75 via-[#12121a]/65 to-[#0d0d14]/70" />
              </>
            )}

            {/* Card content sits above background */}
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 rounded-full text-xs font-bold bg-[#6C63FF]/20 text-[#a99dff] border border-[#6C63FF]/30"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white">{project.title}</h3>
                  <p className="text-white/50 text-sm mt-1">{project.subtitle}</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs text-white/30 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {project.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/70 leading-relaxed mb-6">{project.description}</p>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="text-white/40 text-xs font-mono uppercase tracking-widest mb-4">
                  Key Highlights
                </h4>
                <ul className="space-y-3">
                  {project.highlights.map((h, i) => {
                    const isFeatured = "featuredHighlights" in project && (project.featuredHighlights as number[]).includes(i);
                    return (
                      <li key={i} className="flex gap-3 items-start">
                        <span className={`${isFeatured ? "text-[#00D4FF] drop-shadow-[0_0_5px_rgba(0,212,255,0.8)]" : "text-[#6C63FF]"} mt-0.5 flex-shrink-0 text-sm`}>–</span>
                        <span className={`${isFeatured ? "text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" : "text-white/70"} text-sm leading-relaxed`}>{h}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="mb-8">
                <h4 className="text-white/40 text-xs font-mono uppercase tracking-widest mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getTechClass(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] text-white text-sm font-semibold hover:scale-105 hover:shadow-lg hover:shadow-[#6C63FF]/30 transition-all duration-300"
                  >
                    {t.view_live}
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-semibold hover:border-[#6C63FF]/50 hover:bg-[#6C63FF]/10 transition-all duration-300"
                  >
                    {t.view_github}
                  </a>
                )}
                {project.links.demo !== undefined && (
                  project.links.demo ? (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full border border-[#00D4FF]/30 text-[#00D4FF] text-sm font-semibold hover:bg-[#00D4FF]/10 hover:scale-105 transition-all duration-300"
                    >
                      {t.view_demo}
                    </a>
                  ) : (
                    <span className="px-5 py-2.5 rounded-full border border-white/10 text-white/30 text-sm font-semibold cursor-not-allowed">
                      {t.view_demo} (coming soon)
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
