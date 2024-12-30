import { useEffect, useState } from "react";
import Image from "next/image";
import { usePorfolioStore } from "@/stores/portfolioStore";
import { Github, Linkedin, X } from "@/assets";
import Ed from "@/assets/img/Ed.jpeg";

export const Hero = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [slogan, setSlogan] = useState("");

  const isEnglish = usePorfolioStore((state) => state.isEnglish);
  const heroeES = usePorfolioStore((state) => state.heroeES);
  const heroeEN = usePorfolioStore((state) => state.heroeEN);

  useEffect(() => {
    if (isEnglish && heroeEN) {
      setTitle(heroeEN.title);
      setSubtitle(heroeEN.subtitle);
      setSlogan(heroeEN.slogan);
    } else if (!isEnglish && heroeES) {
      setTitle(heroeES.title);
      setSubtitle(heroeES.subtitle);
      setSlogan(heroeES.slogan);
    }
  }, [isEnglish, heroeEN, heroeES]);

  const englishResume =
    "https://cloud.appwrite.io/v1/storage/buckets/67700050000fdec228b6/files/67700217000047f4650f/view?project=676887500029d4194700&project=676887500029d4194700&mode=admin";
  const spanishResume =
    "https://cloud.appwrite.io/v1/storage/buckets/67700050000fdec228b6/files/677001ec0008a6686c73/view?project=676887500029d4194700&project=676887500029d4194700&mode=admin";

  return (
    <section className="mt-20 md:mt-0">
      <div className="grid md:grid-cols-12 md:h-screen items-stretch">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <div className="flex flex-col items-center justify-center gap-5 mt-5">
              <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold text-neutral-500 dark:text-neutral-100">
                {title}
              </h1>
              <p className="text-neutral-400 dark:text-neutral-300 text-lg md:text-xl lg:text-2xl tracking-tight -mt-5">
                {subtitle}
              </p>

              <h4 className="text-3xl md:text-4xl lg:text-6xl text-center text-neutral-600 dark:text-neutral-300 tracking-tight">
                {slogan}
              </h4>

              <div className="mt-5 flex items-center justify-center gap-5">
                <a
                  href="https://github.com/edagurcia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github
                    width={35}
                    height={35}
                    className="text-neutral-500 dark:text-neutral-300"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/edmundo-dominguez-agurcia-41bb59292/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin
                    width={35}
                    height={35}
                    className="text-neutral-500 dark:text-neutral-300"
                  />
                </a>
                <a
                  href="https://x.com/edagurcia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <X
                    width={30}
                    height={30}
                    className="text-neutral-500 dark:text-neutral-300"
                  />
                </a>
              </div>
              <div className="flex items-center justify-center gap-5 mt-5">
                <a
                  href={isEnglish ? englishResume : spanishResume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-neutral-500 dark:bg-neutral-800 text-white rounded-md text-lg"
                >
                  {isEnglish ? "Resume" : "Currículum"}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="mt-20 md:mt-0 md:h-full">
            <Image
              src={Ed}
              alt="Edmundo's photo"
              className="size-full object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
