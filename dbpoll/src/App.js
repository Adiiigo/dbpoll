import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Poll from "./component/layout/Poll";

import Authentication from "./Authentication";
import Button from '@material-ui/core/Button'
import MyPollsBackend from "./component/backend/MyPollsBackend";
import MySurveysBackend from "./component/backend/MySurveysBackend";
import Trash from "./component/layout/trash";
import createPoll from "./component/layout/CreatePoll";
import createSurvey from "./component/layout/CreateSurvey";
import PollQuestionsBackend from "./component/backend/PollQuestionsBackend";
import DashBoardBackend from "./component/backend/DashboardBackend";
import selection from "./component/layout/selection";
import Chart from './component/layout/Chart';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';

import {Link}from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PollIcon from '@material-ui/icons/Poll';
import PieChartIcon from '@material-ui/icons/PieChart';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import AddBoxIcon from '@material-ui/icons/AddBox';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DashBoard from "../src/component/layout/DashBoard";


import Client from "./Client";
import Join  from "./component/layout/join" ;
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles2 = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const useStyles = makeStyles(theme => ({
  button: {
    //margin: theme.spacing(1),
  },
  input: {
    display: "none"
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(20)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  logout: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    },
    color: 'red',
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

export default function App() {
  const classes = useStyles();
  const classes2 = useStyles2();

  var res = {};

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="open drawer">
              {/* <MenuIcon /> */}
              <img
                border="0"
                alt="Deutsche Bank"
                src="https://www.johnkay.com/wp-content/uploads/2016/07/Deutsche_Bank_logo_without_wordmark.png"
                width="40"
                height="30"
              />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              dbPoll
            </Typography>
            <div className={classes.logout}>
              {/* <Typography className={classes.title} variant="h6" noWrap>
                {` ${ user } `}
                <Authentication />
              </Typography> */}
              <Button>
                Log Out
              </Button>
            </div>
          </Toolbar>
        </AppBar>

        <div className={classes2.root}>
          <Grid container>
            <Grid item xs={2}>
              <List component="nav" aria-label="main mailbox folders">
                <Link button to="/dbpoll">
                  <ListItem button>
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="DashBoard" />
                  </ListItem>
                </Link>

                <Link button to="/selection">
                  <ListItem button>
                    <ListItemIcon>
                      <AddBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create" />
                  </ListItem>
                </Link>

                <Link button to="/myPolls">
                  <ListItem button>
                    <ListItemIcon>
                      <PollIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Polls" />
                  </ListItem>
                </Link>

                <Link button to="/mySurveys">
                  <ListItem button>
                    <ListItemIcon>
                      <PieChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Surveys" />
                  </ListItem>
                </Link>

                {/* <Link button to="/pollQuestions">
                  <ListItem button>
                    <ListItemIcon>
                      <PieChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Poll Questions" />
                  </ListItem>
                </Link> */}

                <Link button to="/join">
                  <ListItem button>
                    <ListItemIcon>
                      <AddToQueueIcon />
                    </ListItemIcon>
                    <ListItemText primary="Join" />
                  </ListItem>
                </Link>

                {/* <Link button to="/trash">
                  <ListItem button>
                    <ListItemIcon>
                      <DeleteForeverTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Trash" />
                  </ListItem>
                </Link> */}

                <Link button to="/chart">
                  <ListItem button>
                    <ListItemIcon>
                      <DeleteForeverTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Chart" />
                  </ListItem>
                </Link>

              </List>
              <Divider />
            </Grid>

            <Grid item xs={10} sm={10}>
              <Paper className={classes2.paper}>
                <Route exact path="/dbpoll" component={DashBoardBackend} />
                <Route exact path="/myPolls" component={MyPollsBackend} />
                <Route path="/trash" component={Trash} />
                <Route path="/createPoll" component={createPoll} />
                <Route path="/createSurvey" component={createSurvey} />
                <Route path="/selection" component={selection} />
                <Route path="/dashBoard" component={DashBoard} />
                <Route path="/chart" component={Chart} />
                
                <Route path="/mySurveys" component={MySurveysBackend} />
                <Route
                  path="/pollQuestions/:pollId"
                  component={PollQuestionsBackend}
                />
                <Route path="/join/" component={Join} />
                <Route path="/client/" component={Client} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </Router>
  );
}
