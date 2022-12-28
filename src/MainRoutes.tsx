import { useRoutes } from "react-router-dom";
import { Home } from "./pages/home";

export const MainRoutes = () => {
  return useRoutes ([
    {path: "/", element: <Home />},
    {path: "/about", element: <div>About</div>},
    {path: "/projects", element: <div>projetos</div>},
  ]);
};