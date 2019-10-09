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
import Button from "react-bootstrap/Button";
import { Route, Redirect } from "react-router"
import { createBrowserHistory } from 'history';


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    display: "block",
    backgroundColor: theme.palette.background.paper
  },
  margin: {
    margin: theme.spacing(1),
    flexDirection: 'column',
  },
}));

const MyPolls = ({ myPolls }) => {

  const history = createBrowserHistory();
  // Get the current location.
const location = history.location;

  console.log(myPolls);
  const classes = useStyles;

  var pollNames = [];
  var pollIds = [];

  for (var i in myPolls) {
    pollNames.push(myPolls[i]);
  }

  // console.log(pollNames) ;

  for (let value of Object.keys(myPolls)) {
    pollIds.push(value);
  }
  // console.log("pollIds", pollIds);
  // var username = pollIds[0] ;
// console.log(typeof(username)) ;
  // var uid = username.substring(0,3) ;
// console.log(uid) ;

  var num = -1;
  var url = "/pollQuestions/";



  return (
    <List component="nav" dense className={classes.root}>
    <h2> 
        {/* Polls of the {uid} */}
    </h2>

    {pollNames.map(value => {
      const labelId = `checkbox-list-label-${value}`;
      ++num;
    
      return (
        
    //  <Button  size="small" className={classes.margin} to ={`${url}${ pollIds[num]}`}>
      <Link button to ={`${url}${ pollIds[num]}`} >
      <Redirect to={`${url}${ pollIds[num]}`}/>
        {history.push(location)}
        {history.replace(location)}
        <ListItem key={value } role={undefined} dense button >
           
          <ListItemIcon>
            <Checkbox
              edge="start"
           //  checked={checked.indexOf(value) !== -1}
           //   tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': labelId }}
            />
          </ListItemIcon>
          <ListItemText id={labelId} primary={` ${value } `} /><br/><br/>
                    
        </ListItem>         
       
      </Link>       
      
      );
    })}
  </List>
     
  );
};

export default MyPolls;
