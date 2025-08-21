import { SocialMediaCard } from "./components/social-media-card";
import { ProjectCard } from "./components/project-card";
import { ExpertiseCard, TechIcon } from "./components/expertise-card";
import { recentWorks, recentProfessionalExperiences, ProjectItem } from "./data";
import {
  SiReact, SiTypescript, SiCplusplus, SiC, SiRaylib, SiZig, SiTailwindcss,
  SiJavascript, SiVite, SiShadcnui, SiCmake, SiSwift, SiPython, SiPostgresql
} from "@icons-pack/react-simple-icons";
import { Download, Code, Briefcase, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const SectionHeader = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <motion.div 
    className="flex items-center mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300">
      <Icon className="w-5 h-5" />
    </div>
    <h2 className="ml-3 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
      {title}
    </h2>
    <div className="flex-1 h-px ml-4 bg-gradient-to-r from-zinc-200 to-transparent dark:from-zinc-700" />
  </motion.div>
);

const AnimatedCard = ({ children, index }: { children: React.ReactNode; index?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index !== undefined ? index * 0.1 : 0 }}
  >
    {children}
  </motion.div>
);

const techStack = {
  professional: [
    { icon: SiReact, name: "React" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiVite, name: "Vite" },
    { icon: SiShadcnui, name: "Shadcn" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiPython, name: "Python" },
    { icon: SiPostgresql, name: "PostgreSQL" }
  ],
  hobby: [
    { icon: SiCplusplus, name: "C++" },
    { icon: SiC, name: "C" },
    { icon: SiRaylib, name: "Raylib" },
    { icon: SiCmake, name: "CMake" },
    { icon: SiSwift, name: "Swift" },
    { icon: SiZig, name: "Zig" }
  ]
};

const ResumeSection = () => (
  <motion.div 
    className="mt-20 bg-white/50 dark:bg-zinc-800/30 rounded-2xl border border-zinc-200/80 dark:border-zinc-700/80 p-8 backdrop-blur-sm"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
          View My Professional Journey
        </h3>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300 max-w-md">
          Download my resume to explore my full professional background and qualifications in detail.
        </p>
      </div>
      <motion.a
        href="/cv.pdf"
        download="Burak_Sen_Resume.pdf"
        className="flex items-center justify-center px-6 py-3 font-medium rounded-md bg-gradient-to-r from-zinc-800 to-zinc-700 text-white hover:from-zinc-700 hover:to-zinc-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 transition-all duration-300 min-w-[180px]"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <Download className="w-4 h-4 mr-2" />
        Download Resume
      </motion.a>
    </div>
  </motion.div>
);

function App() {
  const sections = [
    { icon: Briefcase, title: 'Professional Experience', items: recentProfessionalExperiences },
    { icon: Rocket, title: 'Recent Projects', items: recentWorks }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 text-zinc-800 dark:text-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <SocialMediaCard />

        <section className="mt-16">
          <SectionHeader icon={Code} title="Technical Expertise" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(techStack).map(([type, items]) => (
              <ExpertiseCard 
                key={type}
                title={`${type === 'professional' ? 'Professional' : 'Hobby'} Tech Stack`}
                className="border border-zinc-200 dark:border-zinc-700"
              >
                <div className={`grid ${type === 'professional' ? 'grid-cols-8' : 'grid-cols-6'} gap-3 sm:gap-4`}>
                  {items.map(({ icon, name }) => (
                    <TechIcon 
                      key={name}
                      icon={icon} 
                      name={name}
                      className={type === 'hobby' ? 'hover:bg-zinc-100 dark:hover:bg-zinc-800/50' : ''}
                    />
                  ))}
                </div>
              </ExpertiseCard>
            ))}
          </div>
        </section>

        {sections.map(({ icon, title, items }) => (
          <section key={title} className="mt-20">
            <SectionHeader icon={icon} title={title} />
            <div className="space-y-6">
              {items.map((item: ProjectItem, index: number) => (
                <AnimatedCard key={item.title} index={index}>
                  <ProjectCard project={item} />
                </AnimatedCard>
              ))}
            </div>
          </section>
        ))}

        <ResumeSection />
      </div>
    </div>
  );
}

export default App;
