import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollUpArrow } from "./components/common/ScrollUpArrow";
import { MainRoutes } from "./MainRoutes";
import { AnimatedRoutes } from "./animatedRoutes";

const App = () => {
  return (
    <>
      <Header />
      <ScrollUpArrow />
      <AnimatedRoutes />
      <Footer />
    </>
  );
};

export default App;
