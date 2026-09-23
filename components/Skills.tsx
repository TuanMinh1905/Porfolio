"use client";

import { useLanguageStore } from "@/store/languageStore";
import { content } from "@/data/content";
import SectionWrapper from "./SectionWrapper";

const groupColors: Record<string, string> = {
  "🎨": "from-pink-500/20 to-purple-500/20 border-pink-500/20",
  "⚙️": "from-blue-500/20 to-cyan-500/20 border-blue-500/20",
  "🔄": "from-green-500/20 to-teal-500/20 border-green-500/20",
  "🛠️": "from-orange-500/20 to-amber-500/20 border-orange-500/20",
  "🤖": "from-violet-500/20 to-indigo-500/20 border-violet-500/20",
};

const badgeColors: Record<string, string> = {
  "🎨": "bg-pink-500/10 border-pink-500/20 text-pink-300 hover:bg-pink-500/20",
  "⚙️": "bg-blue-500/10 border-blue-500/20 text-blue-300 hover:bg-blue-500/20",
  "🔄": "bg-green-500/10 border-green-500/20 text-green-300 hover:bg-green-500/20",
  "🛠️": "bg-orange-500/10 border-orange-500/20 text-orange-300 hover:bg-orange-500/20",
  "🤖": "bg-violet-500/10 border-violet-500/20 text-violet-300 hover:bg-violet-500/20",
};

// Featured badge — full glow per group accent color
const featuredColors: Record<string, string> = {
  "🎨": "bg-pink-500/25 border-pink-400/60 text-pink-200 font-bold shadow-[0_0_10px_rgba(236,72,153,0.45)] hover:shadow-[0_0_16px_rgba(236,72,153,0.65)] hover:bg-pink-500/35 scale-105",
  "⚙️": "bg-blue-500/25 border-blue-400/60 text-blue-200 font-bold shadow-[0_0_10px_rgba(59,130,246,0.45)] hover:shadow-[0_0_16px_rgba(59,130,246,0.65)] hover:bg-blue-500/35 scale-105",
  "🔄": "bg-green-500/25 border-green-400/60 text-green-200 font-bold shadow-[0_0_10px_rgba(34,197,94,0.45)] hover:shadow-[0_0_16px_rgba(34,197,94,0.65)] hover:bg-green-500/35 scale-105",
  "🛠️": "bg-orange-500/25 border-orange-400/60 text-orange-200 font-bold shadow-[0_0_10px_rgba(249,115,22,0.45)] hover:shadow-[0_0_16px_rgba(249,115,22,0.65)] hover:bg-orange-500/35 scale-105",
  "🤖": "bg-violet-500/25 border-violet-400/60 text-violet-200 font-bold shadow-[0_0_10px_rgba(139,92,246,0.45)] hover:shadow-[0_0_16px_rgba(139,92,246,0.65)] hover:bg-violet-500/35 scale-105",
};

export default function Skills() {
  const { lang } = useLanguageStore();
  const t = content.skills[lang];

  return (
    <SectionWrapper id="skills" className="bg-[#0d0d14]">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-[#6C63FF] font-mono text-sm mb-2">{t.subtitle}</p>
        <h2 className="text-4xl md:text-5xl font-black text-white">{t.title}</h2>
        <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] rounded-full mx-auto" />
        {/* Legend */}
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-pink-400 shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
          <span className="text-white/50 text-xs font-mono">{t.featured_note}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {t.groups.map((group) => {
          const featuredSet = new Set(("featured" in group && group.featured) ? group.featured as string[] : []);
          return (
            <div
              key={group.name}
              className={`relative bg-gradient-to-br ${groupColors[group.icon] ?? "from-white/5 to-white/5 border-white/10"} border rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm`}
            >
              <div className="mb-4">
                <h3 className="text-white font-bold text-base">{group.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const isFeatured = featuredSet.has(skill);
                  return (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-xs border cursor-default transition-all duration-200 ${
                        isFeatured
                          ? (featuredColors[group.icon] ?? "bg-white/20 border-white/50 text-white font-bold scale-105")
                          : (badgeColors[group.icon] ?? "bg-white/5 border-white/10 text-white/70 hover:bg-white/10")
                      }`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
