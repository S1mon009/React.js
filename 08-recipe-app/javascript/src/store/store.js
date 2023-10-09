import { createSlice, configureStore } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "",
  },
  reducers: {
    toggleTheme(state, action) {
      if (action.payload) {
        state.theme = action.payload;
      } else {
        state.theme = state.theme === "" ? "theme-dark" : "";
      }
    },
  },
});
const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
  },
  reducers: {
    setRecipes(state, action) {
      state.recipes.push(action.payload);
    },
    deleteRecipe(state, action) {
      state.recipes.slice(action.payload, 1);
    },
  },
});

const store = configureStore({
  reducer: { theme: themeSlice.reducer, recipes: recipesSlice.reducer },
});

export const themeActions = themeSlice.actions;
export const recipesActions = recipesSlice.actions;
export default store;
