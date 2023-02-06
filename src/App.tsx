import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollUpArrow } from "./components/common/ScrollUpArrow";
import { MainRoutes } from "./MainRoutes";
import { Configurations } from "./components/common/Configurations";
import { ChooseLang } from "./components/common/ChooseLang";
const App = () => {
  return (
    <>
      <ChooseLang />
      <Configurations />
      <Header />
      <ScrollUpArrow />
      <MainRoutes />
      <Footer />
    </>
  );
};

export default App;
