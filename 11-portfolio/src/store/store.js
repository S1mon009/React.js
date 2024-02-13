import { createSlice, configureStore } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    currentLanguageIndex: 0,
    links: [
      [
        { text: "Dashboard", href: "/" },
        { text: "Portfolio", href: "portfolio" },
        { text: "About me", href: "about-me" },
        { text: "Contact", href: "contact" },
      ],
      [
        { text: "Panel główny", href: "/" },
        { text: "Portfolio", href: "portfolio" },
        { text: "O mnie", href: "about-me" },
        { text: "Kontakt", href: "contact" },
      ],
    ],
    pages: {
      dashboard: {
        section1: {
          leftSide: {
            mainTitle: {
              firstH1: ["I am", "Jestem"],
              secondH1: [
                "Front-end",
                2000,
                "Back-end",
                2000,
                "Fullstack",
                2000,
              ],
              thirdH1: ["Developer", "Deweloperem"],
              fourthH1: [
                "I am a freelancer and student specializing in web development",
                "Jestem freelancerem oraz studentem specjalizującym się w web dewelopingu",
              ],
              button: ["See more", "Zobacz więcej"],
            },
          },
        },
        section2: {
          leftSide: {
            paragraph1: {
              part1: ["What can ", "Co mogę "],
              part2: ["I do ", "zrobić "],
              part3: ["for you?", "dla ciebie?"],
            },
            paragraph2: {
              part1: [
                "Ready to use applications and website components for commercial use.",
                "Gotowe do użycia aplikacje i komponenty stron internetowych do użytku komercyjnego.",
              ],
              part2: [" Material UI ", " Interfejs użytkownika "],
              part3: [
                `is beautiful by
              design and features a suite of customization options for you needs.`,
                "jest pięknie zaprojektowany i oferuje pakiet opcji dostosowywania do Twoich potrzeb.",
              ],
            },
            paragraph3: {
              part1: ["Finished projects", "Ukończonych projektów"],
              part2: ["Years of experience", "Lat doświadczenia"],
            },
          },
        },
      },
    },
  },
  reducers: {
    // changeLanguage(state) {
    //   if (state.currentLanguageIndex === 0) {
    //     state.currentLanguageIndex = 1;
    //     localStorage.setItem("languageIndex", 1);
    //   } else {
    //     state.currentLanguageIndex = 0;
    //     localStorage.setItem("languageIndex", 0);
    //   }
    // },
    setLanguage(state, action) {
      state.currentLanguageIndex = action.payload;
      localStorage.setItem("languageIndex", action.payload);
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
const projectsSlice = createSlice({
  name: "projects",
  initialState: [
    {
      repository: "HTML-CSS-Bootstrap",
      repositoryHref: "https://github.com/S1mon009/HTML-CSS-Bootstrap",
      projects: [
        {
          id: 0,
          title: "Hamburger icon",
          href: "https://github.com/S1mon009/HTML-CSS-Bootstrap/tree/main/01-hamburger-icon",
          imageHref:
            "https://github.com/S1mon009/HTML-CSS-Bootstrap/assets/105738321/e3b2d6ac-24a9-4b40-a77b-5342dbecf968",
          languages: ["HTML", "CSS"],
          description: `My Hamburger was created using HTML and CSS, you can use it as you wish and it's free for personal or commercial use.`,
          created: "2023-07-17",
        },
        {
          id: 1,
          title: "Responsive navbar",
          href: "https://github.com/S1mon009/HTML-CSS-Bootstrap/tree/main/02-responsive-navbar",
          imageHref:
            "https://github.com/S1mon009/HTML-CSS-Bootstrap/assets/105738321/b0ec1fa1-9d1f-466e-9566-47dd17405d12",
          languages: ["HTML", "CSS"],
          description: `My Navbar was created using HTML and CSS, you can use it as you wish and it's free for personal or commercial use.`,
          created: "2023-07-17",
        },
        {
          id: 2,
          title: "Old button effect",
          href: "https://github.com/S1mon009/HTML-CSS-Bootstrap/blob/main/03-old-button-effect",
          imageHref:
            "https://github.com/S1mon009/HTML-CSS-Bootstrap/assets/105738321/15952da8-6922-4183-81f8-6761df8bc792",
          languages: ["HTML", "CSS"],
          description: `My Button was created using HTML and CSS, you can use it as you wish and it's free for personal or commercial use.`,
          created: "2023-07-17",
        },
        {
          id: 3,
          title: "Loading animation v1",
          href: "https://github.com/S1mon009/HTML-CSS-Bootstrap/tree/main/04-loading-animation-v1",
          imageHref:
            "https://github.com/S1mon009/HTML-CSS-Bootstrap/assets/105738321/5198d2bb-5d94-4457-9eb6-6bcb9cacc9d4",
          languages: ["HTML", "CSS"],
          description: `My Loading Animation was created using HTML and CSS, you can use it as you wish and it's free for personal or commercial use.`,
          created: "2023-07-17",
        },
        {
          id: 4,
          title: "Loading animation v2",
          href: "https://github.com/S1mon009/HTML-CSS-Bootstrap/tree/main/05-loading-animation-v2",
          imageHref:
            "https://github.com/S1mon009/HTML-CSS-Bootstrap/assets/105738321/e8850516-1902-4a27-81fe-71b1897da4b1",
          languages: ["HTML", "CSS"],
          description: `My Loading Animation was created using HTML and CSS, you can use it as you wish and it's free for personal or commercial use.`,
          created: "2023-07-17",
        },
        {
          id: 5,
          title: "Loading animation with counter",
          href: "https://github.com/S1mon009/HTML-CSS-Bootstrap/tree/main/06-loading-animation-with-counter",
          imageHref:
            "https://github.com/S1mon009/HTML-CSS-Bootstrap/assets/105738321/405449eb-0001-4497-bff1-d4af90417ae4",
          languages: ["HTML", "CSS"],
          description: `My Loading Animation was created using HTML and CSS, you can use it as you wish and it's free for personal or commercial use.`,
          created: "2023-07-17",
        },
        {
          id: 6,
          title: "Input animation",
          href: "https://github.com/S1mon009/HTML-CSS-Bootstrap/tree/main/07-input-animation",
          imageHref:
            "https://github.com/S1mon009/HTML-CSS-Bootstrap/assets/105738321/e5c64f3e-fac9-4c13-b31c-2a08c62ac53a",
          languages: ["HTML", "CSS"],
          description: `My Input Animation was created using HTML and CSS, you can use it as you wish and it's free for personal or commercial use.`,
          created: "2023-07-17",
        },
        {
          id: 7,
          title: "Flip card",
          href: "https://github.com/S1mon009/HTML-CSS-Bootstrap/tree/main/08-flip-card",
          imageHref:
            "https://github.com/S1mon009/HTML-CSS-Bootstrap/assets/105738321/29f8f5af-54c4-46d7-90c9-29db72b9ba29",
          languages: ["HTML", "CSS"],
          description: `My Flip Card was created using HTML and CSS, you can use it as you wish and it's free for personal or commercial use.`,
          created: "2023-07-17",
        },
        {
          id: 8,
          title: "Switch button",
          href: "https://github.com/S1mon009/HTML-CSS-Bootstrap/tree/main/09-switch-button",
          imageHref:
            "https://github.com/S1mon009/HTML-CSS-Bootstrap/assets/105738321/671645c0-7b76-40af-90e0-858e958555a0",
          languages: ["HTML", "CSS"],
          description: `My Switch Button was created using HTML and CSS, you can use it as you wish and it's free for personal or commercial use.`,
          created: "2023-07-17",
        },
        {
          id: 9,
          title: "Wave button effect",
          href: "https://github.com/S1mon009/HTML-CSS-Bootstrap/tree/main/10-wave-button-effect",
          imageHref:
            "https://github.com/S1mon009/HTML-CSS-Bootstrap/assets/105738321/adf0b42d-1044-48d2-aa70-a55b6296c619",
          languages: ["HTML", "CSS"],
          description: `My Wave Button was created using HTML nad CSS, you can use it as you wish and it's free for personal or commercial use.`,
          created: "2023-07-17",
        },
        {
          id: 10,
          title: "Text wave effect",
          href: "https://github.com/S1mon009/HTML-CSS-Bootstrap/edit/main/11-text-wave-effect",
          imageHref:
            "https://github.com/S1mon009/HTML-CSS-Bootstrap/assets/105738321/03503e6f-753d-4e70-9252-5cb1b3c275b8",
          languages: ["HTML", "CSS"],
          description: `My Text Animation was created using HTML and CSS, you can use it as you wish and it's free for personal or commercial use.`,
          created: "2023-07-17",
        },
        {
          id: 11,
          title: "Text animation",
          href: "https://github.com/S1mon009/HTML-CSS-Bootstrap/tree/main/12-text-animation",
          imageHref:
            "https://github.com/S1mon009/HTML-CSS-Bootstrap/assets/105738321/1c80289e-ba1c-4af9-bfe7-961f46b1f074",
          languages: ["HTML", "CSS"],
          description: `My Text Animation was created using HTML and CSS, you can use it as you wish and it's free for personal or commercial use.`,
          created: "2023-07-17",
        },
        {
          id: 12,
          title: "Button border hover effect",
          href: "https://github.com/S1mon009/HTML-CSS-Bootstrap/tree/main/13-button-border-hover-effect",
          imageHref:
            "https://github.com/S1mon009/HTML-CSS-Bootstrap/assets/105738321/6c81b81a-5f4f-4cab-a71e-684b6b1f2847",
          languages: ["HTML", "CSS"],
          description: `My Button Effect was created using HTML and CSS, you can use it as you wish and it's free for personal or commercial use.`,
          created: "2023-07-17",
        },
        {
          id: 13,
          title: "Neon button effect v1",
          href: "https://github.com/S1mon009/HTML-CSS-Bootstrap/tree/main/14-neon-button-effect-v1",
          imageHref:
            "https://github.com/S1mon009/HTML-CSS-Bootstrap/assets/105738321/5fa73c1a-f7b6-4f6b-bfd4-86a2dd226a32",
          languages: ["HTML", "CSS"],
          description: `My Button Effect was created using HTML and CSS, you can use it as you wish and it's free for personal or commercial use.`,
          created: "2023-07-17",
        },
        {
          id: 14,
          title: "Neon button effect v2",
          href: "https://github.com/S1mon009/HTML-CSS-Bootstrap/tree/main/15-neon-button-effect-v2",
          imageHref:
            "https://github.com/S1mon009/HTML-CSS-Bootstrap/assets/105738321/9807d233-3af9-4218-b447-14535d3f5cb4",
          languages: ["HTML", "CSS"],
          description: `My Button Effect was created using HTML and CSS, you can use it as you wish and it's free for personal or commercial use.`,
          created: "2023-07-17",
        },
        {
          id: 15,
          title: "Switch on off",
          href: "https://github.com/S1mon009/HTML-CSS-Bootstrap/tree/main/16-switch-on-off",
          imageHref:
            "https://github.com/S1mon009/HTML-CSS-Bootstrap/assets/105738321/3f86b77a-d2c7-4b74-ac3e-d34372b18cb5",
          languages: ["HTML", "CSS"],
          description: `My switch button was created using HTML and CSS, you can use it as you wish and it's free for personal or commercial use.`,
          created: "2023-07-17",
        },
        {
          id: 16,
          title: "Search bar animation (Bootstrap)",
          href: "https://github.com/S1mon009/HTML-CSS-Bootstrap/tree/main/17-search-bar-animation%20(Bootstrap)",
          imageHref:
            "https://github.com/S1mon009/HTML-CSS-Bootstrap/assets/105738321/c64a1b57-c809-4f2e-904e-06d92d099123",
          languages: ["HTML", "CSS", "Bootstrap"],
          description: `My Search Bar was created using Bootstrap 5, you can use it as you wish and it's free for personal or commercial use.`,
          created: "2023-07-17",
        },
        {
          id: 17,
          title: "Socials",
          href: "https://github.com/S1mon009/HTML-CSS-Bootstrap/tree/main/18-socials",
          imageHref:
            "https://github.com/S1mon009/HTML-CSS-Bootstrap/assets/105738321/1522334c-b184-445b-8c4b-b77c5db6aca4",
          languages: ["HTML", "CSS"],
          description: `My Socials Icons was created using HTML and CSS, you can use it as you wish and it's free for personal or commercial use.`,
          created: "2023-07-17",
        },
        {
          id: 18,
          title: "Glitch text effect (Bootstrap)",
          href: "https://github.com/S1mon009/HTML-CSS-Bootstrap/tree/main/19-glitch-text-effect%20(Bootstrap)",
          imageHref:
            "https://github.com/S1mon009/HTML-CSS-Bootstrap/assets/105738321/df75e2a3-13ba-4889-8771-cb83e02cc413",
          languages: ["HTML", "CSS", "Bootstrap"],
          description: `My Glitch Text Effect was created using Bootstrap 5, you can use it as you wish and it's free for personal or commercial use.`,
          created: "2023-07-17",
        },
      ],
    },
  ],
});
const store = configureStore({
  reducer: {
    language: languageSlice.reducer,
    mode: modeSlice.reducer,
    projects: projectsSlice.reducer,
  },
});

export const languageActions = languageSlice.actions;
export const modeActions = modeSlice.actions;
export default store;
