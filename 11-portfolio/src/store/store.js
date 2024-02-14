import { createSlice, configureStore } from "@reduxjs/toolkit";

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
    github: "https://github.com/S1mon009",
    dashboard: {
      section1: {
        firstH1: "I am",
        secondH1: "Front-end",
        thirdH1: "Developer",
        firstH3: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
