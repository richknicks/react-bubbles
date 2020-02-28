import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./utils/PrivateRoute.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute exact path="/colors" component={BubblePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
