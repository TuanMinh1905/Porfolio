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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {t.groups.map((group) => (
          <div
            key={group.name}
            className={`relative bg-gradient-to-br ${groupColors[group.icon] ?? "from-white/5 to-white/5 border-white/10"} border rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm`}
          >
            <div className="mb-4">
              <h3 className="text-white font-bold text-base">{group.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full text-xs font-medium border cursor-default transition-all duration-200 ${badgeColors[group.icon] ?? "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
