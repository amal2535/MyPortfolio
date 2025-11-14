"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid_pattern";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Facebook, Instagram, Sun, Moon, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const getInitialTheme = () => {
  if (typeof window === "undefined") return false;
  const saved = sessionStorage.getItem("theme");
  if (saved === "dark") return true;
  if (saved === "light") return false;
  return document.documentElement.classList.contains("dark");
};

export default function Contact() {
  const [dark, setDark] = useState<boolean>(() => {
    const isDark = getInitialTheme();
    if (typeof window !== "undefined") {
      if (isDark) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }
    return isDark;
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "amal.maatoug@example.com",
      link: "mailto:amal.maatoug@example.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+216 XX XXX XXX",
      link: "tel:+216XXXXXXXX"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Sfax, Tunisia",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, name: "GitHub", link: "#" },
    { icon: <Linkedin className="w-6 h-6" />, name: "LinkedIn", link: "#" },
    { icon: <Facebook className="w-6 h-6" />, name: "Facebook", link: "#" },
    { icon: <Instagram className="w-6 h-6" />, name: "Instagram", link: "#" }
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
                <li><a href="/about" className="hover:underline underline-offset-8 decoration-teal-500">About</a></li>
                <li><a href="/projects" className="hover:underline underline-offset-8 decoration-teal-500">Projects</a></li>
                <li><a href="/contact" className="hover:underline underline-offset-8 decoration-teal-500 text-teal-600 dark:text-teal-400">Contact</a></li>
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
              <h1 className="text-6xl font-bold text-teal-700 dark:text-white mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Have a project in mind or just want to chat? I would love to hear from you. 
                Drop me a message and I will get back to you as soon as possible!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
                  Let us Connect
                </h2>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, idx) => (
                    <motion.a
                      key={idx}
                      href={info.link}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                      <div className="p-3 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white">{info.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Follow Me</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, idx) => (
                      <motion.a
                        key={idx}
                        href={social.link}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + idx * 0.1 }}
                        className="p-4 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-110 text-teal-600 dark:text-teal-400"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-8 p-6 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-xl"
                >
                  <h3 className="text-xl font-bold mb-2">Available for Opportunities</h3>
                  <p className="text-teal-50">
                    I am currently open to new projects and collaborations. 
                    Let us create something amazing together!
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-2xl">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                    Send a Message
                  </h2>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 flex items-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>Message sent successfully! I will get back to you soon.</span>
                    </motion.div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 outline-none transition-colors text-gray-800 dark:text-white"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 outline-none transition-colors text-gray-800 dark:text-white"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 outline-none transition-colors text-gray-800 dark:text-white"
                        placeholder="Project Inquiry"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 outline-none transition-colors text-gray-800 dark:text-white resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <motion.button
                      onClick={handleSubmit}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-teal-700 transition-colors shadow-lg"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}