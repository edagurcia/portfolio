import { usePorfolioStore } from "@/stores/portfolioStore";
import { Github, Linkedin, X } from "@/assets";

export const Contact = () => {
  const isEnglish = usePorfolioStore((state) => state.isEnglish);

  return (
    <section className="section">
      <div className="container !max-w-full">
        <h2 className="section-title">
          {isEnglish ? "Contact me" : "Contactame"}
        </h2>

        <div className="flex flex-col items-center justify-center mt-5 mb-2">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-5 md:w-8 h-5 md:h-8 rounded-full bg-emerald-500" />
            <p className="text-neutral-600 dark:text-neutral-300 uppercase text-base md:text-xl lg:text-3xl">
              {isEnglish ? "Available to work" : "Disponible para trabajar"}
            </p>
          </div>
          <a href="mailto:edagurcia@gmail.com">
            <span className="text-xl font-semibold tracking-tight text-neutral-500 hover:text-neutral-600 dark:text-neutral-300 dark:hover:text-neutral-100 duration-300">
              edagurcia@gmail.com
            </span>
          </a>
        </div>

        <div className="mt-2 flex items-center justify-center gap-5">
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
      </div>
    </section>
  );
};
