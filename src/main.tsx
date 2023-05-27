import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    {/* lets you find common bugs in your components early during development. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
