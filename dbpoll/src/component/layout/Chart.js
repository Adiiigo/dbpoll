import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import socketIOClient from "socket.io-client";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  main: {
    justifyContent: "center",
    height: "100%",
    width: "100%"
  },
  paper: {
    padding: theme.spacing(1),
    //justifyContent: "center",
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1)
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repsonse: {},
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Answer Percentage",
            data: [10, 20, 30],
            backgroundColor: [
              "rgba(0, 0, 255, 0.6)",
              "rgba(0, 0, 255, 0.6)",
              "rgba(0, 0, 255, 0.6)",
              "rgba(0, 0, 255, 0.6)"
              // "rgba(153, 102, 255, 0.6)",
              // "rgba(255, 159, 64, 0.6)",
              // "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      }
    };

    this.endpoint = "http://localhost:4001";
  
    this.socket = socketIOClient(this.endpoint, {query: `questionId=${this.props.match.params.questionId}`});
    //  this.handleClicks = this.handleClicks.bind(this);
  }

  componentDidMount() {
    this.socket.on("FromChartDataAPI", data =>
      this.setState({ response: data })
    );
  }
  abortController = new AbortController();

  // componentWillUnmount() {
  //   this.abortController.abort();
  // }

  // handleClicks(qid) {
  //   console.log(qid);
  //   var url = "http://localhost:4001/chart/";
  //   url = url.concat(qid);
  //   axios.get(url).then(response => this.setState({ qid: response.data }));
  // }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "of poll X",
    question: "of Poll X "
  };

  render() {
    var { response } = this.state;
    var x;
    //  console.log(response);
    this.state.chartData.labels = [];
    this.state.chartData.datasets[0].data = [];

    for (x in response) {
      //  console.log(x);
      this.state.chartData.labels.push(x);
    }
    console.log(this.state.chartData.labels);

    for (x in response) {
      //  console.log(x);
      this.state.chartData.datasets[0].data.push(Number(response[x]));
    }
    //console.log(this.state.chartData.datasets.data);

    console.log(this.state.chartData);
    return (
      <div className="chart">
        <Grid className={useStyles.main} container spacing={15}>
          <Grid item xs={5}>
            <Paper className={useStyles.paper}>
              <Bar
                data={this.state.chartData}
                options={{
                  title: {
                    display: this.props.displayTitle,
                    text: "Displying results " + this.props.question,
                    fontSize: 25
                  },
                  legend: {
                    display: this.props.displayLegend,
                    position: this.props.legendPosition
                  },
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          beginAtZero: true,
                          min: 0,
                          max: 100
                        }
                      }
                    ]
                  }
                }}
              />

              {/* <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Largest Cities In " + this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />

        <Pie
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Largest Cities In " + this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />*/}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Chart;
