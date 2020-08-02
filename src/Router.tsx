import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { Home } from "./Components/pages/Home";
import { About } from "./Components/pages/About";

export const Router = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/about" exact>
        <About />
      </Route>

      <Route path="/*" exact>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
