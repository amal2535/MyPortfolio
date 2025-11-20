"use client";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid_pattern";
import { Code2, Sparkles, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../themeProvider";

export default function Projects() {
  const { dark, toggleDark } = useTheme();

  const projects = [
    {
    title: "EchoParrot",
    description:
      "Intelligent customer call automation platform integrating real-time voice streaming (STT + TTS) via Twilio and an AI decision engine (NLP/RAG) to automatically interpret and respond to client requests.",
    tech: ["Nextjs", "FastAPI", "React.js", "Twilio", "OpenAI"],
    category: "web",
    github: "#",
    live: "#",
    featured: true
  },
    {
      title: "VitamiNurse",
      description:
        "Backend of a web platform for promotions and nutritional recommendations, with REST API for user and product management and a Redis-based caching system to optimize response times.",
      tech: ["Express.js", "MongoDB", "Redis"],
      category: "web",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "IntellVision",
      description:
        "Image classification web platform: built and evaluated image classification models, developed a user-friendly interface, and integrated & deployed trained models.",
      tech: ["React.js", "Flask"],
      category: "web",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "MatchMate",
      description:
        "Modern dating web application: user registration and authentication, profile matching, and instant messaging for connections.",
      tech: ["React.js", "Tailwind CSS", "Material UI", "Express.js", "Node.js", "MongoDB", "JavaScript"],
      category: "web",
      github: "#",
      live: "#",
      featured: false
    }
  ];

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
                <li><a href="/" className="hover:underline underline-offset-8 decoration-teal-500">Home</a></li>
                <li><a href="/about" className="hover:underline underline-offset-8 decoration-teal-500">About</a></li>
                <li><a href="/projects" className="hover:underline underline-offset-8 decoration-teal-500 text-teal-600 dark:text-teal-400">Projects</a></li>
                <li><a href="/contact" className="hover:underline underline-offset-8 decoration-teal-500">Contact</a></li>
                <li>
                  <button onClick={toggleDark} className="items-center justify-center w-10 h-10">
                    {dark ? <Sun /> : <Moon />}
                  </button>
                </li>
              </ul>
            </nav>
          </header>

          <main className="p-4 dark:text-white pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">My Work</span>
              </div>
              <h1 className="text-6xl font-bold text-teal-700 dark:text-white mb-6">
                Featured Projects
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A collection of my recent work spanning web development and innovative tech solutions
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={cn(
                    "group relative rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105",
                    "bg-white/80 dark:bg-gray-800/80 shadow-xl hover:shadow-2xl",
                    project.featured && "md:col-span-2 lg:col-span-1"
                  )}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-teal-100 dark:bg-teal-900/30">
                      <Code2 className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
