import { useMemo, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { modeActions } from "./store/store";
import { queryClient } from "./util/http.js";
import router from "./router/router.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const mode = useSelector(
    createSelector(
      (mode) => {
        return mode.mode.mode;
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
