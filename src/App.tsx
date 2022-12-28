import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainRoutes } from "./MainRoutes";


const App = () => {
  return(
    <>
      <div>Header</div>
      <MainRoutes />
      <div>Footer</div>
    </>
  );
};

export default App;