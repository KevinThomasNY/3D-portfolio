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
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    // Get the current theme value from the local storage
    const currentTheme = localStorage.getItem("theme");

    // Set the data-theme attribute of the html element based on the current theme value
    document.documentElement.setAttribute("data-theme", currentTheme);

    // Update the --scrollbar-track-background variable value based on the current theme value
    if (currentTheme === "dark") {
      document.documentElement.style.setProperty(
        "--scrollbar-track-background",
        "#1C1C1C"
      );
    } else {
      document.documentElement.style.setProperty(
        "--scrollbar-track-background",
        "#ffffff"
      );
    }

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <Navbar theme={theme} toggleTheme={handleThemeSwitch} />
      <div className="bg-white dark:bg-dark-bg dark:text-white">
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
