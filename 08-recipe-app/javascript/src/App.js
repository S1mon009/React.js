// import logo from "./logo.svg";
import "./_themes.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { themeActions } from "./store/store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Main from "./pages/main/main";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Recipe from "./pages/recipe/recipe";
import Edit from "./pages/edit/edit";
import Error from "./pages/error/error";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
const router = createBrowserRouter([
  { path: "/", element: <Main />, errorElement: <Error /> },
  {
    path: "login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: ":name",
        element: <Recipe />,
      },
      { path: "edit/:name", element: <Edit /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    localStorage.getItem("theme")
      ? dispatch(themeActions.toggleTheme(localStorage.getItem("theme")))
      : localStorage.setItem("theme", "");
  }, [dispatch]);
  useEffect(() => {
    theme === ""
      ? document.body.classList.remove("theme-dark")
      : document.body.classList.add("theme-dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  return <RouterProvider router={router} />;
}

export default App;
