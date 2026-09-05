import { useCallback, useEffect, useRef, useState } from "react";

const PROJECTS = [
  {
    name: "Password Manager",
    description:
      "A full stack application for securely managing passwords. Built with React, TypeScript, Node.js, and Express.js. Uses Drizzle ORM with SQLite for data persistence, featuring user authentication, encrypted password storage, and a modern UI with Tailwind CSS.",
    technologies: ["React", "TypeScript", "Nodejs", "Express-js", "SQLite"],
    githubLink: "https://github.com/KevinThomasNY/password-manager",
    image: "./images/password_manager.png",
    alt: "Password Manager screenshot",
    bgColor: "bg-accent-purple",
  },
  {
    name: "Maze Game",
    description:
      "The Maze Game is a 2D Java game that includes randomly generated mazes. Each level presents players with progressively complex and challenging obstacles.",
    technologies: ["Java"],
    githubLink: "https://github.com/KevinThomasNY/java-2d-game",
    image: "./images/maze_game.png",
    alt: "Java screenshot",
    bgColor: "bg-dark-green",
  },
  {
    name: "Winterhold University",
    description:
      "This is a full stack website built for a System Design and Implementation class. The goal was to create a college registration system. There are 4 different logins: student, faculty, researcher, and admin.",
    technologies: ["JavaScript", "MySQL", "PHP"],
    githubLink: "https://github.com/KevinThomasNY/Winterhold-University",
    image: "./images/winterhold.png",
    alt: "Winterhold University website screenshot",
    bgColor: "bg-accent-purple",
  },
];

function getTechIcon(tech) {
  const techLower = tech.toLowerCase();
  const svgIcons = ["java", "react", "nodejs", "express-js", "typescript", "sqlite"];
  if (svgIcons.includes(techLower)) return `./images/icons8-${techLower}.svg`;
  return `./images/logos_${techLower}.png`;
}

function ProjectImage({ project, onOpen }) {
  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`View larger image of ${project.name}`}
        className="cursor-zoom-in overflow-hidden rounded focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-green"
      >
        <img
          src={project.image}
          alt={project.alt}
          className="transition-transform duration-300 ease-out hover:scale-[1.02]"
        />
      </button>
    </div>
  );
}

function ImageModal({ project, isOpen, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousActiveElement = document.activeElement;
    const previousBodyOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} image preview`}
      aria-hidden={!isOpen}
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-opacity duration-300 ease-out ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`relative transition duration-300 ease-out ${
          isOpen ? "translate-y-0 scale-100" : "translate-y-4 scale-95"
        }`}
      >
        <img
          src={project.image}
          alt={project.alt}
          className="max-h-[85vh] max-w-[92vw] rounded-lg object-contain shadow-2xl sm:max-w-[85vw]"
        />
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          tabIndex={isOpen ? 0 : -1}
          aria-label="Close image preview"
          className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl text-white transition hover:bg-black focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-green"
        >
          &times;
        </button>
      </div>
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

function Project({ project, theme, onImageOpen }) {
  const iconVariant = theme === "dark" ? "light" : "dark";

  return (
    <div className="md:pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <ProjectImage project={project} onOpen={onImageOpen} />

      <div>
        <h2 className="pb-4 text-2xl">{project.name}</h2>
        <p className={`${project.bgColor} p-6 text-white`}>{project.description}</p>
        <div className="flex flex-row py-4">
          {project.technologies.map((tech) => (
            <img key={tech} src={getTechIcon(tech)} alt={tech} className="mr-4" />
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
    </div>
  );
}

export default function Projects({ theme }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const openModal = (project) => {
    setSelectedProject(project);
    requestAnimationFrame(() => setIsModalOpen(true));
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl p-4">
      <h1 className="text-4xl md:pb-12 md:text-6xl">Projects</h1>
      <div className="space-y-16">
        {PROJECTS.map((project) => (
          <Project
            key={project.name}
            project={project}
            theme={theme}
            onImageOpen={openModal}
          />
        ))}
      </div>
      <ImageModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
