import { useRoutes } from "react-router-dom";
import { Home } from "./pages/home";
import { Project } from "./pages/Project";
import { Projects } from "./pages/Projects";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <div>About</div> },
    { path: "/projects", element: <Projects /> },
    { path: "/projects/:project", element: <Project /> },
    { path: "/art", element: <div>art</div> },
    { path: "/contact", element: <div>contact</div> },
  ]);
};
