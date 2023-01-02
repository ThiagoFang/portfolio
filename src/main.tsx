import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ColorProvider } from "./components/common/Providers/ColorProvider";
import { ContextProviders } from "./components/common/Providers/ContextProviders/ContextProviders";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ContextProviders>
      <ColorProvider>
        <App />
      </ColorProvider>
    </ContextProviders>
  </BrowserRouter>
);
