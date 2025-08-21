import { IconType } from "@icons-pack/react-simple-icons";
import { IconBase } from "react-icons";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
type Item = {
  title: string;
  date: string;
  subtitle: string;
  content: string;
  usedTechnologies: (IconType | typeof IconBase)[];
  url?: string;
  githubUrl?: string;
};

const ProjectCard = ({ project }: { project: Item }) => {
  const renderWithBold = (text: string) => {
    if (!text) return null;
    const parts = text.split("*");
    return (
      <span>
        {parts.map((part, index) => (
          <span
            key={index}
            className={`transition-colors ${
              index % 2 === 0
                ? "text-zinc-600 dark:text-zinc-300"
                : "font-medium text-zinc-900 dark:text-zinc-100"
            }`}
          >
            {part}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/50 dark:bg-zinc-800/30 backdrop-blur-sm border border-zinc-200/80 dark:border-zinc-700/80">
      
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
              {project.title}
            </h3>
            <span className="inline-block mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {project.date}
            </span>
          </div>
          
          <div className="flex items-center space-x-1">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 -m-1.5 rounded-full text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label="GitHub Repository"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 -m-1.5 rounded-full text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="mt-4 space-y-3">
          <p className="text-zinc-800 dark:text-zinc-100 leading-relaxed">
            {renderWithBold(project.subtitle)}
          </p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            {renderWithBold(project.content)}
          </p>
        </div>

        {/* Technologies */}
        {project.usedTechnologies.length > 0 && (
          <div className="mt-2">
            <div className="flex flex-wrap gap-1.5">
              {project.usedTechnologies.map((Icon, index) => (
                <div key={index} className="p-1.5 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export { ProjectCard };
export type { Item };
