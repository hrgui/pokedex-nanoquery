import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//const myStore = createStore();
// const countAtom = atom(0);

// myStore.set(countAtom, 1);
// window.counter = countAtom;
// window.store = myStore;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
