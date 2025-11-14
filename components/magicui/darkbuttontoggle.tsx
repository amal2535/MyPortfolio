import { useState } from "react";
import { Sun, Moon } from "lucide-react";

// Lazy initialization reads from localStorage or html class BEFORE first render
const getInitialTheme = () => {
  if (typeof window === "undefined") return false;
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
  } catch {}
  return document.documentElement.classList.contains("dark");
};

export default function DarkToggleButton() {
  const [dark, setDark] = useState<boolean>(getInitialTheme);

  const darkModeHandler = () => {
    const next = !dark;
    if (next) {
      document.documentElement.classList.add("dark");
      try { localStorage.setItem("theme", "dark"); } catch {}
    } else {
      document.documentElement.classList.remove("dark");
      try { localStorage.setItem("theme", "light"); } catch {}
    }
    setDark(next);
  };

  return (
    <button
      onClick={darkModeHandler}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-colors duration-300
                 bg-white text-black dark:bg-gray-800 dark:text-white hover:scale-105"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
