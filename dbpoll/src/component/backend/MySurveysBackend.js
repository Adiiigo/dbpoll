import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import MySurveys from "../layout/MySurveys";
import { Component } from "react";

class MySurveysBackend extends Component {
  state = {
    mySurveys: []
  };

  componentDidMount() {
    fetch("http://localhost:4001/surveys/")
      .then(res => res.json())
      .then(data => {
        this.setState({ mySurveys: data });
      })
      .catch(console.log);
  }

  render() {
    console.log(this.state.mySurveys);

    return (
      <Router>
        <MySurveys mySurveys={this.state.mySurveys} />
      </Router>
    );
  }
}

export default MySurveysBackend;
