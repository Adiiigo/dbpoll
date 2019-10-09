import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";

const resizeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};

class WordC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repsonse: {}
    };

    this.endpoint = "http://localhost:4001";
    this.socket = socketIOClient(this.endpoint);
    //  this.handleClicks = this.handleClicks.bind(this);
  }

  componentDidMount() {
    this.socket.on("WordCountAPI", data => this.setState({ response: data }));
    // console.log(this.state.response);
  }
  abortController = new AbortController();

  render() {
    var { response } = this.state;
    var x = new Array();
    //  x = [[1, 2], [4, 5]];
    var i;
    for (i in response) {
      var a = { text: i, value: Number(response[i]) };

      x.push(a);
    }

    console.log(x);
    return (
      <div>
        <p>Woah ! Word Cloud !</p>
        <Resizable
          defaultSize={{
            width: 800,
            height: 500
          }}
          style={resizeStyle}
        >
          <div style={{ width: "100%", height: "100%" }}>
            <ReactWordcloud words={x} />
          </div>
        </Resizable>
      </div>
    );
  }
}

export default WordC;