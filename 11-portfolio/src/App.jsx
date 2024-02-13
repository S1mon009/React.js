import { useMemo, useEffect, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// const Header = lazy(() => import("./components/header/header"));
import Dashboard from "./pages/dashboard/dashboard";
import { useSelector, useDispatch } from "react-redux";
import { languageActions, modeActions } from "./store/store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      let Header = await import("./components/header/header");
      return { Component: Header.default };
    },
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "portfolio",
        async lazy() {
          let Portfolio = await import("./pages/portfolio/portfolio");
          return { Component: Portfolio.default };
        },
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
  const mode = useSelector((state) => state.mode.mode);
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
    const localLanguageIndex = localStorage.getItem("languageIndex");

    if (localMode) {
      dispatch(modeActions.setMode(localMode));
    } else if (!localMode) {
      localStorage.setItem("mode", "light");
      dispatch(modeActions.setMode("light"));
    }
    if (localLanguageIndex) {
      dispatch(languageActions.setLanguage(localLanguageIndex));
    } else if (!localLanguageIndex) {
      localStorage.setItem("languageIndex", 0);
      dispatch(languageActions.setLanguage(0));
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
