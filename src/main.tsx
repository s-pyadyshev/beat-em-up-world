import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "./assets/styles/index.scss";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
    <StrictMode>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </StrictMode>
);
