"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid_pattern";
import { Code, Palette, Rocket, Award, BookOpen, Briefcase, Sun, Moon, Download } from "lucide-react";
import { motion } from "framer-motion";

const getInitialTheme = () => {
  if (typeof window === "undefined") return false;
  const saved = sessionStorage.getItem("theme");
  if (saved === "dark") return true;
  if (saved === "light") return false;
  return document.documentElement.classList.contains("dark");
};

export default function About() {
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
      sessionStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      sessionStorage.setItem("theme", "light");
    }
  };

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Python", "Django", "PostgreSQL", "MongoDB"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"] },
    { category: "Tools", items: ["Git", "Figma", "VS Code", "Postman", "Jira"] }
  ];

  const experience = [
    {
      role: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers"
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Built responsive web applications and RESTful APIs for enterprise clients"
    },
    {
      role: "Software Developer",
      company: "StartUp Hub",
      period: "2018 - 2020",
      description: "Developed innovative features for SaaS products and mobile applications"
    }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      school: "University of Technology",
      period: "2016 - 2018",
      description: "Specialized in Artificial Intelligence and Machine Learning"
    },
    {
      degree: "Bachelor of Software Engineering",
      school: "Institute of Engineering",
      period: "2012 - 2016",
      description: "Focus on software development and system architecture"
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
                <li><a href="/home" className="hover:underline underline-offset-8 decoration-teal-500">Home</a></li>
                <li><a href="/about" className="hover:underline underline-offset-8 decoration-teal-500 text-teal-600 dark:text-teal-400">About</a></li>
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

          <main className="p-4 dark:text-white pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h1 className="text-6xl font-bold text-teal-700 dark:text-white mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
                I am a passionate software engineer with 6+ years of experience building modern web applications. 
                I love creating elegant solutions to complex problems and turning ideas into reality through code. 
                My journey in tech has been driven by curiosity and a constant desire to learn and grow.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-4 bg-teal-600 text-white rounded-full font-semibold flex items-center gap-2 hover:bg-teal-700 transition-colors shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                  <Code className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Clean Code</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Writing maintainable, scalable, and efficient code following best practices
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                  <Palette className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">UI/UX Focus</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Crafting beautiful, intuitive interfaces that users love to interact with
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Constantly exploring new technologies and pushing boundaries
                </p>
              </motion.div>
            </div>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Skills & Expertise</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skillGroup, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg"
                  >
                    <h3 className="text-xl font-bold mb-4 text-teal-600 dark:text-teal-400">
                      {skillGroup.category}
                    </h3>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-teal-500" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Experience</h2>
              </div>
              <div className="space-y-6">
                {experience.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                    className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border-l-4 border-teal-500"
                  >
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
                    <p className="text-teal-600 dark:text-teal-400 font-semibold">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
                    <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Education</h2>
              </div>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + idx * 0.1 }}
                    className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border-l-4 border-teal-500"
                  >
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
                    <p className="text-teal-600 dark:text-teal-400 font-semibold">{edu.school}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.period}</p>
                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </main>
        </div>
      </div>
    </div>
  );
}