"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  dark: boolean;
  toggleDark: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize theme directly in useState (ESLint-safe)
  const [dark, setDark] = useState<boolean>(() => {
    // SSR guard
    if (typeof window === "undefined") return false;

    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Sync DOM class on initial load + when dark changes
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
};
