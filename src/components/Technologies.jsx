import { useState } from "react";
import {
  HiOutlineViewGrid,
  HiOutlineTerminal,
  HiOutlineDatabase,
  HiOutlineCloud,
  HiOutlineCode,
} from "react-icons/hi";

const skillsData = [
  {
    id: 1,
    title: "Frameworks",
    icon: HiOutlineViewGrid,
    skills: ["React", "Next.js", "Laravel"],
  },
  {
    id: 2,
    title: "Backend",
    icon: HiOutlineTerminal,
    skills: ["Node.js", "Express.js"],
  },
  {
    id: 3,
    title: "Databases",
    icon: HiOutlineDatabase,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Amazon RDS", "Redis"],
  },
  {
    id: 4,
    title: "Cloud & AWS",
    icon: HiOutlineCloud,
    skills: ["Docker", "AWS Lambda", "AWS SAM", "Amazon ECS", "Amazon S3", "Secrets Manager"],
  },
  {
    id: 5,
    title: "Languages",
    icon: HiOutlineCode,
    skills: ["JavaScript", "TypeScript", "Python", "PHP", "Java", "Kotlin", "C#"],
  },
];

function SkillCard({ category }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = category.icon;

  return (
    <div
      className={`rounded-xl border p-5 transition-all duration-300 
        ${
          isHovered
            ? "border-accent-green bg-gray-50 dark:bg-dark-card/80"
            : "border-gray-200 bg-white dark:border-gray-700 dark:bg-dark-card"
        }
        ${category.id === 5 ? "md:col-span-2" : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300 ${
            isHovered
              ? "bg-accent-green text-white"
              : "bg-accent-green/10 text-accent-green"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {category.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-gray-300 bg-transparent px-3 py-1.5 text-sm text-gray-700 transition-colors duration-200 hover:border-accent-green hover:text-accent-green dark:border-gray-600 dark:text-gray-300 dark:hover:border-accent-green dark:hover:text-accent-green"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Technologies() {
  return (
    <div id="tech" className="mx-auto max-w-6xl p-4 pb-24 pt-24">
      <h1 className="text-4xl md:pb-12 md:text-6xl">Technologies</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skillsData.map((category) => (
          <SkillCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
