import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
// import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    display: "block",
    backgroundColor: theme.palette.background.paper
  }
}));

const MySurveys = ({ mySurveys }) => {
  console.log(mySurveys);
  const classes = useStyles;

  var surveyNames = [];
  var surveyIds = [];

  for (var i in mySurveys) {
    surveyNames.push(mySurveys[i]);
  }

  for (let value of Object.keys(mySurveys)) {
    surveyIds.push(value);
  }

  var num = -1;
  var url = "/surveyQuestions/";

  return (
    <List component="nav" dense className={classes.root}>
      {surveyNames.map(value => {
        const labelId = `checkbox-list-label-${value}`;
        ++num;

        return (
          <Link button to={`${url}${surveyIds[num]}`}>
            <ListItem key={value} role={undefined} dense button>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  //  checked={checked.indexOf(value) !== -1}
                  //   tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={` ${value} `} />
              <br />
              <br />
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
};

export default MySurveys;
