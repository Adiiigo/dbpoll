import React from "react";
import "./App.css";
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown
} from "react-bootstrap";

// import Exceptions from "./component/layout/Exceptions";
// import Financials from "./component/layout/Financials";
// import Home from "./component/layout/Home";
// import myPolls from "./component/layout/myPolls";
// import Trash from "./component/layout/trash";
// import createPoll from "./component/layout/CreatePoll";
import LogIn from "../src/component/Home/login";
import RegisterForm from "../src/component/Home/RegistrationForm/RegisterForm";
import JoinPresentation from "../src/component/Home/joinPresentation";

import main from "../src/component/Home/main";
// import CreatePoll from "./component/layout/CreatePoll";
import ForgotPassword from "../src/component/Home/forgotPassword";

import "./FrontStyle.css";
import NavBar from "./navBar";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default function Front() {
  return (
    <div className="Ab">
      <div className="App">
        <div className="Body">
          <BrowserRouter>
            <div>
              <NavBar />
              <Switch>
                <Route exact path="/login" component={LogIn} />
                <Route exact path="/" component={main} />
                <Route exact path="/signup" component={RegisterForm} />
                <Route
                  exact
                  path="/forgotPassword"
                  component={ForgotPassword}
                />
                <Route
                  exact
                  path="/joinPresentation"
                  component={JoinPresentation}
                />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}
