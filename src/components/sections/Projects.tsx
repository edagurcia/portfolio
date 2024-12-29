import { useEffect, useState } from "react";
import { usePorfolioStore } from "@/stores/portfolioStore";

export const Projects = () => {
  const isEnglish = usePorfolioStore((state) => state.isEnglish);

  return (
    <section className="section">
      <div className="container !max-w-full">
        <h2 className="section-title">
          {isEnglish
            ? "My most notable projects"
            : "Mis proyectos más destacados"}
        </h2>
      </div>
    </section>
  );
};
