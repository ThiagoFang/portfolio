import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";
import { ScrollUpArrow } from "./components/common/ScrollUpArrow";
import { MainRoutes } from "./MainRoutes";

const App = () => {
  return (
    <>
      <Header />
      <ScrollUpArrow />
      <MainRoutes />
      <Footer />
    </>
  );
};

export default App;
