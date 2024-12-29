"use client";

import { usePorfolioStore } from "@/stores/portfolioStore";

export const Footer = () => {
  const isEnglish = usePorfolioStore((state) => state.isEnglish);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-20 bg-neutral-900 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <p className="text-center text-base text-neutral-300">
          &copy; {currentYear}{" "}
          {isEnglish
            ? "All rights reserved."
            : "Todos los derechos reservados."}
        </p>
      </div>
    </footer>
  );
};
