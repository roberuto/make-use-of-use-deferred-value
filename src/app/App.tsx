import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./views/Home/Home";
import { Simple } from "./views/Simple/Simple";
import { Debounced } from "./views/Debounced/Debounced";
import { Deferred } from "./views/Deferred/Deferred";

import styles from "./App.module.css";

export const App = () => {
  return (
    <div className={styles.app}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/simple" component={Simple} />
        <Route path="/debounced" component={Debounced} />
        <Route path="/deffered" component={Deferred} />
      </Switch>
    </div>
  );
};
