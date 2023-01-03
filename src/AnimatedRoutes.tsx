import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/home";
import { Projects } from "./pages/Projects";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/art" element={<Projects />} />
      <Route path="/contact" element={<Projects />} />
    </Routes>
  );
};
