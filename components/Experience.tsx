"use client";

import { useLanguageStore } from "@/store/languageStore";
import { content } from "@/data/content";
import SectionWrapper from "./SectionWrapper";

export default function Experience() {
  const { lang } = useLanguageStore();
  const t = content.experience[lang];

  return (
    <SectionWrapper id="experience" className="bg-[#0d0d14]">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-[#6C63FF] font-mono text-sm mb-2">{t.subtitle}</p>
        <h2 className="text-4xl md:text-5xl font-black text-white">{t.title}</h2>
        <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] rounded-full mx-auto" />
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {t.items.map((item, idx) => (
          <div key={idx} className="relative flex gap-6">
            {/* Timeline line */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#00D4FF] shadow-lg shadow-[#6C63FF]/40 flex-shrink-0 mt-1.5" />
              {idx < t.items.length - 1 && (
                <div className="w-0.5 flex-1 bg-gradient-to-b from-[#6C63FF]/40 to-transparent mt-2" />
              )}
            </div>

            {/* Card */}
            <div className="flex-1 bg-white/5 border border-white/8 rounded-2xl p-6 md:p-8 hover:border-[#6C63FF]/30 transition-all duration-300 mb-4">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-white font-bold text-lg md:text-xl">{item.role}</h3>
                  <p className="text-[#6C63FF] font-medium mt-1">{item.company}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="font-mono text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {item.period}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#6C63FF]/15 text-[#a99dff] border border-[#6C63FF]/25">
                    {item.type}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {item.description.map((desc, i) => (
                  <li key={i} className="flex gap-3 items-start text-white/65 text-sm leading-relaxed">
                  <span className="text-[#6C63FF] mt-1 flex-shrink-0">–</span>
                    {desc}
                  </li>
                ))}
              </ul>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs text-white/50 bg-white/5 border border-white/10 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
