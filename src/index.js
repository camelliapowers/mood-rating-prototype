import React from "react";
import { render } from "react-dom";
import {Main} from "./components/Main";
 
import {MainModel} from "./models/MainModel";

const store = new MainModel();

render(
  <div>
    <Main store={store} />
  </div>,
  document.getElementById("root")
);

store.currentPage = "landing";

// playing around in the console
window.store = store;
