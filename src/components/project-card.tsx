import { IconType } from "@icons-pack/react-simple-icons";
import { IconBase } from "react-icons";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { ExternalLink } from "lucide-react";

export type Item = {
  title: string;
  date: string;
  subtitle: string;
  content: string;
  usedTechnologies: { icon: IconType | typeof IconBase; name: string }[];
  url?: string;
  githubUrl?: string;
};

const FormattedText = ({ text }: { text: string }) => {
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
              : "font-semibold text-zinc-900 dark:text-white"
          }`}
        >
          {part}
        </span>
      ))}
    </span>
  );
};

export const ProjectCard = ({ project }: { project: Item }) => {
  return (
    <div className="glass-card relative overflow-hidden h-full flex flex-col">
      <div className="absolute top-0 right-0 p-4 opacity-50 pointer-events-none">
        <div className="w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="p-6 relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
              {project.title}
            </h3>
            <span className="inline-block mt-1 text-sm font-medium px-2 py-0.5 rounded-full bg-zinc-100/50 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50">
              {project.date}
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/50 dark:bg-black/50 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-zinc-800 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="GitHub Repository"
              >
                <SiGithub className="w-4 h-4" />
              </a>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/50 dark:bg-black/50 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-zinc-800 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="mt-5 space-y-3 flex-1">
          <p className="text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
            <FormattedText text={project.subtitle} />
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <FormattedText text={project.content} />
          </p>
        </div>

        {/* Technologies */}
        {project.usedTechnologies.length > 0 && (
          <div className="mt-5 pt-5 border-t border-zinc-200/50 dark:border-zinc-700/50">
            <div className="flex flex-wrap gap-2">
              {project.usedTechnologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="group/tooltip relative p-2 rounded-lg bg-zinc-50/50 dark:bg-zinc-800/50 border border-zinc-100/50 dark:border-zinc-700/50 flex items-center justify-center hover:bg-white dark:hover:bg-zinc-700 transition-colors"
                >
                  <tech.icon className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover/tooltip:text-zinc-900 dark:group-hover/tooltip:text-zinc-200" />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-semibold rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-all duration-200 translate-y-1 group-hover/tooltip:-translate-y-0 pointer-events-none shadow-xl whitespace-nowrap z-20">
                    {tech.name}
                    {/* Arrow */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 dark:bg-white rotate-45" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
