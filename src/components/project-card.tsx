import { IconType } from "@icons-pack/react-simple-icons";
import { IconBase } from "react-icons";
import { FaLink } from "react-icons/fa";

type Item = {
  title: string;
  date: string;
  subtitle: string;
  content: string;
  usedTechnologies: (IconType | typeof IconBase)[];
  url?: string;
};

const ProjectCard = ({ project }: { project: Item }) => {
  const renderWithBold = (text: string) => {
    const parts = text.split("*");
    return (
      <span>
        {parts.map((part, index) => (
          <span
            key={index}
            className={
              index % 2 === 0
                ? "text-gray-600 dark:text-gray-400"
                : "font-medium text-black dark:text-white"
            }
          >
            {part}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div className="relative pl-6 border-l-2 border-black dark:border-white">
      <div className="absolute w-3 h-3 bg-black dark:bg-white rounded-full left-[-7px] top-2"></div>
      <div>
        {/* Improved header section for small screens */}
        <div className="flex flex-col mb-2">
          <h3 className="text-xl font-semibold text-black dark:text-white mb-1">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 dark:hover:text-gray-300 flex items-center"
              >
                {project.title} <FaLink className="w-4 h-4 ml-2 opacity-70" />
              </a>
            ) : (
              project.title
            )}
          </h3>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {project.date}
          </p>
        </div>

        <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
          {renderWithBold(project.subtitle)}
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {renderWithBold(project.content)}
        </p>

        <div className="flex flex-wrap gap-3">
          {project.usedTechnologies.map((Icon, index) => (
            <Icon key={index} className="w-5 h-5 text-black dark:text-white" />
          ))}
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
export type { Item };
