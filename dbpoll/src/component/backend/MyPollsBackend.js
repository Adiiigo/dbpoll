import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import MyPolls from "../layout/MyPolls";
import { Component } from "react";

class MyPollsBackend extends Component {
  state = {
    myPolls: []
  };

  componentDidMount() {
    fetch("http://localhost:4001/polls/")
      .then(res => res.json())
      .then(data => {
        this.setState({ myPolls: data });
      })
      .catch(console.log);
  }

  render() {
    // console.log(this.state.myPolls);

    return (
      <Router>
        <MyPolls myPolls={this.state.myPolls} />
      </Router>
    );
  }
}

export default MyPollsBackend;
