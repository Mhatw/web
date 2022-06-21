import { Css3, Github, Html5, Javascript } from "@styled-icons/boxicons-logos";
import { Terminal } from "@styled-icons/boxicons-regular";
import { Bulma, Ruby, Vite } from "@styled-icons/simple-icons";

export const categories = [
  { id: 1, name: "Ruby Projects", path: "Ruby", bgcolor: "#ced4da" },
  {
    id: 2,
    name: "Javascript Projects",
    path: "Javascript",
    bgcolor: "#dee2e6",
  },
  { id: 3, name: "React Projects", path: "React", bgcolor: "#e9ecef" },
  { id: 4, name: "Graphic Design", path: "Design", bgcolor: "#ced4da" },
];

export const projects = [
  {
    id: 1,
    lang: ["ruby"],
    name: "CalenCLI",
    description:
      "CalenCLI is a calendar on a command-line interface 💻 made with ruby",
    image: "https://via.placeholder.com/150",
    url: "https://github.com/Mhatw/CalenCLI",
    icons: [<Terminal />, <Ruby />, <Github />],
    tags: ["Control Flow", "Loops", "Methods", "Dates"],
    bgcolor: "#e6ecf2",
  },
  {
    id: 2,
    lang: ["ruby"],
    name: "Pokemon Ruby",
    description:
      "This project consists to build a very close recreation of the classic Pokemon game.",
    image: "https://via.placeholder.com/150",
    url: "https://github.com/Mhatw/Pokemon-Ruby",
    icons: [<Terminal />, <Ruby />, <Github />],
    tags: ["Clases", "Modules", "Inheritance"],
    bgcolor: "#e6ecf2",
  },
  {
    id: 3,
    lang: ["ruby"],
    name: "CLIn Boards",
    description:
      "With CLIn Boards you can create as many Boards as you like. Each board can have as many lists and each list as many cards as you want. 💪🏼Your data is locally stored so don't worry about losing any board update. 🎉",
    image: "https://via.placeholder.com/150",
    url: "https://github.com/Mhatw/CLIn-Boards",
    icons: [<Terminal />, <Ruby />, <Github />],
    tags: ["File Manipulation", "Clases", "JSON"],
    bgcolor: "#e6ecf2",
  },
  {
    id: 4,
    lang: ["ruby"],
    name: "Expensable CLI",
    description:
      "Expensable is an expense/income tracker app that exposes an API to allow the developer to freely build their own interfaces to interact with the app data",
    image: "https://via.placeholder.com/150",
    url: "https://github.com/Mhatw/Expensable-CLI",
    icons: [<Terminal />, <Ruby />, <Github />],
    tags: ["HTTP Requests", "Classes", "Modules"],
    bgcolor: "#e6ecf2",
  },
  {
    id: 5,
    lang: ["ruby"],
    name: "CLIvia Generator",
    description:
      "CLIvia generator is a game connect with an API which asks you questions and saves the score of your correct answers.",
    image: "https://via.placeholder.com/150",
    url: "https://github.com/Mhatw/Expensable-CLI",
    icons: [<Terminal />, <Ruby />, <Github />],
    tags: ["HTTP Requests", "Classes", "Modules"],
    bgcolor: "#e6ecf2",
  },
  {
    id: 6,
    lang: ["javascript"],
    name: "Contacts",
    description:
      "Keep track of contact emails and phone numbers in your local memory (your brain) is something from the past.",
    image: "https://github.com/Mhatw/Contacts/blob/main/capture.png?raw=true",
    url: "https://contacts-ruby.vercel.app/",
    icons: [<Javascript />, <Html5 />, <Css3 />, <Bulma />, <Github />],
    tags: ["Funtions", "Objects", "Logins"],
    bgcolor: "#e6ecf2",
  },
  {
    id: 7,
    lang: ["javascript"],
    name: "To Do List",
    description:
      "Hi, this is my version of Todo I use HTML, some CSS, Bulma, and Js to make this little project",
    image: "https://github.com/Mhatw/todoList-js/blob/main/todo.jpg?raw=true",
    url: "https://mhatw-todo-list.vercel.app/",
    icons: [<Javascript />, <Html5 />, <Css3 />, <Bulma />, <Github />],
    tags: ["LocalStorage", "Objets", "Render"],
    bgcolor: "#e6ecf2",
  },
  {
    id: 8,
    lang: ["javascript"],
    name: "Code Editor",
    description:
      "This is a little project that recreate a code editor online With this editor you will be able to type html, css and javascript code and see the result of this code.",
    image: "https://github.com/Mhatw/codeEditor/blob/main/capture.png?raw=true",
    url: "https://mhatw-code-editor.vercel.app/",
    icons: [
      <Javascript />,
      <Html5 />,
      <Css3 />,
      <Bulma />,
      <Github />,
      <Vite />,
    ],
    tags: ["Vite Framework", "InnerHtml", "DOM", "Events"],
    bgcolor: "#e6ecf2",
  },
];
