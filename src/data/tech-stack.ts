import {
  SiReact, SiTypescript, SiCplusplus, SiC, SiRaylib, SiZig, SiTailwindcss,
  SiJavascript, SiVite, SiShadcnui, SiCmake, SiSwift, SiPython, SiPostgresql,
  SiDjango, SiHtmx,
} from "@icons-pack/react-simple-icons";

export const techStack = {
  professional: [
    { icon: SiPython, name: "Python" },
    { icon: SiDjango, name: "Django" },
    { icon: SiHtmx, name: "HTMX" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiReact, name: "React" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiJavascript, name: "JavaScript" },
  ],
  hobby: [
    { icon: SiZig, name: "Zig" },
    { icon: SiCplusplus, name: "C++" },
    { icon: SiC, name: "C" },
    { icon: SiRaylib, name: "Raylib" },
    { icon: SiCmake, name: "CMake" },
    { icon: SiSwift, name: "Swift" },
  ]
};
