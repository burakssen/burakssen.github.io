import { Item } from "./components/project-card";
import { SiSwift, SiTypescript, SiNextdotjs, SiCplusplus, SiCmake, SiRaylib } from "@icons-pack/react-simple-icons";


const recentWorks: Item[] = [
    {
        title: "Animation System",
        date: "August 2024",
        subtitle: "A simple animation system for games using C++, Raylib and EnTT",
        content: "This is a simple animation system for games built using C++, Raylib and EnTT. It allows you to create and manage animations for game objects in a simple and efficient way.",
        usedTechnologies: [SiCplusplus, SiRaylib, SiCmake],
    },
    {
        title: "QuitMe",
        url: "https://github.com/burakssen/quitme",
        date: "May 2024",
        subtitle: "A macOS utility app to quit all apps at once",
        content: "QuitMe is a macOS utility app that allows you to quit all apps at once. It is a simple app that sits in the menu bar and provides a shortcut to quit all apps.",
        usedTechnologies: [SiSwift],
    },
    {
        title: "Kanban Board",
        url: "https://github.com/burakssen/kanban-board",
        date: "February 2024",
        subtitle: "A simple Kanban board app",
        content: "Kanban Board is a simple Kanban board app that allows you to create and manage tasks in a Kanban board style. It is a web app built with NextJS and TypeScript.",
        usedTechnologies: [SiNextdotjs, SiTypescript],
    },
    {
        title: "Path Finding Visualizer",
        date: "January 2024",
        subtitle: "A path finding visualizer using C++ and Raylib",
        content: "This is a path finding visualizer built using C++ and Raylib. It allows you to visualize different path finding algorithms in action.",
        usedTechnologies: [SiCplusplus, SiRaylib, SiCmake],
    },
];

export { recentWorks };