"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguageStore } from "@/store/languageStore";
import { content } from "@/data/content";

export default function Hero() {
  const { lang } = useLanguageStore();
  const t = content.hero[lang];
  const [displayedRole, setDisplayedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = t.roles;
    const currentRole = roles[roleIndex % roles.length];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedRole(currentRole.substring(0, charIndex + 1));
        setCharIndex((p) => p + 1);
        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedRole(currentRole.substring(0, charIndex - 1));
        setCharIndex((p) => p - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((p) => (p + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, t.roles]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#6C63FF]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00D4FF]/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(108,99,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-4xl w-full text-center">
        {/* Greeting */}
        <p className="text-[#6C63FF] font-mono text-sm md:text-base mb-4 animate-fade-in-up">
          {t.greeting}
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in-up animation-delay-200">
          {t.name}
        </h1>

        {/* Typing role */}
        <div className="h-12 flex items-center justify-center mb-6 animate-fade-in-up animation-delay-400">
          <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#00D4FF]">
            {displayedRole}
          </span>
          <span className="text-[#6C63FF] text-3xl ml-1 animate-blink">|</span>
        </div>

        {/* Description */}
        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-600">
          {t.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up animation-delay-800">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] text-white font-semibold text-sm hover:scale-105 hover:shadow-lg hover:shadow-[#6C63FF]/30 transition-all duration-300"
          >
            {t.cta_projects}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-[#6C63FF]/60 hover:bg-[#6C63FF]/10 transition-all duration-300"
          >
            {t.cta_contact}
          </a>
          <a
            href="/cv.pdf"
            download
            className="px-8 py-3 rounded-full border border-[#00D4FF]/30 text-[#00D4FF] font-semibold text-sm hover:bg-[#00D4FF]/10 hover:scale-105 transition-all duration-300"
          >
            {t.cta_cv}
          </a>
        </div>


      </div>
    </section>
  );
}
