import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { App } from "./app/App";
import * as serviceWorker from "./serviceWorker";
import { RenderLagContextController } from "./context/RenderLagController";

const rootElement = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootElement).render(
  <RenderLagContextController>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RenderLagContextController>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
