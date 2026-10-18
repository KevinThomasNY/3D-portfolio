import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";

const Homelab = lazy(() => import("./canvas/Homelab"));

export default function Error() {
  const navigate = useNavigate();
  const theme = localStorage.getItem("theme") || "dark";
  const pointer = useRef({ x: 0, y: 0 });
  const [modelReady, setModelReady] = useState(false);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const handleModelReady = useCallback(() => setModelReady(true), []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handlePointerMove = (event) => {
    if (reducedMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointer.current.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    pointer.current.y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
  };

  const resetPointer = () => {
    pointer.current.x = 0;
    pointer.current.y = 0;
  };

  return (
    <main className="error-page min-h-screen overflow-hidden bg-off-white text-gray-900 dark:bg-dark-bg dark:text-white">
      <div className="mx-auto grid min-h-screen w-full max-w-[1440px] items-center gap-2 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(20rem,0.72fr)_minmax(34rem,1.28fr)] lg:gap-4 lg:px-12 xl:px-16">
        <section className="relative z-10 pt-4 text-center lg:pt-0 lg:text-left">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.32em] text-dark-green dark:text-accent-green">
            Page not found
          </p>
          <h1 className="text-5xl font-bold tracking-normal text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
            Error 404
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl lg:mx-0">
            Oops! The page you're looking for doesn't exist.
          </p>
          <button
            className="focus:shadow-outline mt-8 rounded-md bg-accent-green px-6 py-3 font-bold text-white shadow-[0_12px_36px_rgba(63,207,142,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-dark-green focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-4 focus:ring-offset-off-white dark:focus:ring-offset-dark-bg"
            onClick={() => navigate("/")}
          >
            Go to Home Page
          </button>
        </section>

        <section
          className="homelab-stage relative min-h-[27rem] w-full sm:min-h-[34rem] lg:min-h-[46rem]"
          aria-label="Kevin's homelab"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
        >
          <div className="pointer-events-none absolute inset-x-[8%] bottom-[7%] h-[22%] rounded-[50%] bg-accent-green/10 blur-3xl dark:bg-accent-green/[0.06]" />
          <img
            src="/images/homelab-placeholder.png"
            alt=""
            aria-hidden="true"
            className={`homelab-placeholder absolute inset-0 h-full w-full object-contain ${
              modelReady ? "homelab-placeholder--hidden" : ""
            }`}
          />
          <div
            className={`homelab-canvas absolute inset-0 ${
              modelReady ? "homelab-canvas--ready" : ""
            }`}
          >
            <Suspense fallback={null}>
              <Homelab
                pointer={pointer}
                reducedMotion={reducedMotion}
                onReady={handleModelReady}
              />
            </Suspense>
          </div>
          <p className="sr-only" role="status" aria-live="polite">
            {modelReady
              ? "Interactive homelab loaded"
              : "Loading interactive homelab"}
          </p>
        </section>
      </div>
    </main>
  );
}
