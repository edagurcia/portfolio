"use client";

import { usePorfolioStore } from "@/stores/portfolioStore";

export const LanguageToggle = () => {
  const isEnglish = usePorfolioStore((state) => state.isEnglish);
  const setEnglish = usePorfolioStore((state) => state.setEnglish);
  const setSpanish = usePorfolioStore((state) => state.setSpanish);

  return (
    <>
      {isEnglish ? (
        <button type="button" className="btn" onClick={setSpanish}>
          <span>EN</span>
        </button>
      ) : (
        <button type="button" className="btn" onClick={setEnglish}>
          <span className="text-base md:text-2xl">ES</span>
        </button>
      )}
    </>
  );
};
