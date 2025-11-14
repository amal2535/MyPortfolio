"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid_pattern";
import { Github, ExternalLink, Code2, Sparkles, Sun, Moon, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const getInitialTheme = () => {
  if (typeof window === "undefined") return false;
  const saved = sessionStorage.getItem("theme");
  if (saved === "dark") return true;
  if (saved === "light") return false;
  return document.documentElement.classList.contains("dark");
};

export default function Projects() {
  const [dark, setDark] = useState<boolean>(() => {
    const isDark = getInitialTheme();
    if (typeof window !== "undefined") {
      if (isDark) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }
    return isDark;
  });

  const [activeFilter, setActiveFilter] = useState("all");

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      sessionStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      sessionStorage.setItem("theme", "light");
    }
  };

  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization platform with machine learning predictions and automated insights generation.",
      tech: ["React", "Python", "TensorFlow", "D3.js"],
      category: "web",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "E-Commerce Mobile App",
      description: "Full-stack mobile shopping experience with AR try-on features and personalized recommendations.",
      tech: ["React Native", "Node.js", "MongoDB", "ARKit"],
      category: "mobile",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Cloud Infrastructure Manager",
      description: "DevOps tool for automated deployment, monitoring, and scaling of containerized applications.",
      tech: ["Docker", "Kubernetes", "AWS", "Go"],
      category: "devops",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Social Network Platform",
      description: "Modern social platform with real-time messaging, stories, and content recommendation engine.",
      tech: ["Next.js", "GraphQL", "PostgreSQL", "Redis"],
      category: "web",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Smart Home IoT System",
      description: "Integrated home automation system with voice control and energy optimization algorithms.",
      tech: ["Raspberry Pi", "Python", "MQTT", "TensorFlow Lite"],
      category: "iot",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Healthcare Management System",
      description: "HIPAA-compliant patient management platform with telemedicine and appointment scheduling.",
      tech: ["Vue.js", "Django", "PostgreSQL", "WebRTC"],
      category: "web",
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
 
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

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
                <li><a href="/home"  className="hover:underline underline-offset-8 decoration-teal-500">Home</a></li>
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
                A collection of my recent work spanning web development, mobile apps, and innovative tech solutions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {filters.map((filter, idx) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    "px-6 py-3 rounded-full font-semibold transition-all duration-300",
                    activeFilter === filter.id
                      ? "bg-teal-600 text-white shadow-lg scale-105"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-gray-700"
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
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
                  {project.featured && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      Featured
                    </div>
                  )}
                  
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

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span className="font-semibold">Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-semibold">Live Demo</span>
                    </a>
                    <ArrowRight className="ml-auto w-5 h-5 text-teal-600 dark:text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
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