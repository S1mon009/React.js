import { createSlice, configureStore } from "@reduxjs/toolkit";
import Logo from "../assets/logo-blue.svg";
import PortfolioSection1Image from "../assets/business-entrepreneurship-and-growth.png";

const contentSlice = createSlice({
  name: "content",
  initialState: {
    links: [
      { text: "Dashboard", href: "/" },
      { text: "Portfolio", href: "portfolio" },
      { text: "About me", href: "about-me" },
      { text: "Contact", href: "contact" },
    ],
    startYear: 2021,
    logo: Logo,
    github: "https://github.com/S1mon009",
    devCard: {
      src: "https://api.daily.dev/devcards/v2/QbIZWZ9QjwEON8mzmbenI.png?type=wide&r=1pc",
      alt: "Szymon Skałecki's Dev Card",
    },
    dashboard: {
      section1: {
        firstH1: "I am",
        secondH1: "Front-end",
        thirdH1: "Developer",
        firstH3: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "https://prod.spline.design/XFvUA1JiKwHfUbyP/scene.splinecode",
      },
      section2: {
        title: {
          part1: "What can ",
          part2: "I do",
          part3: " for you?",
        },
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, mollitia eveniet optio tenetur eligendi facilis illo omnis praesentium! Voluptatibus repudiandae molestiae consequuntur quidem, minus quis nostrum ducimus quam sint quasi.",
      },
      section3: {
        title: {
          part1: "Most ",
          part2: "used",
          part3: " technologies",
        },
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, mollitia eveniet optio tenetur eligendi facilis illo omnis praesentium! Voluptatibus repudiandae molestiae consequuntur quidem, minus quis nostrum ducimus quam sint quasi.",
        mostUsedTechnologies: [
          {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            name: "React.js",
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            name: "JavaScript",
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            name: "TypeScript",
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
            name: "Bootstrap",
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
            name: "Sass",
          },
        ],
      },
    },
    portfolio: {
      section1: {
        firstPartH1: "Welcome to my ",
        secondPartH1: "projects ",
        thirdPartH1: "showcase!",
        firstPartParagraph:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        secondPartParagraph:
          "Suscipit maiores cumque aliquam tempore exercitationem perspiciatis facere eligendi nam fugit, accusantium ea. Obcaecati, vel. Nisi, modi quibusdam rerum aperiam doloremque ducimus!",
        image: PortfolioSection1Image,
      },
      section2: {
        repositorySelectLabelName: "Repository",
        repositorySelectLabelValuesAndNames: [
          { value: "HTML-CSS-Bootstrap", name: "HTML-CSS-Bootstrap" },
          { value: "JavaScript", name: "JavaScript" },
          { value: "TypeScript", name: "TypeScript" },
          { value: "React.js", name: "React.js" },
        ],
      },
    },
    footer: {
      poweredBy: [
        {
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
          alt: "Material UI",
        },
        {
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          alt: "React.js",
        },
        {
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
          alt: "JavaScript",
        },
        {
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
          alt: "Bootstrap",
        },
        {
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
          alt: "Sass",
        },
      ],
    },
  },
});
const modeSlice = createSlice({
  name: "mode",
  initialState: {
    mode: "light",
  },
  reducers: {
    setMode(state, action) {
      state.mode = action.payload;
      localStorage.setItem("mode", action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    mode: modeSlice.reducer,
    content: contentSlice.reducer,
  },
});

export const modeActions = modeSlice.actions;
export default store;
