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

const ProjectCard = ({ project }:{
    project: Item
}) => {
    return (
        <div className="flex items-start border-l-4 border-gray-600 pl-2">
            <div className="flex-shrink-0 w-1 bg-gray-600"></div>
            <div className="flex-1">
                <h3 className="flex text-xl font-semibold justify-between items-center">
                    <a 
                        href={project.url ? project.url : "#"} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white-600 hover:text-zinc-800"
                    >
                        {project.title}
                    </a>
                    <p className="text-gray-700 mt-1 text-sm">{project.date}</p>
                </h3>
                <p className="text-gray-700 mt-1">{project.subtitle}</p>
                <p className="text-gray-700 mt-1">{project.content}</p>
                <div className="flex mt-2">
                    {project.usedTechnologies.map((Icon, index) => (
                        <Icon key={index} className="w-6 h-6 text-gray-700 mr-2" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export { ProjectCard };
export type { Item };
