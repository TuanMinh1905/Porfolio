import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Lang } from "@/data/content";

interface LanguageState {
  lang: Lang;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      lang: "en",
      toggleLang: () =>
        set((state) => ({ lang: state.lang === "en" ? "vi" : "en" })),
      setLang: (lang) => set({ lang }),
    }),
    {
      name: "portfolio-lang",
    }
  )
);
