import { usePorfolioStore } from "@/stores/portfolioStore";
import { useEffect, useState } from "react";

export const AboutMe = () => {
  const [aboutme, setAboutme] = useState("");

  const isEnglish = usePorfolioStore((state) => state.isEnglish);
  const aboutEN = usePorfolioStore((state) => state.aboutEN);
  const aboutES = usePorfolioStore((state) => state.aboutES);

  useEffect(() => {
    if (isEnglish) {
      setAboutme(aboutEN);
    } else {
      setAboutme(aboutES);
    }
  }, [isEnglish]);

  return (
    <section className="section">
      <div className="flex flex-col items-center justify-center tracking-tight">
        <div className="container !max-w-full lg:w-[1100px]">
          <h2 className="section-title">
            {isEnglish ? "About Me" : "Acerca de mi"}
          </h2>
          <p className="mt-5 text-lg md:text-2xl lg:text-3xl text-neutral-500 dark:text-neutral-300">
            {aboutme}
          </p>
        </div>
      </div>
    </section>
  );
};
