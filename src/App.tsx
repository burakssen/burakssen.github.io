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
} from "@icons-pack/react-simple-icons";

function App() {
  return (
    <div className="flex">
      <div className="lg:basis-1/4 sm:w-0 p-4"></div>
      <div className="lg:basis-1/2 w-full p-4">
        <SocialMediaCard />
        <div className="p-2 mt-5">
          <table>
            <tbody>
              <tr>
                <td>Main Tech Stack</td>
                <td className="flex p-1 space-x-2">
                  <div>|</div>
                  <SiReact />
                  <SiTypescript />
                  <SiJavascript />
                  <SiVite />
                  <SiShadcnui />
                  <SiTailwindcss />
                </td>
              </tr>
              <tr>
                <td>Hobby Stack 🙂</td>
                <td className="flex p-1 space-x-2">
                  <div>|</div>
                  <SiCplusplus />
                  <SiC />
                  <SiRaylib />
                  <SiCmake />
                  <SiMake />
                  <SiSwift />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-2 mt-5">
          <h2 className="text-lg font-semibold">Recent Projects</h2>
          <hr className="mt-1" />

          {recentWorks.map((project) => (
            <div key={project.title} className="mt-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="p-2 mt-5">
          <h2 className="text-lg font-semibold">Professional Experiences</h2>
          <hr className="mt-1" />

          {recentProfessionalExperiences.map((project) => (
            <div key={project.title} className="mt-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <div className="p-2 mt-5">
          Would you like to have my resume?{" "}
          <a href="./cv.pdf">Click here and download.</a>
        </div>
      </div>
      <div className="lg:basis-1/4 sm:w-0 p-4"></div>
    </div>
  );
}

export default App;
