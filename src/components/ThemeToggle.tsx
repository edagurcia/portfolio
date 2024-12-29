"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <>
      {isDark ? (
        <button type="button" className="btn" onClick={() => setTheme("light")}>
          <Moon className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      ) : (
        <button type="button" className="btn" onClick={() => setTheme("dark")}>
          <Sun className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      )}
    </>
  );
};
