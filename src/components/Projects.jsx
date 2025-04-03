const projectsData = [
  {
    name: "Winterhold University",
    description:
      "This is a full stack website built for a System Design and Implementation class. The goal was to create a college registration system. There are 4 different logins: student, faculty, researcher, and admin.",
    technologies: ["JavaScript", "MySQL", "PHP"],
    githubLink: "https://github.com/KevinThomasNY/Winterhold-University",
    liveLink: "",
    image: "./images/winterhold.png",
    alt: "Winterhold University website screenshot",
    bgColor: "bg-dark-green",
  },
  {
    name: "MERN Todo App",
    description:
      "The application allows users to perform CRUD Operations on their Todo tasks. The app also includes a login and register page for user authentication. It is using JSON web token (JWT) for secure user sessions.",
    technologies: ["MongoDB", "Express-js", "React", "Nodejs"],
    githubLink: "https://github.com/KevinThomasNY/MERN-todo-app",
    liveLink: "https://todo-app-mern-stack.vercel.app/",
    image: "./images/mern.png",
    alt: "MERN Todo App screenshot",
    bgColor: "bg-accent-purple",
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
    bgColor: "bg-dark-green",
  },
];

function Project({ project, index, theme }) {
  const isImageFirst = index % 2 !== 0;
  const githubLogo = theme === "dark" ? "light" : "dark";
  const liveLogo = theme === "dark" ? "light" : "dark";

  const renderImage = () => (
    <div className="flex items-center justify-center">
      {project.liveLink ? (
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt={project.alt} />
        </a>
      ) : (
        <img src={project.image} alt={project.alt} />
      )}
    </div>
  );

  return (
    <div className="md:pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {isImageFirst && renderImage()}

      <div>
        <h2 className="pb-4 text-2xl">{project.name}</h2>
        <p className={`${project.bgColor} p-6 text-white`}>
          {project.description}
        </p>
        <div className="flex flex-row pb-4 pt-4">
          {project.technologies.map((tech, idx) => {
            let iconSrc = "";
            // Check if technology is Java
            if (tech.toLowerCase() === "java") {
              iconSrc = "./images/icons8-java.svg";
            } else if (project.name === "MERN Todo App") {
              iconSrc = `./images/icons8-${tech.toLowerCase()}.svg`;
            } else {
              iconSrc = `./images/logos_${tech.toLowerCase()}.png`;
            }
            return (
              <img key={idx} src={iconSrc} alt={tech} className="mr-4" />
            );
          })}
        </div>
        <div>
          <button
            type="button"
            className="mr-2 transition duration-200 ease-in-out hover:scale-110"
          >
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-8 md:w-9"
                src={`./images/logos_github_${githubLogo}.png`}
                alt="github"
              />
            </a>
          </button>
          {project.liveLink && (
            <button
              type="button"
              className="transition duration-200 ease-in-out hover:scale-110"
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-8 md:w-9"
                  src={`./images/logos_live_site_${liveLogo}.png`}
                  alt="live site"
                />
              </a>
            </button>
          )}
        </div>
      </div>

      {!isImageFirst && renderImage()}
    </div>
  );
}

export default function Projects({ theme }) {
  return (
    <div id="projects" className="mx-auto max-w-6xl p-4">
      <h1 className="text-4xl md:pb-12 md:text-6xl">Projects</h1>
      <div className="space-y-16">
        {projectsData.map((project, index) => (
          <Project key={index} project={project} index={index} theme={theme} />
        ))}
      </div>
    </div>
  );
}
