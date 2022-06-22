import {
  Css3,
  Github,
  Html5,
  Javascript,
  ReactLogo,
} from "@styled-icons/boxicons-logos";
import { Terminal } from "@styled-icons/boxicons-regular";
import { Ruby } from "@styled-icons/octicons";
import {
  Adobeaftereffects,
  Adobeillustrator,
  Adobephotoshop,
  Adobepremierepro,
  Bulma,
  Vite,
} from "@styled-icons/simple-icons";

export const categories = [
  {
    id: 1,
    name: "Ruby Projects",
    path: "Ruby",
    bgcolor: "#fad2e1",
    icon: <Ruby />,
  },
  {
    id: 2,
    name: "Javascript Projects",
    path: "Javascript",
    bgcolor: "#fff1e6",
    icon: <Javascript />,
  },
  {
    id: 3,
    name: "React Projects",
    path: "React",
    bgcolor: "#dfe7fd",
    icon: <ReactLogo />,
  },
  {
    id: 4,
    name: "Graphic Design",
    path: "Design",
    bgcolor: "#eae4e9",
    icon: <Adobeillustrator />,
  },
];
const bg = "#e6ecf2";
export const projects = [
  {
    id: 1,
    lang: ["ruby"],
    name: "CalenCLI",
    description:
      "CalenCLI is a calendar on a command-line interface 💻 made with ruby",
    image:
      "https://github.com/Mhatw/Blog-website/blob/main/src/calencli.PNG?raw=true",
    url: "https://github.com/Mhatw/CalenCLI",
    icons: [<Terminal />, <Ruby />, <Github />],
    tags: ["Control Flow", "Loops", "Methods", "Dates"],
    bgcolor: bg,
  },
  {
    id: 2,
    lang: ["ruby"],
    name: "Pokemon Ruby",
    description:
      "This project consists to build a very close recreation of the classic Pokemon game.",
    image:
      "https://github.com/Mhatw/Blog-website/blob/main/src/pok.PNG?raw=true",
    url: "https://github.com/Mhatw/Pokemon-Ruby",
    icons: [<Terminal />, <Ruby />, <Github />],
    tags: ["Clases", "Modules", "Inheritance"],
    bgcolor: bg,
  },
  {
    id: 3,
    lang: ["ruby"],
    name: "CLIn Boards",
    description:
      "With CLIn Boards you can create as many Boards as you like. Each board can have as many lists and each list as many cards as you want. 💪🏼Your data is locally stored so don't worry about losing any board update. 🎉",
    image:
      "https://github.com/Mhatw/Blog-website/blob/main/src/clin.PNG?raw=true",
    url: "https://github.com/Mhatw/CLIn-Boards",
    icons: [<Terminal />, <Ruby />, <Github />],
    tags: ["File Manipulation", "Clases", "JSON"],
    bgcolor: bg,
  },
  {
    id: 4,
    lang: ["ruby"],
    name: "Expensable CLI",
    description:
      "Expensable is an expense/income tracker app that exposes an API to allow the developer to freely build their own interfaces to interact with the app data",
    image:
      "https://github.com/Mhatw/Blog-website/blob/main/src/expensable.PNG?raw=true",
    url: "https://github.com/Mhatw/Expensable-CLI",
    icons: [<Terminal />, <Ruby />, <Github />],
    tags: ["HTTP Requests", "Classes", "Modules"],
    bgcolor: bg,
  },
  {
    id: 5,
    lang: ["ruby"],
    name: "CLIvia Generator",
    description:
      "CLIvia generator is a game connect with an API which asks you questions and saves the score of your correct answers.",
    image:
      "https://github.com/Mhatw/CLIvia-generator/blob/main/clivia.PNG?raw=true",
    url: "https://github.com/Mhatw/Expensable-CLI",
    icons: [<Terminal />, <Ruby />, <Github />],
    tags: ["HTTP Requests", "Classes", "Modules"],
    bgcolor: bg,
  },
  {
    id: 6,
    lang: ["javascript"],
    name: "Organizable",
    description:
      "Keep track of all your projects and task with this app, application: organizable",
    image:
      "https://github.com/Mhatw/organizable/blob/main/assets/organizable.png?raw=true",
    url: "https://organizable.vercel.app/",
    icons: [<Javascript />, <Html5 />, <Css3 />, <Bulma />, <Github />],
    tags: ["Funtions", "Objects", "Logins"],
    bgcolor: bg,
  },
  {
    id: 7,
    lang: ["javascript"],
    name: "Contacts",
    description:
      "Keep track of contact emails and phone numbers in your local memory (your brain) is something from the past.",
    image: "https://github.com/Mhatw/Contacts/blob/main/capture.png?raw=true",
    url: "https://contacts-ruby.vercel.app/",
    icons: [<Javascript />, <Html5 />, <Css3 />, <Bulma />, <Github />],
    tags: ["Funtions", "Objects", "Logins"],
    bgcolor: bg,
  },
  {
    id: 8,
    lang: ["javascript"],
    name: "To Do List",
    description:
      "Hi, this is my version of Todo I use HTML, some CSS, Bulma, and Js to make this little project",
    image: "https://github.com/Mhatw/todoList-js/blob/main/todo.jpg?raw=true",
    url: "https://mhatw-todo-list.vercel.app/",
    icons: [<Javascript />, <Html5 />, <Css3 />, <Bulma />, <Github />],
    tags: ["LocalStorage", "Objets", "Render"],
    bgcolor: bg,
  },
  {
    id: 9,
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
    bgcolor: bg,
  },
  {
    id: 10,
    lang: ["design"],
    name: "LBS Flores",
    description:
      "The brand was made for a construction company. The brand was made with Adobe Illustrator and Adobe Photoshop.",
    image:
      "http://drive.google.com/uc?export=view&id=1Ri4TW-bTZwkmntyPjYNENZ72QCNGz9Ap",
    url: "https://drive.google.com/file/d/1y9z5VV168bxjlSMYttstbORk-ALP8KNJ/view?usp=sharing",
    icons: [<Adobeillustrator />, <Adobephotoshop />],
    tags: ["Color Theory", "Vectors", "Mockups", "Compositions"],
    bgcolor: bg,
  },
  {
    id: 11,
    lang: ["design"],
    name: "El Guapo Burguer",
    description:
      "The brand was made for a fastfood restaurant. The brand was made with Adobe Illustrator and Adobe Photoshop.",
    image:
      "http://drive.google.com/uc?export=view&id=1dhXXKwRvtQ2VP27ONM_e0pOUsMBVjOAf",
    url: "https://drive.google.com/file/d/1OQdbndsOnlAJNqInoqnIEPEulFbdurKi/view?usp=sharing",
    icons: [<Adobeillustrator />, <Adobephotoshop />],
    tags: ["Color Theory", "Vectors", "Mockups", "Compositions"],
    bgcolor: bg,
  },
  {
    id: 12,
    lang: ["design"],
    name: "MS constructora",
    description:
      "The brand was made for a general services company. The brand was made with Adobe Illustrator and Adobe Photoshop.",
    image:
      "http://drive.google.com/uc?export=view&id=1mBr5BExn-mP7NipMrpnOHDgfrjQ_C2lW",
    url: "https://drive.google.com/file/d/1uBK6OGPEoveMWZlNXCpKVO40kfXHnSYl/view?usp=sharing",
    icons: [<Adobeillustrator />, <Adobephotoshop />],
    tags: ["Color Theory", "Vectors", "Mockups", "Compositions"],
    bgcolor: bg,
  },
  {
    id: 13,
    lang: ["design"],
    name: "Fashion and Style Vision",
    description:
      "The brand was made for a textil company. The brand was made with Adobe Illustrator and Adobe Photoshop.",
    image:
      "http://drive.google.com/uc?export=view&id=1UMKW0k2Xpi5hG7qH4dDgc3ddrieSVqb9",
    url: "https://drive.google.com/file/d/1q4EAsdICO2KA7pMu0WjDCG2gdTdB0HWg/view?usp=sharing",
    icons: [<Adobeillustrator />, <Adobephotoshop />],
    tags: ["Color Theory", "Vectors", "Mockups", "Compositions"],
    bgcolor: bg,
  },
  {
    id: 14,
    lang: ["design"],
    name: "More designs here!",
    description:
      "You can find more designs here. You can also contact me to make a new design.",
    image:
      "http://drive.google.com/uc?export=view&id=1F3fc8rp6rh-B1sj2YagQTCy9rcJ_XWmR",
    url: "https://drive.google.com/drive/folders/1eBVk_v2F8Z4QvxLVhEzer8el7oSIHaVV?usp=sharing",
    icons: [
      <Adobeillustrator />,
      <Adobephotoshop />,
      <Adobepremierepro />,
      <Adobeaftereffects />,
    ],
    tags: ["Color Theory", "Vectors", "Mockups", "Compositions"],
    bgcolor: bg,
  },
];
