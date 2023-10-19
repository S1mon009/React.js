import "./_themes.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { themeActions } from "./store/store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Main from "./pages/main/main";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Add from "./pages/add/add";
import Recipe from "./pages/recipe/recipe";
import Edit from "./pages/edit/edit";
import Error from "./pages/error/error";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Register from "./pages/register/register";
import { getUserRecipies } from "./supabase/data";
const router = createBrowserRouter([
  { path: "/", element: <Main />, errorElement: <Error /> },
  {
    path: "login",
    element: <Login />,
    errorElement: <Error />,
  },
  { path: "register", element: <Register />, errorElement: <Error /> },
  {
    path: "dashboard",
    element: <Dashboard />,
    loader: getUserRecipies,
    children: [
      { path: "add", element: <Add /> },
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
