import { SocialMediaCard } from "./components/social-media-card";
import { ProjectCard } from "./components/project-card";
import { recentWorks } from "./recent-works";
import { recentProfessionalExperiences } from "./professional-experiences";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiVite,
  SiShadcnui,
  SiTailwindcss,
  SiCplusplus,
  SiC,
  SiCmake,
  SiMake,
  SiSwift,
  SiRaylib,
  SiZig,
} from "@icons-pack/react-simple-icons";
import { Download } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="flex flex-col max-w-5xl mx-auto px-4 py-8">
        {/* Header Section */}
        <SocialMediaCard />

        {/* Skills Section with colorful icons */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 p-6 transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                Main Tech Stack
              </h3>
              <div className="flex flex-wrap gap-4">
                <SiReact className="w-8 h-8 text-blue-500" />
                <SiTypescript className="w-8 h-8 text-blue-600" />
                <SiJavascript className="w-8 h-8 text-yellow-400" />
                <SiVite className="w-8 h-8 text-purple-600" />
                <SiShadcnui className="w-8 h-8 text-gray-600 dark:text-gray-300" />
                <SiTailwindcss className="w-8 h-8 text-cyan-500" />
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 p-6 transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                Hobby Projects
              </h3>
              <div className="flex flex-wrap gap-4">
                <SiCplusplus className="w-8 h-8 text-blue-700" />
                <SiC className="w-8 h-8 text-blue-400" />
                <SiRaylib className="w-8 h-8 text-green-600" />
                <SiCmake className="w-8 h-8 text-red-500" />
                <SiMake className="w-8 h-8 text-amber-600" />
                <SiSwift className="w-8 h-8 text-orange-500" />
                <SiZig className="w-8 h-8 text-[#F7A41E]" />
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {recentProfessionalExperiences.map((project) => (
              <div
                key={project.title}
                className="bg-gray-50 dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 p-6 transition hover:shadow-md"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
            Recent Projects
          </h2>
          <div className="space-y-6">
            {recentWorks.map((project) => (
              <div
                key={project.title}
                className="bg-gray-50 dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 p-6 transition hover:shadow-md"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Resume Download Section */}
        <div className="mt-12 bg-gray-50 dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 p-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-lg font-medium text-black dark:text-white mb-4 sm:mb-0">
            Interested in my full qualifications?
          </p>
          <a
            href="./cv.pdf"
            className="inline-flex items-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg transition hover:bg-gray-800 dark:hover:bg-gray-100"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
