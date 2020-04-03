import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import MapEvent from "./Components/MapEvent";
import Documentation from "./Components/Documentation";

function App() {
  return (
    <Router basename={"/myweather"}>
      <div className="App">
        {/* Navbar with link of landing page, demo site and documentation */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            MyWeather
          </Link>
          <div className="" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/doc">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* Routes of demo and documentation */}
        <Switch>
          <Route exact path="/">
            <MapEvent />
          </Route>
          <Route path="/doc">
            <Documentation />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
