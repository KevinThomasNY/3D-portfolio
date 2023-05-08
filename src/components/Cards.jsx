const projectsData = [
  {
    id: 1,
    name: "Movie App",
    description:
      "A Next.js based website that allows you to discover popular movies and TV shows. Data is fetched from the The Movie Database (TMDb) API. You can search both movies and TV shows.",
    technologies: ["Next.js", "Tailwind CSS"],
    githubLink: "https://github.com/KevinThomasNY/Movie-App",
    liveLink: "https://movie-app-kevin.vercel.app/",
    image: "./images/movie_app.png",
    alt: "Movie App screenshot",
  },
  {
    id: 2,
    name: "Andriod Contact App",
    description:
      "This mobile app was built using Android Studio. The app stores a persons contact information. Based on users age the app will return information such as: can the user drive, vote, and rent a car. Google Maps API was added. This allows users to use Google Maps through the app.",
    technologies: ["Andriod Studio", "Kotlin", "SQLite"],
    githubLink:
      "https://github.com/KevinThomasNY/Contact-Information-Android-App-",
    liveLink: "https://contact-app-android.netlify.app/",
    image: "./images/andriod_app.png",
    alt: "Andriod Contact App screenshot",
  },
  {
    id: 3,
    name: "WinterHold University 3D Model",
    description:
      "This 3D model was created using Blender for a System Design and Implementation class. You can use the mouse to rotate the Winterhold University model. The model includes a fan animation.",
    technologies: ["React", "React-three-fiber", "Tailwind CSS"],
    githubLink: "https://github.com/KevinThomasNY/Winterhold-3D-Model",
    liveLink: "https://winterhold-3d-model.vercel.app/",
    image: "./images/winterhold_model.png",
    alt: "Andriod Contact App screenshot",
  },
  {
    id: 4,
    name: "3D-Donut",
    description:
      "This website renders 3D-Donuts. You can move the camera around with left & right click. Use the scroll wheel to zoom in & out. The donut model was created in Blender. You can download the donut model from GitHub.",
    technologies: ["JavaScript", "Three.js"],
    githubLink: "https://github.com/KevinThomasNY/3D-Donut",
    liveLink: "https://3-d-donut.vercel.app/",
    image: "./images/donut.png",
    alt: "Donut screenshot",
  },
  {
    id: 5,
    name: "Portfolio Version 1",
    description:
      "This is my original portfolio website, and there are several similarities between its first version and the current one, version 2. In the first version, an SVG animation was used in the hero section, while the current version features a 3D model with a screen animation. In version 2 you can rotate the screen image.",
    technologies: ["Next.js", "Styled Components"],
    githubLink: null,
    liveLink: "https://kevin-thomas-portfolio.vercel.app/",
    image: "./images/portfolio.png",
    alt: "Portfolio screenshot",
  },
];

export default function Cards() {
  return (
    <div className="mx-auto max-w-6xl p-4 pt-32">
      <h1 className="text-4xl md:pb-12 md:text-6xl">More Projects</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`w-full rounded-lg border border-gray-200 bg-white shadow dark:border-gray-900 dark:bg-dark-card ${
              project.id === 5 ? "md:col-span-2" : ""
            }`}
          >
            <a href={project.liveLink} target="_blank">
              <img
                className="w-full rounded-t-lg"
                src={project.image}
                alt={project.alt}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>

              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="mr-2 rounded bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                >
                  {technology}
                </span>
              ))}

              <br />
              {project.githubLink != null && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="mr-4 mt-4  inline-flex items-center justify-center  rounded-lg bg-accent-green px-3 py-2 text-center text-sm font-medium text-white  hover:bg-dark-green focus:outline-none focus:ring-4 focus:ring-green-700"
                >
                  Code
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="ml-2 mr-1 h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </a>
              )}

              <a
                href={project.liveLink}
                target="_blank"
                className="mt-4 inline-flex  items-center justify-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Live Site
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="ml-2 mr-1 h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
