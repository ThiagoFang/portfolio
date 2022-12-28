import { useRoutes } from "react-router-dom";

export const MainRoutes = () => {
  return useRoutes ([
    {path: "/", element: <div>Home</div>},
    {path: "/about", element: <div>About</div>},
    {path: "/projects", element: <div>projetos</div>},
  ]);
};