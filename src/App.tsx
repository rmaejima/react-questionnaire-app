import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { Home } from "pages/Home";
import { Question1 } from "pages/Question1";
import { Question2 } from "pages/Question2";
import { Question3 } from "pages/Question3";
import { Result } from "pages/Result";
import { NotFound } from "pages/NotFound";
import { ScoreProvider } from "contexts/ScoreProvider";

export const App: React.VFC = () => {
  return (
    <ScoreProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/q1" exact component={Question1} />
          <Route path="/q2" exact component={Question2} />
          <Route path="/q3" exact component={Question3} />
          <Route path="/result" exact component={Result} />
          <Route path="/notFound" exact component={NotFound} />
          <Redirect to="/notFound" />
        </Switch>
      </BrowserRouter>
    </ScoreProvider>
  );
};
