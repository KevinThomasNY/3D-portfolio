import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

export default function HomePage() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") ?? "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.setProperty(
      "--scrollbar-track-background",
      theme === "dark" ? "#1C1C1C" : "#F8F9FA"
    );
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };
  return (
    <>
      <Navbar theme={theme} toggleTheme={handleThemeSwitch} />
      <div className="bg-off-white dark:bg-dark-bg dark:text-white">
        <Hero theme={theme} />
        <Projects theme={theme} />
        <Cards />
        <Technologies />
        <Contact theme={theme} />
        <Footer />
      </div>
    </>
  );
}
