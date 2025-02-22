import { mount } from "svelte";
import "./index.css";
import App from "./App.svelte";
import "abortcontroller-polyfill";

const app = mount(App, {
  target: document.getElementById("root"),
});

export default app;
