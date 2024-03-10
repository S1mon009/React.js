import { createBrowserRouter } from "react-router-dom";
import { fetchProjects } from "../util/http";

const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      let Header = await import("../components/header/header");
      return { Component: Header.default };
    },
    children: [
      {
        index: true,
        async lazy() {
          let Dashboard = await import("../pages/dashboard/dashboard");
          return { Component: Dashboard.default };
        },
      },
      {
        path: "portfolio",
        async lazy() {
          let Portfolio = await import("../pages/portfolio/portfolio");
          return { Component: Portfolio.default };
        },
        loader: fetchProjects,
      },
      {
        path: "about-me",
        async lazy() {
          let AboutMe = await import("../pages/about_me/aboutMe");
          return { Component: AboutMe.default };
        },
      },
      {
        path: "contact",
        async lazy() {
          let Contact = await import("../pages/contact/contact");
          return { Component: Contact.default };
        },
      },
    ],
  },
]);

export default router;
