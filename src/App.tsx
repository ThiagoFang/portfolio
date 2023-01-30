import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollUpArrow } from "./components/common/ScrollUpArrow";
import { MainRoutes } from "./MainRoutes";
import { Configurations } from "./components/common/Configurations";
const App = () => {
  return (
    <>
      <Configurations />
      <Header />
      <ScrollUpArrow />
      <MainRoutes />
      <Footer />
    </>
  );
};

export default App;
