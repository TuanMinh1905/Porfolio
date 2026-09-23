"use client";

import { useLanguageStore } from "@/store/languageStore";
import { content } from "@/data/content";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  const { lang } = useLanguageStore();
  const t = content.about[lang];

  return (
    <SectionWrapper id="about">
      {/* Section header */}
      <div className="text-center mb-16">
        <p className="text-[#6C63FF] font-mono text-sm mb-2">{t.subtitle}</p>
        <h2 className="text-4xl md:text-5xl font-black text-white">{t.title}</h2>
        <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Avatar */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] blur-sm opacity-70 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/avatar.jpg"
                alt="Phạm Tuấn Minh"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#12121a] border border-white/10 rounded-xl px-4 py-2 shadow-xl">
              <p className="text-xs text-white/50 font-mono">Full-Stack</p>
              <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#00D4FF]">
                Developer
              </p>
            </div>
          </div>
        </div>

        {/* Bio + Info */}
        <div className="space-y-6">
          <p className="text-white/80 leading-relaxed">{t.bio}</p>
          <p className="text-white/70 leading-relaxed">{t.bio2}</p>
          <p className="text-white/60 leading-relaxed">{t.bio3}</p>

          {/* Info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
            {t.info.map((item) => (
              <div
                key={item.label}
                className="bg-white/5 border border-white/8 rounded-xl px-4 py-3 hover:border-[#6C63FF]/30 transition-all duration-300"
              >
                <p className="text-[#6C63FF] text-xs font-mono mb-1">{item.label}</p>
                <p className="text-white/80 text-sm font-medium truncate">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
