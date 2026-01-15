import { Item } from "./components/project-card";
import {
  SiSwift,
  SiTypescript,
  SiNextdotjs,
  SiCplusplus,
  SiCmake,
  SiRaylib,
  SiVite,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiMdx,
  SiMarkdown,
  SiWebassembly,
  SiHtml5,
  SiGithubactions,
  SiCss3,
  SiWebpack,
  SiOpengl,
  SiOnnx,
  SiZig,
} from "@icons-pack/react-simple-icons";

import { TbBrandFramerMotion } from "react-icons/tb";

const recentWorks: Item[] = [
  {
    title: "Chess Game",
    date: "October 2025",
    url: "https://burakssen.github.io/chess",
    subtitle: "*A chess game* using *Zig, Raylib and WebAssembly*",
    content:
      "This is a chess game built using Zig, Raylib and WebAssembly. It allows you to *play chess* against another player (Not online unfortunately).",
    usedTechnologies: [
      { icon: SiZig, name: "Zig" },
      { icon: SiRaylib, name: "Raylib" },
      { icon: SiWebassembly, name: "WebAssembly" },
    ],
  },
  {
    title: "JAXFLUIDS Simulation with TUMAER",
    date: "April 2025",
    url: "https://burakssen.github.io/jaxfluids-simulation",
    subtitle: "*A visual runtime for JAXFLUIDS framework examples*",
    content:
      "This is a visual runtime for JAXFLUIDS framework examples. It allows you to *simulate fluid dynamics* in real-time using onnx models.",
    usedTechnologies: [
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiVite, name: "Vite" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiOnnx, name: "ONNX" },
      { icon: SiWebassembly, name: "WebAssembly" },
    ],
  },
  {
    title: "Flip-Fluid Simulation",
    date: "March 2025",
    url: "https://burakssen.github.io/zff",
    subtitle:
      "*A rewrite for flip-fluid dynamics simulation* for Matthias Müller's Ten Minute Physics series",
    content:
      "This is arewrite for flip-fluid simulation for Matthias Müller's Ten Minute Physics series. Its rewritten with Zig, it can be compile into both desktop application and web assembly version.",
    usedTechnologies: [
      { icon: SiZig, name: "Zig" },
      { icon: SiRaylib, name: "Raylib" },
      { icon: SiOpengl, name: "OpenGL" },
      { icon: SiWebassembly, name: "WebAssembly" },
      { icon: SiGithubactions, name: "GitHub Actions" },
      { icon: SiHtml5, name: "HTML5" },
    ],
  },
  {
    title: "Maze Solver",
    date: "November 2024",
    url: "https://burakssen.github.io/maze-solver",
    subtitle: "*A maze solving visualizer* using Typescript, Html5 and CSS",
    content:
      "This is a maze solving visualizer built using Typescript, Html5 and CSS. It allows you to *visualize different maze solving algorithms* in action. Its implemented with HTML5 canvas.",
    usedTechnologies: [
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiHtml5, name: "HTML5" },
      { icon: SiCss3, name: "CSS3" },
      { icon: SiGithubactions, name: "GitHub Actions" },
      { icon: SiWebpack, name: "Webpack" },
    ],
  },
  {
    title: "3D Terrain Generation",
    date: "August 2024",
    url: "https://burakssen.github.io/3d-terrain-generation",
    subtitle: "*A 3D terrain generator* using *C++, Raylib and WebAssembly*",
    content:
      "This is a 3D terrain generator built using C++, Raylib and WebAssembly. Its an infinitly scrolling procedurally generated terrain mesh*.",
    usedTechnologies: [
      { icon: SiCplusplus, name: "C++" },
      { icon: SiRaylib, name: "Raylib" },
      { icon: SiCmake, name: "CMake" },
      { icon: SiWebassembly, name: "WebAssembly" },
      { icon: SiHtml5, name: "HTML5" },
      { icon: SiGithubactions, name: "GitHub Actions" },
    ],
  },
  {
    title: "Blog Page",
    date: "August 2024",
    url: "https://burakssen.github.io/blog",
    subtitle:
      "*A blog page* using *ReactJS, Typescript, Mdxjs, Vite and Tailwindcss*",
    content:
      "This is a blog page built using ReactJS, Typescript, Mdxjs, Vite and Tailwindcss. It allows you to *write and publish blog posts* with *Markdown*.",
    usedTechnologies: [
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiMdx, name: "MDX" },
      { icon: SiMarkdown, name: "Markdown" },
      { icon: SiVite, name: "Vite" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiShadcnui, name: "shadcn/ui" },
    ],
  },
  {
    title: "Sorting Visualizer",
    date: "August 2024",
    url: "https://burakssen.github.io/sorting-visualiser",
    subtitle:
      "*A sorting visualizer* using *ReactJS, Vite, Shadcn and Tailwindcss*",
    content:
      "This is a sorting visualizer built using ReactJS, Vite, Shadcn and Tailwindcss. It allows you to *visualize different sorting algorithms* in action.",
    usedTechnologies: [
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiVite, name: "Vite" },
      { icon: SiShadcnui, name: "shadcn/ui" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Animation System",
    url: "https://github.com/burakssen/animation_system",
    date: "August 2024",
    subtitle:
      "A simple *animation system* for games using *C++, Raylib and EnTT*",
    content:
      "This is a simple animation system for games built using C++, Raylib and EnTT. It allows you to *create and manage animations* for game objects in a *simple and efficient way*.",
    usedTechnologies: [
      { icon: SiCplusplus, name: "C++" },
      { icon: SiRaylib, name: "Raylib" },
      { icon: SiCmake, name: "CMake" },
    ],
  },
  {
    title: "QuitMe",
    url: "https://github.com/burakssen/quitme",
    date: "May 2024",
    subtitle: "*A macOS utility app* to *quit* all apps at once",
    content:
      "QuitMe is a macOS utility app that allows you to *quit all running apps* at once. It is a *simple application* which sits in *the menu bar* and provides a *shortcut* to quit all apps.",
    usedTechnologies: [
      { icon: SiSwift, name: "Swift" },
    ],
  },
  {
    title: "Boids - Inverse Kinematics",
    url: "https://burakssen.com/boids",
    date: "April 2024",
    subtitle:
      "*A boids simulation* using *C++, Raylib and WebAssembly.* It also includes *Inverse Kinematics*.",
    content:
      "Flocking behavior simulation using boids algorithm. It is built using C++, Raylib and WebAssembly. It also includes Inverse Kinematics for fish movements.",
    usedTechnologies: [
      { icon: SiCplusplus, name: "C++" },
      { icon: SiRaylib, name: "Raylib" },
      { icon: SiCmake, name: "CMake" },
      { icon: SiWebassembly, name: "WebAssembly" },
      { icon: SiHtml5, name: "HTML5" },
      { icon: SiGithubactions, name: "GitHub Actions" },
    ],
  },
  {
    title: "Kanban Board",
    url: "https://burakssen.com/kanban-board",
    date: "February 2024",
    subtitle: "A simple *Kanban board* app",
    content:
      "Kanban Board is a simple Kanban board app that allows you to *create and manage tasks* in a Kanban board style. It is a web app built with *NextJS, TypeScript and Framer Motion*.",
    usedTechnologies: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: TbBrandFramerMotion, name: "Framer Motion" },
    ],
  },
  {
    title: "Path Finding Visualizer",
    url: "https://github.com/burakssen/path_finding_visualiser",
    date: "January 2024",
    subtitle: "*A path finding visualizer* using *C++ and Raylib*",
    content:
      "This is a path finding visualizer built using C++ and Raylib. It allows you to *visualize different path finding algorithms* in action.",
    usedTechnologies: [
      { icon: SiCplusplus, name: "C++" },
      { icon: SiRaylib, name: "Raylib" },
      { icon: SiCmake, name: "CMake" },
    ],
  },
];

export { recentWorks };