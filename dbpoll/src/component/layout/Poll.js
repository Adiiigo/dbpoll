import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";

// ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: 200
  },
  input: {
    display: "none"
  }
}));

const dataSource = {
  chart: {
    caption: "Countries With Most Oil Reserves [2017-18]",
    subCaption: "In MMbbl = One Million barrels",
    xAxisName: "Country",
    yAxisName: "Reserves (MMbbl)",
    numberSuffix: "K",
    theme: "fusion"
  },
  data: [
    { label: "Venezuela", value: "290" },
    { label: "Saudi", value: "260" },
    { label: "Canada", value: "180" },
    { label: "Iran", value: "140" },
    { label: "Russia", value: "115" },
    { label: "UAE", value: "100" },
    { label: "US", value: "30" },
    { label: "China", value: "30" }
  ]
};

export default class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: false,
      qid: ""
    };
    this.endpoint = "http://localhost:4001";
    this.socket = socketIOClient(this.endpoint, {
      query: `id=${this.props.match.params.id}`
    });
    this.handleClicks = this.handleClicks.bind(this);
    //this.socket.on("FromQuestionsAPI", data => this.setState({ response: data }));
  }

  componentDidMount() {
    this.socket.on("FromQuestionsAPI", data =>
      this.setState({ response: data })
    );
  }
  abortController = new AbortController();

  componentWillUnmount() {
    this.abortController.abort();
  }

  handleClicks(qid) {
    console.log(qid);
    var url = "http://localhost:4001/activate/";
    url = url.concat(qid);
    axios.get(url).then(response => this.setState({ qid: response.data }));
  }

  render() {
    const response = this.state;
    var result = Object.values(response.response);
    var options = result[1];

    const classes = useStyles;
    var qids = [];

    for (var x in options) {
      qids.push(x);
    }
    console.log(qids);

    return (
      <div>
        <Grid container>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={this.handleClicks.bind(this, result[2])}
            >
              Activate
            </Button>
            <br />
            <br />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Show Results
            </Button>
          </Grid>
          <Grid item xs={6}>
            {/* <ListItemText  primary={` ${result[0] }  `} /> */}
            <h2>{` ${result[0]}  `} </h2>
            <List component="nav">
              {qids.map(value => {
                const labelId = `checkbox-list-label-${value}`;

                return <ListItemText id={labelId} primary={` ${value} `} />;
              })}
            </List>
          </Grid>
          <Grid item xs={4}>
            <ReactFC
              type="column2d"
              width="600"
              height="400"
              dataFormat="JSON"
              dataSource={dataSource}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
