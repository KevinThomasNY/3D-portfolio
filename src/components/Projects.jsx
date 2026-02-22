const PROJECTS = [
  {
    name: "Winterhold University",
    description:
      "This is a full stack website built for a System Design and Implementation class. The goal was to create a college registration system. There are 4 different logins: student, faculty, researcher, and admin.",
    technologies: ["JavaScript", "MySQL", "PHP"],
    githubLink: "https://github.com/KevinThomasNY/Winterhold-University",
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

function getTechIcon(tech, projectName) {
  const techLower = tech.toLowerCase();
  if (techLower === "java") return "./images/icons8-java.svg";
  if (projectName === "MERN Todo App") return `./images/icons8-${techLower}.svg`;
  return `./images/logos_${techLower}.png`;
}

function ProjectImage({ project }) {
  const img = <img src={project.image} alt={project.alt} />;
  return (
    <div className="flex items-center justify-center">
      {project.liveLink ? (
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">{img}</a>
      ) : img}
    </div>
  );
}

function ProjectLink({ href, iconSrc, alt }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mr-2 inline-block transition duration-200 ease-in-out hover:scale-110"
    >
      <img className="w-8 md:w-9" src={iconSrc} alt={alt} />
    </a>
  );
}

function Project({ project, index, theme }) {
  const isImageFirst = index % 2 !== 0;
  const iconVariant = theme === "dark" ? "light" : "dark";

  return (
    <div className="md:pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {isImageFirst && <ProjectImage project={project} />}

      <div>
        <h2 className="pb-4 text-2xl">{project.name}</h2>
        <p className={`${project.bgColor} p-6 text-white`}>{project.description}</p>
        <div className="flex flex-row py-4">
          {project.technologies.map((tech) => (
            <img key={tech} src={getTechIcon(tech, project.name)} alt={tech} className="mr-4" />
          ))}
        </div>
        <div>
          <ProjectLink
            href={project.githubLink}
            iconSrc={`./images/logos_github_${iconVariant}.png`}
            alt="github"
          />
          {project.liveLink && (
            <ProjectLink
              href={project.liveLink}
              iconSrc={`./images/logos_live_site_${iconVariant}.png`}
              alt="live site"
            />
          )}
        </div>
      </div>

      {!isImageFirst && <ProjectImage project={project} />}
    </div>
  );
}

export default function Projects({ theme }) {
  return (
    <section id="projects" className="mx-auto max-w-6xl p-4">
      <h1 className="text-4xl md:pb-12 md:text-6xl">Projects</h1>
      <div className="space-y-16">
        {PROJECTS.map((project, index) => (
          <Project key={project.name} project={project} index={index} theme={theme} />
        ))}
      </div>
    </section>
  );
}
