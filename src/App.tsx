import type { Component } from "solid-js";
import { children } from "solid-js";
import { RouteSectionProps } from "@solidjs/router";
import { AppContextProvider } from "./lib/context";

const App: Component<RouteSectionProps<unknown>> = (props) => {

  return <AppContextProvider>{props.children}</AppContextProvider>;
};

export default App;
