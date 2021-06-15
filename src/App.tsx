import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { Home } from "pages/Home";
import { Question1 } from "pages/Question1";
import { NotFound } from "pages/NotFound";

export const App: React.VFC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/q1" exact component={Question1} />
        <Route path="/notFound" exact component={NotFound} />
        <Redirect to="/notFound" />
      </Switch>
    </BrowserRouter>
  );
};
