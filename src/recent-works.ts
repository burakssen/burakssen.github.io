import { Item } from "./components/project-card";
import { SiSwift, SiTypescript, SiNextdotjs, SiCplusplus, SiCmake, SiRaylib,SiVite,SiReact,SiShadcnui,SiTailwindcss, SiMdx,SiMarkdown, SiWebassembly, SiHtml5, SiGithubactions } from "@icons-pack/react-simple-icons";
import { TbBrandFramerMotion } from "react-icons/tb";


const recentWorks: Item[] = [
    {
        title: "3D Terrain Generation",
        date: "August 2024",
        url: "https://burakssen.github.io/3d-terrain-generation",
        subtitle: "*A 3D terrain generator* using *C++, Raylib and WebAssembly*",
        content: "This is a 3D terrain generator built using C++, Raylib and WebAssembly. Its an infinitly scrolling procedurally generated terrain mesh*.",
        usedTechnologies: [SiCplusplus, SiRaylib, SiCmake,SiWebassembly,SiHtml5,SiGithubactions],
    },
    {
        title: "Blog Page",
        date: "August 2024",
        url: "https://burakssen.github.io/blog",
        subtitle: "*A blog page* using *ReactJS, Typescript, Mdxjs, Vite and Tailwindcss*",
        content: "This is a blog page built using ReactJS, Typescript, Mdxjs, Vite and Tailwindcss. It allows you to *write and publish blog posts* with *Markdown*.",
        usedTechnologies: [SiReact, SiTypescript, SiMdx, SiMarkdown, SiVite, SiTailwindcss, SiShadcnui],
    },
    {
        title: "Sorting Visualizer",
        date: "August 2024",
        url: "https://burakssen.github.io/sorting-visualiser",
        subtitle: "*A sorting visualizer* using *ReactJS, Vite, Shadcn and Tailwindcss*",
        content: "This is a sorting visualizer built using ReactJS, Vite, Shadcn and Tailwindcss. It allows you to *visualize different sorting algorithms* in action.",
        usedTechnologies: [SiReact, SiTypescript,SiVite,SiShadcnui,SiTailwindcss],
    },
    {
        title: "Animation System",
        url: "https://github.com/burakssen/animation_system",
        date: "August 2024",
        subtitle: "A simple *animation system* for games using *C++, Raylib and EnTT*",
        content: "This is a simple animation system for games built using C++, Raylib and EnTT. It allows you to *create and manage animations* for game objects in a *simple and efficient way*.",
        usedTechnologies: [SiCplusplus, SiRaylib, SiCmake],
    },
    {
        title: "QuitMe",
        url: "https://github.com/burakssen/quitme",
        date: "May 2024",
        subtitle: "*A macOS utility app* to *quit* all apps at once",
        content: "QuitMe is a macOS utility app that allows you to *quit all running apps* at once. It is a *simple application* which sits in *the menu bar* and provides a *shortcut* to quit all apps.",
        usedTechnologies: [SiSwift],
    },
    {
        "title": "Boids - Inverse Kinematics",
        "url": "https://burakssen.com/boids",
        "date": "April 2024",
        "subtitle": "*A boids simulation* using *C++, Raylib and WebAssembly.* It also includes *Inverse Kinematics*.",
        "content": "Flocking behavior simulation using boids algorithm. It is built using C++, Raylib and WebAssembly. It also includes Inverse Kinematics for fish movements.",
        "usedTechnologies": [SiCplusplus, SiRaylib, SiCmake, SiWebassembly,SiHtml5,SiGithubactions],
    },
    {
        title: "Kanban Board",
        url: "https://burakssen.com/kanban-board",
        date: "February 2024",
        subtitle: "A simple *Kanban board* app",
        content: "Kanban Board is a simple Kanban board app that allows you to *create and manage tasks* in a Kanban board style. It is a web app built with *NextJS, TypeScript and Framer Motion*.",
        usedTechnologies: [SiNextdotjs, SiTypescript, TbBrandFramerMotion],
    },
    {
        title: "Path Finding Visualizer",
        date: "January 2024",
        subtitle: "*A path finding visualizer* using *C++ and Raylib*",
        content: "This is a path finding visualizer built using C++ and Raylib. It allows you to *visualize different path finding algorithms* in action.",
        usedTechnologies: [SiCplusplus, SiRaylib, SiCmake],
    },
];

export { recentWorks };