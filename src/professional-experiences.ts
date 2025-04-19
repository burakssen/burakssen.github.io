import { Item } from "./components/project-card";
import {
  SiNodedotjs,
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiDjango,
  SiDocker,
  SiReact,
  SiPostgresql,
  SiApachecouchdb,
  SiPhp,
  SiJson,
  SiGo,
  SiR,
  SiDotnet,
  SiMicrosoftsqlserver,
  SiYaml,
  SiGitlab,
  SiAnsible,
  SiGithubactions,
  SiZig,
} from "@icons-pack/react-simple-icons";
import { FaJava } from "react-icons/fa";

const recentProfessionalExperiences: Item[] = [
  {
    title: "Z-Ant",
    date: "April 2025 - Present",
    url: "https://github.com/ZantFoundation/Z-Ant",
    subtitle: "Zant Foundation - *Z-Ant*",
    content:
      "Working as a *volunteer software engineer* at Zant Foundation. Developing *Z-Ant*, a *Zig* based neural network library for microcontrollers.",
    usedTechnologies: [SiZig, SiGithubactions],
  },
  {
    title: "Full Stack Software Engineer",
    url: "https://commonroad.in.tum.de",
    date: "July 2024 - Present",
    subtitle: "*TUM Commonroad*",
    content:
      "Working as a *Full Stack Software Engineer* at TUM Commonroad. Developing *web applications using React, Node.js, and Javascript*. Building *RESTful APIs and microservices*.",
    usedTechnologies: [
      SiReact,
      SiJavascript,
      SiPython,
      SiDjango,
      SiPostgresql,
      SiDocker,
      SiGitlab,
      SiAnsible,
    ],
  },
  {
    title: "Assistant Student - Software Engineer",
    date: "November 2022 - October 2023",
    subtitle: "*TUM School of Computation, Information and Technology*",
    content:
      "Worked as an *assistan student at TUM CIT*. Developed web applications using *React, Node.js, and CouchDB*.",
    usedTechnologies: [SiReact, SiNodedotjs, SiJavascript, SiApachecouchdb],
  },
  {
    title: "Software Engineer",
    url: "https://www.map.com.tr/",
    date: "April 2022 - August 2022",
    subtitle: "*Map E-Commerce & Data Services Inc.*",
    content:
      "Worked as a *software engineer* at Map E-Commerce & Data Services Inc. Worked on *data flow and data processing pipelines and supply chain applications*.",
    usedTechnologies: [SiPhp, SiJson, SiCplusplus, SiGo, SiYaml],
  },
  {
    title: "Data Science Intern",
    url: "https://www.cbiko.gov.tr/",
    date: "November 2021 - January 2022",
    subtitle: "*T.R. Presidential Human Resources Office*",
    content:
      "Worked as a *data science intern* at T.R. Presidential Human Resources Office. Worked on *data analysis and visualization* projects.",
    usedTechnologies: [SiR],
  },
  {
    title: "Software Development Intern",
    date: "August 2021 - September 2021",
    url: "https://www.ibm.com/",
    subtitle: "IBM",
    content:
      "Worked on IBM BPM (Business Process Management) and worked on a customer service application.",
    usedTechnologies: [FaJava, SiJavascript],
  },
  {
    title: "Software Development Intern",
    date: "July 2021 - August 2021",
    url: "https://www.d-teknoloji.com.tr",
    subtitle: "*Doğuş Teknoloji*",
    content:
      "Worked on a *customer service application* for *automotive companies*. Created a *page for pairing pos devices with customer services.*",
    usedTechnologies: [SiDotnet, SiMicrosoftsqlserver],
  },
];

export { recentProfessionalExperiences };
