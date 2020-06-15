import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={props => <Home />} />
    </Switch>
  );
}

export default App;
