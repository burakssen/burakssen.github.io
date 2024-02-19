import { useState, useRef, useEffect } from "react";

import { getContact } from "../components/contact.js";
import { getEducation } from "../components/education.js";
import { getProfessionalExperience } from "../components/professional_experience.js";
import { getProjects } from "../components/projects.js";
import { getHelp } from "../components/help.js";
import { getOrganizations } from "../components/organizations.js";
import { getNeofetch } from "../components/neofetch.js";

const Home = () => {
  const [conversationList, setConversationList] = useState([
    {
      prompt: "",
      response: (
        <div>
          <div>Hey!</div>
          <div>
            Simply type "help" to discover and learn about all the available
            commands.
          </div>
          <div>By Burak Şen {new Date().getFullYear()}</div>
        </div>
      ),
    },
  ]);
  const [prompt, setPrompt] = useState();

  const messageEndRef = useRef(null);

  function getPromptString(prompt, cursor = true) {
    return (
      <div>
        <div>
          <span className="color-prompt-white">╭─</span>
          <span className="color-prompt-green">
            burakssen@burakssen.github.io
          </span>{" "}
          <span className="color-prompt-purple">~</span>
        </div>
        <div>
          <span className="color-prompt-white box">╰─$</span> {prompt}
          {cursor && <span className="cursor"></span>}
        </div>
      </div>
    );
  }

  useEffect(() => {
    window.addEventListener("click", (e) => {
      document.getElementById("prompt")?.focus();
    });
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversationList]);

  const applyPrompt = (prompt) => {
    switch (prompt[0]) {
      case "help":
        setConversationList([
          ...conversationList,
          {
            prompt: getPromptString("help", false),
            response: getHelp(),
          },
        ]);
        break;
      case "resume":
        window.open("cv.pdf", "_blank");
        break;
      case "neofetch":
        setConversationList([
          ...conversationList,
          {
            prompt: getPromptString("neofetch", false),
            response: getNeofetch(),
          },
        ]);
        break;
      case "clear":
        setConversationList([]);
        break;
      case "contact":
        setConversationList([
          ...conversationList,
          {
            prompt: getPromptString("contact", false),
            response: getContact(),
          },
        ]);
        break;
      case "education":
        setConversationList([
          ...conversationList,
          {
            prompt: getPromptString("education", false),
            response: getEducation(),
          },
        ]);
        break;
      case "experience":
        setConversationList([
          ...conversationList,
          {
            prompt: getPromptString("experience", false),
            response: getProfessionalExperience(),
          },
        ]);
        break;
      case "projects":
        setConversationList([
          ...conversationList,
          {
            prompt: getPromptString("projects", false),
            response: getProjects(),
          },
        ]);
        break;
      case "echo":
        setConversationList([
          ...conversationList,
          {
            prompt: getPromptString("echo " + prompt.slice(1).join(" "), false),
            response: prompt.slice(1).join(" "),
          },
        ]);
        break;
      case "organizations":
        setConversationList([
          ...conversationList,
          {
            prompt: getPromptString("organizations", false),
            response: getOrganizations(),
          },
        ]);
        break;
      case "gameoflife":
        window.location.href = "/#/gameoflife";
        break;
      case "sudoku":
        window.location.href = "/#/sudoku";
        break;
      case "":
        setConversationList([
          ...conversationList,
          { prompt: getPromptString(" ", false), response: "" },
        ]);
        break;
      default:
        setConversationList([
          ...conversationList,
          {
            prompt: getPromptString(prompt[0], false),
            response: (
              <div style={{ color: "red" }}>
                Command <b>{prompt[0]}</b> not found
              </div>
            ),
          },
        ]);
        break;
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setPrompt("");
    var prompt = event.target.prompt.value;
    applyPrompt(prompt.split(" "));
    event.target.prompt.value = "";
  };

  return (
    <div className="App color-prompt-white">
      <div>
        {conversationList.map((conversation, index) => {
          return (
            <div key={index}>
              <div className="prompt"> {conversation.prompt}</div>
              <div className="response">{conversation.response}</div>
            </div>
          );
        })}
      </div>
      <form onSubmit={onFormSubmit}>
        {getPromptString(prompt)}
        <input
          type="text"
          autoFocus
          name="prompt"
          id="prompt"
          style={{ opacity: 0 }}
          autoComplete="off"
          onChange={(e) => setPrompt(e.target.value)}
        />
      </form>
      <div ref={messageEndRef} />
    </div>
  );
};

export default Home;
