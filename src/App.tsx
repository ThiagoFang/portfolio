import { Header } from "./components/common/Header";
import { MainRoutes } from "./MainRoutes";


const App = () => {
  return(
    <>
      <Header />
      <MainRoutes />
      <div>Footer</div>
    </>
  );
};

export default App;