"use client";

import { useLanguageStore } from "@/store/languageStore";
import { content } from "@/data/content";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  const { lang } = useLanguageStore();
  const t = content.contact[lang];

  return (
    <SectionWrapper id="contact" className="bg-[#0d0d14]">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-[#6C63FF] font-mono text-sm mb-2">{t.subtitle}</p>
        <h2 className="text-4xl md:text-5xl font-black text-white">{t.title}</h2>
        <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] rounded-full mx-auto" />
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <p className="text-white/60 text-lg leading-relaxed mb-12">{t.description}</p>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 bg-white/5 border border-white/8 rounded-2xl p-5 hover:border-[#6C63FF]/40 hover:bg-[#6C63FF]/5 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#00D4FF] flex-shrink-0 mt-1" />
              <div className="text-left">
                <p className="text-white/40 text-xs font-mono mb-0.5">{link.label}</p>
                <p className="text-white font-medium text-sm truncate max-w-[220px]">{link.value}</p>
              </div>

            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-20 pt-8 border-t border-white/5">
        <p className="text-white/20 text-sm font-mono">
          © 2026 Phạm Tuấn Minh · Built with Next.js + Tailwind CSS
        </p>
      </div>
    </SectionWrapper>
  );
}
