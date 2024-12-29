"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Developer } from "@/assets";

export const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 backdrop-blur-md">
      <div className="container !max-w-full">
        <div className="h-20 flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-100 duration-300"
            >
              <Developer width={200} height={200} className="" />
            </Link>
          </div>

          <div className="flex gap-1 items-center">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
