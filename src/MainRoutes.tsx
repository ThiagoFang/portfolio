import { useRoutes } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe";
import { Arts } from "./pages/Arts";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/home";
import { Project } from "./pages/Project";
import { Projects } from "./pages/Projects";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <AboutMe /> },
    { path: "/projects", element: <Projects /> },
    { path: "/projects/:project", element: <Project /> },
    { path: "/art", element: <Arts /> },
    { path: "/contact", element: <Contact /> },
  ]);
};
