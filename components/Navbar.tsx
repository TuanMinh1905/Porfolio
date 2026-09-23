"use client";

import { useLanguageStore } from "@/store/languageStore";
import { content } from "@/data/content";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = (lang: "en" | "vi") => [
  { href: "#about", label: content.nav[lang].about },
  { href: "#skills", label: content.nav[lang].skills },
  { href: "#projects", label: content.nav[lang].projects },
  { href: "#experience", label: content.nav[lang].experience },
  { href: "#education", label: content.nav[lang].education },
  { href: "#contact", label: content.nav[lang].contact },
];

export default function Navbar() {
  const { lang, toggleLang } = useLanguageStore();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["about", "skills", "projects", "experience", "education", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#00D4FF]"
        >
          PTM<span className="text-white/40">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks(lang).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === link.href.replace("#", "")
                  ? "text-[#6C63FF]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-1 gap-1 hover:border-[#6C63FF]/50 transition-all duration-300"
          >
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                lang === "en"
                  ? "bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] text-white shadow-lg"
                  : "text-white/40"
              }`}
            >
              EN
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                lang === "vi"
                  ? "bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] text-white shadow-lg"
                  : "text-white/40"
              }`}
            >
              VI
            </span>
          </button>

          {/* Mobile menu */}
          <button
            className="md:hidden text-white/60 hover:text-white transition-colors text-xl leading-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#12121a]/95 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks(lang).map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-white transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
