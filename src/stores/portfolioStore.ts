import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Heroe } from "@/types";

type PortfolioState = {
  isLoading: boolean;
  isEnglish: boolean;
  heroeES: Heroe | null;
  heroeEN: Heroe | null;
  aboutEN: string;
  aboutES: string;
  startIsLoading: () => void;
  finishIslLoading: () => void;
  setEnglish: () => void;
  setSpanish: () => void;
  setPortfolioData: (
    heroeES: Heroe,
    heroeEN: Heroe,
    aboutEN: string,
    aboutES: string
  ) => void;
};

export const usePorfolioStore = create<PortfolioState>()(
  persist(
    (set) => ({
      isLoading: true,
      isEnglish: false,
      heroeES: null,
      heroeEN: null,
      aboutEN: "",
      aboutES: "",
      startIsLoading: () => set({ isLoading: true }),
      finishIslLoading: () => set({ isLoading: false }),
      setEnglish: () => set({ isEnglish: true }),
      setSpanish: () => set({ isEnglish: false }),
      setPortfolioData: (heroeES, heroeEN, aboutEN, aboutES) =>
        set({ heroeES, heroeEN, aboutEN, aboutES }),
    }),
    {
      name: "eda-portfolio",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
