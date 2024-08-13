import { IconType } from "@icons-pack/react-simple-icons";
import { IconBase } from "react-icons";

type Item = {
    title: string;
    date: string;
    subtitle: string;
    content: string;
    usedTechnologies: (IconType | typeof IconBase)[];
    url?: string;
};

const ProjectCard = ({ project }: {
    project: Item
}) => {

    const renderWithBold = (subtitle: string) => {
        const parts = subtitle.split("*");
        return (
            <span>
                {parts.map((part, index) => (
                    <span key={index} className={index % 2 === 0 ? "text-zinc-400" : "text-white"}>{part}</span>
                ))}
            </span>
        );
    };


    return (
        <div className="flex items-start border-l-4 border-white pl-2">
            <div className="flex-shrink-0 w-1 bg-white"></div>
            <div className="flex-1">
                <h3 className="flex text-xl font-semibold justify-between items-center">
                    <a 
                        href={project.url ? project.url : "#"} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-zinc-300"
                    >
                        {project.title}
                    </a>
                    <p className="text-zinc-300 mt-1 text-sm">{project.date}</p>
                </h3>
                <p className="text-zinc-400 mt-1">{renderWithBold(project.subtitle)}</p>
                <p className="text-zinc-400 mt-1">{renderWithBold(project.content)}</p>
                <div className="flex mt-2">
                    {project.usedTechnologies.map((Icon, index) => (
                        <Icon key={index} className="w-6 h-6 text-white mr-2" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export { ProjectCard };
export type { Item };
