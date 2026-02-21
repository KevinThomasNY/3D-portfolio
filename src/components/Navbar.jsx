import "flowbite";
export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="sticky top-0  z-50 border-gray-200 bg-white dark:bg-dark-bg">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/">
          <span className="  self-center whitespace-nowrap text-xl font-semibold  hover:text-accent-green   dark:text-white dark:hover:text-accent-green md:text-2xl">
            Kevin Thomas
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="transform transition duration-1000 hover:rotate-180"
          >
            {theme === "dark" ? (
              <img
                className="w-5 md:w-6"
                src="./images/light_mode.png"
                alt="light_mode"
              />
            ) : (
              <img
                className="w-5 md:w-6"
                src="./images/dark_mode.png"
                alt="light_mode"
              />
            )}
          </button>
          <a
            href="https://github.com/KevinThomasNY"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 transition duration-200 ease-in-out hover:scale-110"
          >
            <img
              className="w-8 md:w-12"
              src={`./images/${theme}_nav_github.png`}
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-thomas-ny/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 transition duration-200 ease-in-out hover:scale-110"
          >
            <img
              className="w-8 md:w-12"
              src={`./images/${theme}_nav_linkedIn.png`}
              alt="LinkedIn"
            />
          </a>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-cta"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-dark-bg">
            <li>
              <a
                href="#projects"
                className="block rounded py-2 pl-3 pr-4 hover:text-accent-green dark:text-white dark:hover:text-accent-green md:bg-transparent  md:p-0"
                aria-current="page"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#tech"
                className="block rounded py-2 pl-3 pr-4 hover:text-accent-green dark:text-white dark:hover:text-accent-green md:bg-transparent  md:p-0"
                aria-current="page"
              >
                Technologies
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
