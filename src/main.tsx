import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

requestAnimationFrame(() => {
  const boot = document.getElementById("boot");
  if (!boot) return;
  boot.classList.add("fade-out");
  setTimeout(() => boot.remove(), 400);
});
