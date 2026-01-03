import { SocialMediaCard } from "./components/social-media-card";
import { ProjectCard } from "./components/project-card";
import { ExpertiseCard, TechIcon } from "./components/expertise-card";
import { SectionHeader } from "./components/ui/section-header";
import { AnimatedCard } from "./components/ui/animated-card";
import { ResumeSection } from "./components/resume-section";
import { recentWorks, recentProfessionalExperiences, ProjectItem } from "./data";
import { techStack } from "./data/tech-stack";
import { Code, Briefcase, Rocket } from "lucide-react";

function App() {
  const sections = [
    { icon: Briefcase, title: 'Professional Experience', items: recentProfessionalExperiences },
    { icon: Rocket, title: 'Recent Projects', items: recentWorks }
  ];

  return (
    <div className="min-h-screen relative bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 overflow-hidden transition-colors duration-300">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob pointer-events-none" />
      <div className="absolute top-0 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute -bottom-40 left-20 w-96 h-96 bg-violet-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-gradient-to-tr from-indigo-500/5 via-cyan-500/5 to-violet-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 z-10">
        <SocialMediaCard />

        <section className="mt-16">
          <SectionHeader icon={Code} title="Technical Expertise" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(techStack).map(([type, items]) => (
              <ExpertiseCard 
                key={type}
                title={`${type === 'professional' ? 'Professional' : 'Hobby'} Tech Stack`}
              >
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
                  {items.map(({ icon, name }) => (
                    <TechIcon 
                      key={name}
                      icon={icon} 
                      name={name}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((item: ProjectItem, index: number) => (
                <AnimatedCard key={item.title} index={index}>
                  <ProjectCard project={item} />
                </AnimatedCard>
              ))}
            </div>
          </section>
        ))}

        <ResumeSection />

        <footer className="mt-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} Burak Şen. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
