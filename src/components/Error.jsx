import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Error() {
  const navigate = useNavigate();
  const theme = localStorage.getItem("theme") || "dark";

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-off-white p-2 dark:bg-dark-bg">
      <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white md:text-6xl">
        Error 404
      </h1>
      <p className="center mb-8 text-center text-xl text-gray-700 dark:text-gray-300 md:text-2xl">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        className="focus:shadow-outline mb-4 rounded bg-accent-green px-4 py-2 font-bold text-white hover:bg-dark-green focus:outline-none"
        onClick={() => navigate("/")}
      >
        Go to Home Page
      </button>
    </div>
  );
}
