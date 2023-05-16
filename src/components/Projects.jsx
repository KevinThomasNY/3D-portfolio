const projectsData = [
  {
    name: "Winterhold University",
    description:
      "This is a full stack website built for a System Design and Implementation class. The goal was to create a college registration system. There are 4 different logins: student, faculty, researcher, and admin.",
    technologies: ["JavaScript", "MySQL", "PHP"],
    githubLink: "https://github.com/KevinThomasNY/Winterhold-University",
    liveLink: "https://winterholduniversity.000webhostapp.com/src/home.html",
    image: "./images/winterhold.png",
    alt: "Winterhold University website screenshot",
  },
  {
    name: "MERN Todo App",
    description:
      "The application allows users to preform CRUD Operations on their Todo tasks. The app also includes a login and register page for user authentication. It is using JSON web token (JWT) for secure user sessions.",
    technologies: ["MongoDB", "Express-js", "React", "Nodejs"],
    githubLink: "https://github.com/KevinThomasNY/MERN-todo-app",
    liveLink: "https://todo-app-mern-stack.vercel.app/",
    image: "./images/mern.png",
    alt: "MERN Todo App screenshot",
  },
  {
    name: "Maze Game",
    description:
      "The Maze Game is a 2D Java game that includes randomly generated mazes. Each level presents players with progressively complex and challenging obstacles.",
    technologies: ["Java"],
    githubLink: "https://github.com/KevinThomasNY/The-Maze-Game-Java-",
    liveLink: "https://the-maze-game-java.netlify.app/",
    image: "./images/maze_game.png",
    alt: "Java screenshot",
  },
];

export default function Projects({ theme }) {
  return (
    <div id="projects" className="mx-auto max-w-6xl p-4">
      <h1 className="text-4xl md:pb-12 md:text-6xl">Projects</h1>
      <div className="grid grid-cols-1 gap-8  md:grid-cols-2">
        {/* Project 1 */}
        <div>
          <h2 className="pb-4 text-2xl">{projectsData[0].name}</h2>
          <p className="bg-dark-green p-6 text-white">
            {projectsData[0].description}
          </p>
          <div className="flex flex-row pb-4 pt-4">
            {projectsData[0].technologies.map((technology, index) => (
              <img
                key={index}
                src={`./images/logos_${technology.toLowerCase()}.png`}
                alt={technology}
                className="mr-4"
              />
            ))}
          </div>
          <button
            type="button"
            className="mr-2 transition duration-200 ease-in-out hover:scale-110"
          >
            <a
              href={projectsData[0].githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-8 md:w-9"
                src={`./images/logos_github_${
                  theme === "dark" ? "light" : "dark"
                }.png`}
                alt="github"
              />
            </a>
          </button>
          <button
            type="button"
            className="transition duration-200 ease-in-out hover:scale-110"
          >
            <a
              href={projectsData[0].liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-8 md:w-9"
                src={`./images/logos_live_site_${
                  theme === "dark" ? "light" : "dark"
                }.png`}
                alt="live_site"
              />
            </a>
          </button>
        </div>
        <div className="flex hidden items-center justify-center md:block md:pb-16">
          <a href={projectsData[0].liveLink} target="_blank">
            <img
              className=""
              src={projectsData[0].image}
              alt={projectsData[0].alt}
            />
          </a>
        </div>
        {/* Project 2 */}
        <div className="flex hidden items-center justify-center md:block">
          <a
            href={projectsData[1].liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className=""
              src={projectsData[1].image}
              alt={projectsData[1].alt}
            />
          </a>
        </div>
        <div className="md:pb-16">
          <h2 className="pb-4 text-2xl">{projectsData[1].name}</h2>
          <p className="bg-accent-purple p-6 text-white">
            {projectsData[1].description}
          </p>
          <div className="flex flex-row pb-4 pt-4">
            {projectsData[1].technologies.map((technology, index) => (
              <img
                key={index}
                src={`./images/icons8-${technology.toLowerCase()}.svg`}
                alt={technology}
                className="mr-4"
              />
            ))}
          </div>
          <button
            type="button"
            className="mr-2 transition duration-200 ease-in-out hover:scale-110"
          >
            {theme === "dark" ? (
              <a
                href={projectsData[1].githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-8 md:w-9"
                  src="./images/logos_github_light.png"
                  alt="github"
                />
              </a>
            ) : (
              <a
                href={projectsData[1].githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-8 md:w-9"
                  src="./images/logos_github_dark.png"
                  alt="github"
                />
              </a>
            )}
          </button>
          <button
            type="button"
            className="transition duration-200 ease-in-out hover:scale-110"
          >
            {theme === "dark" ? (
              <a
                href={projectsData[1].liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-8 md:w-9"
                  src="./images/logos_live_site_light.png"
                  alt="live_site"
                />
              </a>
            ) : (
              <a
                href={projectsData[1].liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-8 md:w-9"
                  src="./images/logos_live_site_dark.png"
                  alt="live_site"
                />
              </a>
            )}
          </button>
        </div>

        {/* Project 3 */}
        <div>
          <h2 className="pb-4 text-2xl">{projectsData[2].name}</h2>
          <p className="bg-dark-green p-6 text-white">
            {projectsData[2].description}
          </p>
          <div className="flex flex-row pb-4 pt-4">
            <img src="./images/icons8-java.svg" alt="Java" />
          </div>
          <button
            type="button"
            className="mr-2 transition duration-200 ease-in-out hover:scale-110"
          >
            {theme === "dark" ? (
              <a
                href={projectsData[2].githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-8 md:w-9"
                  src="./images/logos_github_light.png"
                  alt="GitHub"
                />
              </a>
            ) : (
              <a
                href={projectsData[2].githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-8 md:w-9"
                  src="./images/logos_github_dark.png"
                  alt="GitHub"
                />
              </a>
            )}
          </button>
          <button
            type="button"
            className="transition duration-200 ease-in-out hover:scale-110"
          >
            {theme === "dark" ? (
              <a
                href={projectsData[2].liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-8 md:w-9"
                  src="./images/logos_live_site_light.png"
                  alt="Live Site"
                />
              </a>
            ) : (
              <a
                href={projectsData[2].liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-8 md:w-9"
                  src="./images/logos_live_site_dark.png"
                  alt="Live Site"
                />
              </a>
            )}
          </button>
        </div>
        <div className="flex hidden items-center justify-center md:block">
          <a
            href={projectsData[2].liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className=""
              src="./images/maze_game.png"
              alt={projectsData[2].alt}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
