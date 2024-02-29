import { useMemo, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { modeActions } from "./store/store";
import { fetchProjects } from "./util/http";
import { queryClient } from "./util/http.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      let Header = await import("./components/header/header");
      return { Component: Header.default };
    },
    children: [
      {
        index: true,
        async lazy() {
          let Dashboard = await import("./pages/dashboard/dashboard");
          return { Component: Dashboard.default };
        },
      },
      {
        path: "portfolio",
        async lazy() {
          let Portfolio = await import("./pages/portfolio/portfolio");
          return { Component: Portfolio.default };
        },
        loader: fetchProjects,
      },
      {
        path: "about-me",
        async lazy() {
          let AboutMe = await import("./pages/about_me/aboutMe");
          return { Component: AboutMe.default };
        },
      },
      {
        path: "contact",
        async lazy() {
          let Contact = await import("./pages/contact/contact");
          return { Component: Contact.default };
        },
      },
    ],
  },
]);
function App() {
  const dispatch = useDispatch();
  const { mode } = useSelector(
    createSelector(
      (mode) => {
        return mode.mode;
      },
      (content) => {
        return content;
      }
    )
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );

  useEffect(() => {
    const localMode = localStorage.getItem("mode");

    if (localMode) {
      dispatch(modeActions.setMode(localMode));
    } else if (!localMode) {
      localStorage.setItem("mode", "light");
      dispatch(modeActions.setMode("light"));
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;