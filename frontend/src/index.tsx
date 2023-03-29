import App from './App';
import './styles/main.css';
import reportWebVitals from "./reportWebVitals";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

// Check that the rootElement is not null
if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

reportWebVitals();