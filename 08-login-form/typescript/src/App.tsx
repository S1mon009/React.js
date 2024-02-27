import Login from "./pages/login/login.tsx";
import Register from "./pages/register/register";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <Navigate to="/login" /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
