"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};
