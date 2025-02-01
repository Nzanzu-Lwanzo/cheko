/* @refresh reload */
import { render } from "solid-js/web";
import "./lib/global.css";
import App from "./App";
import { Router, Route } from "@solidjs/router";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import PostJokeFormPage from "./pages/PostJokeFormPage";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router root={App}>
      <Route path="/" component={HomePage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/post-a-joke" component={PostJokeFormPage} />
    </Router>
  ),
  root!
);
