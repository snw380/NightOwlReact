import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import Nav from "./components/NavBar/NavBar";
import NoMatch from "./pages/NoMatch";
import "./App.css"

function App() {
  return (
    <Router>
      <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/members" component={HomePage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route component={NoMatch} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
