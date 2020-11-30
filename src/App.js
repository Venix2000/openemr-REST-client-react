import React, { Component } from "react";
import "./styles.css";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Routes from "./routes";
import Home from "./Home";
import Login from "./Login";

class App extends Component {
  constructor() {
    super();
    this.state = {
      appName: "Login",
      home: false
    };
  }

  render() {
    return (
      <div className="off-canvas-wrapper">
        <Routes name={this.state.appName} />
        <hr />
      </div>
    );
  }
}

export default App;
