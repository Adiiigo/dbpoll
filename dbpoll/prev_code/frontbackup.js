import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Exceptions from "./component/layout/Exceptions";
import Financials from "./component/layout/Financials";
import Home from "./component/layout/Home";
import myPolls from "./component/layout/myPolls";
import Trash from "./component/layout/trash";
import createPoll from "./component/layout/CreatePoll";
import LogIn from "./component/Home/login";
import RegisterForm from "./component/Home/RegistrationForm/RegisterForm";
import JoinPresentation from "./component/Home/joinPresentation";
import UserSelect from "./component/Home/userSelect";
import main from "./component/Home/main";
import CreatePoll from "./component/layout/CreatePoll";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
// import InboxIcon from "@material-ui/icons/Inbox";
// import DraftsIcon from "@material-ui/icons/Drafts";

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
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
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
    }
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

export default function Front() {
  const classes = useStyles();
  const classes2 = useStyles2();
  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              dbPoll
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Toolbar>
        </AppBar>

        <div className={classes2.root}>
          <Grid container>
            <Grid item xs={2}>
              <List component="nav" aria-label="main mailbox folders">
                <Link button to="/login">
                  <ListItem
                    button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Log In
                  </ListItem>
                </Link>

                <Link button to="/signup">
                  <ListItem
                    button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign up
                  </ListItem>
                </Link>

                <Link button to="/joinPresentation">
                  <ListItem
                    button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Join Presentation
                  </ListItem>
                </Link>

                <Link button to="/userSelect">
                  <ListItem
                    button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Select Option
                  </ListItem>
                </Link>

                <Link button to="/createPoll">
                  <ListItem
                    button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Create Poll
                  </ListItem>
                </Link>
              </List>
              <Divider />
            </Grid>

            <Grid item xs={10} sm={10}>
              <Paper className={classes2.paper}>
                <Route exact path="/login" component={LogIn} />
                <Route exact path="/" component={main} />
                <Route exact path="/signup" component={RegisterForm} />
                <Route
                  exact
                  path="/joinPresentation"
                  component={JoinPresentation}
                />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </Router>
  );
}
