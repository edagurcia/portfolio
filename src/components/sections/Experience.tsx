import { useEffect, useState } from "react";
import { usePorfolioStore } from "@/stores/portfolioStore";
import { Skills } from "@/components/Skills";

export const Experience = () => {
  const isEnglish = usePorfolioStore((state) => state.isEnglish);

  return (
    <section className="section">
      <div className="container !max-w-full">
        <h2 className="section-title">
          {isEnglish ? "My Experience" : "Mi Experiencia"}
        </h2>
      </div>
      <Skills />
    </section>
  );
};
