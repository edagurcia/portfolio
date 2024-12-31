"use client";

import { useEffect, useRef } from "react";
import { Hero } from "@/components/sections/Hero";
import { AboutMe } from "@/components/sections/AboutMe";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { usePorfolio } from "@/apis/portfolio";
import { usePorfolioStore } from "@/stores/portfolioStore";
import { LoadingPage } from "@/components/LoadingPage";

const HomePage = () => {
  const { getPortfolioData } = usePorfolio();
  const isLoading = usePorfolioStore((state) => state.isLoading);

  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      getPortfolioData().then((res) => {
        if (res?.success) {
          isMounted.current = false;
        }
      });
    }
  }, []);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
};

export default HomePage;
