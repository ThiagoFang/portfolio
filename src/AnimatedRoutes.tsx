import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/home";
import { Projects } from "./pages/Projects";

import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/art" element={<Projects />} />
        <Route path="/contact" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
};
