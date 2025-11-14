"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid_pattern";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Facebook, Instagram, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import amal from "@/public/images/amal.jpg";


const getInitialTheme = () => {
  if (typeof window === "undefined") return false; // SSR safe
  const saved = localStorage.getItem("theme");
  if (saved === "dark") return true;
  if (saved === "light") return false;
  return document.documentElement.classList.contains("dark");
};

export default function Home() {
  // Lazy initialization
  const [dark, setDark] = useState<boolean>(() => {
    const isDark = getInitialTheme();
    if (typeof window !== "undefined") {
      if (isDark) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }
    return isDark;
  });

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const date = new Date();

  return (
      <div className="maskGradient">
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden max-w-7xl mx-auto">
          <GridPattern
            squares={[
              [80, 80], [100, 20], [120, 40], [90, 60], [70, 100],
              [120, 120], [140, 180], [160, 120], [100, 160]
            ]}
            className={cn(
              "fixed inset-0 h-full w-full -z-10",
              dark
                ? "bg-gradient-to-br from-gray-900 via-teal-950 to-black"
                : "bg-gradient-to-t from-white via-teal-50 to-white"
            )}
          />
  
          <div className="relative flex flex-col w-full">
            <header className="p-4">
              <nav className="flex w-full flex-row text-xl font-sans font-semibold my-16 justify-between items-center">
               
                <ul className="flex flex-wrap gap-y-2 gap-x-8 text-gray-800 dark:text-gray-400">
                  <li><a href="/home" className="hover:underline underline-offset-8 decoration-teal-500 text-teal-600 dark:text-teal-400">Home</a></li>
                  <li><a href="/about" className="hover:underline underline-offset-8 decoration-teal-500 ">About</a></li>
                  <li><a href="/projects" className="hover:underline underline-offset-8 decoration-teal-500">Projects</a></li>
                  <li><a href="/contact" className="hover:underline underline-offset-8 decoration-teal-500">Contact</a></li>
                  <li>
                    <button onClick={toggleDark} className="items-center justify-center w-10 h-10">
                      {dark ? <Sun /> : <Moon />}
                    </button>
                  </li>
                </ul>
              </nav>
            </header>
  
          <main className="p-4 dark:text-white w-full flex justify-between text-teal-700">
            <div className="w-full">
              <div className="text-7xl leading-relaxed font-semibold mt-16">
                <TypeAnimation
                  sequence={[
                    "Hello World !",
                    2000,
                    " I am Amal Maatoug",
                    2000,
                    "A Software Engineer",
                    3000,
                  ]}
                  wrapper="p"
                  repeat={3}
                />
              </div>
              <p className="dark:text-gray-300 text-black max-w-2xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              >
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 mt-9">
                  <li>
                    <Github />
                  </li>
                  <li>
                    <Linkedin />
                  </li>
                  <li>
                    <Facebook />
                  </li>
                  <li>
                    <Instagram />
                  </li>
                </ul>
              </motion.div>

              <div className="flex flex-row">
                <iframe src="https://lottie.host/embed/58f7e411-6e4c-4e9d-9e03-ce9da449216a/hf08QFS7JR.json"></iframe>
                <a
                  href="/about"
                  className="mt-24 dark:text-gray-400 text-teal-900 font-sans text-lg underline underline-offset-4"
                >
                  See more about me
                </a>
              </div>
            </div>

            <div className="p-2 w-108 h-84 mt-16 rounded-full bg-gradient-to-r from-teal-300 via-teal-500 to-teal-600 dark:from-teal-500 dark:via-teal-400 dark:to-teal-700">
              <Image
                className="rounded-full w-full h-full object-cover"
                alt=""
                src={amal}
              />
            </div>
          </main>

          <footer className="dark:text-gray-300 text-black bottom-0 fixed flex w-full py-6">
            <span className="font-normal mx-9">
              &copy; {date.getFullYear()} Amal Maatoug
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}
