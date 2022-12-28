import ReactDOM from "react-dom/client";
import App from "./App";
import { ColorProvider } from "./components/common/ColorProvider";
import { ContextProviders } from "./components/common/ContextProviders/ContextProviders";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ContextProviders>
    <ColorProvider>
      <App />
    </ColorProvider>
  </ContextProviders>
);
