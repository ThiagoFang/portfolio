import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
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
