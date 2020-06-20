import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Login, SignUp } from "./pages";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={props => <Home />} />
      <Route exact path="/login" render={props => <Login/>}/>
      <Route exact path="/signup" render={props => <SignUp/>}/>
    </Switch>
  );
}

export default App;
