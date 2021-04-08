import React from 'react'
import { Switch, Route } from 'react-router-dom';

import { Home, Sobre, Portfolio, Tecnologias, Contato, NotFound } from './pages';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/sobre">
        <Sobre />
      </Route>

      <Route exact path="/portfolio">
        <Portfolio />
      </Route>

      <Route exact path="/tecnologias">
        <Tecnologias />
      </Route>

      <Route exact path="/contato">
        <Contato />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
