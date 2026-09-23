"use client";

import { useLanguageStore } from "@/store/languageStore";
import { content } from "@/data/content";
import SectionWrapper from "./SectionWrapper";

export default function Education() {
  const { lang } = useLanguageStore();
  const t = content.education[lang];

  return (
    <SectionWrapper id="education">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-[#6C63FF] font-mono text-sm mb-2">{t.subtitle}</p>
        <h2 className="text-4xl md:text-5xl font-black text-white">{t.title}</h2>
        <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] rounded-full mx-auto" />
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {t.items.map((item, idx) => (
          <div
            key={idx}
            className="relative group bg-gradient-to-br from-[#6C63FF]/10 to-[#00D4FF]/10 border border-[#6C63FF]/20 rounded-3xl p-8 md:p-10 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-[#6C63FF]/10"
          >
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6C63FF]/10 to-transparent rounded-3xl" />

            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#6C63FF] font-mono text-sm font-bold">{item.shortName}</span>
                </div>
                <h3 className="text-white font-bold text-lg md:text-xl leading-snug">{item.school}</h3>
                <p className="text-white/60 mt-1">{item.major}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="font-mono text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  {item.period}
                </span>
                <span className="text-xs text-[#00D4FF]/80 bg-[#00D4FF]/10 border border-[#00D4FF]/20 px-3 py-1 rounded-full">
                  {item.degree}
                </span>
              </div>
            </div>

            {/* GPA */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/8">
              <span className="text-white/40 text-sm">GPA</span>
              <div className="flex-1 bg-white/5 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] transition-all duration-1000"
                  style={{ width: "74.6%" }}
                />
              </div>
              <span className="text-white font-bold font-mono">{item.gpa}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
