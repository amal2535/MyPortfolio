import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./themeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amal Maatoug – Ingénieure Logiciel | Portfolio",
  description:
    "Portfolio d'Amal Maatoug, ingénieure en informatique spécialisée en développement Python, Fullstack et IA.",
  keywords: [
    "Amal Maatoug",
    "Portfolio Amal",
    "Python developer Tunisia",
    "Développeuse Fullstack",
  ],
  openGraph: {
    title: "Portfolio – Amal Maatoug",
    description: "Ingénieure Logiciel • Python • Fullstack • IA",
    url: "https://amal-maatoug.vercel.app",
    siteName: "Amal Portfolio",
    type: "website",
  }
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
