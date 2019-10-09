import React, { Component } from "react";

import socketIOClient from "socket.io-client";
// import ListItemText from '@material-ui/core/ListItemText';
// import List from '@material-ui/core/List';
import {  makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import MenuIcon from '@material-ui/icons/Menu';

import TextField from "@material-ui/core/TextField";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';import Button from "@material-ui/core/Button";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    button: {
      //margin: theme.spacing(1),
    
    },
    input: {
      display: 'none',
    },
    root: {
        padding: theme.spacing(10, 12),
      flexGrow: 1,
       marginLeft : '10%',
       marginRight : '10%',
    },

    menuButton: {
      marginRight: theme.spacing(2),
    },
    submitBtn : {
      width : '50%'
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    }
}));

export default class Client extends Component {     
     
    constructor(props){
        super(props)
        this.state = {
         res:'',
         time : ''
        }
        this.endpoint = "http://localhost:4001";
        // this.socket = socketIOClient(this.endpoint, {query: `pollId=${this.props.match.params.pollId}`});
         this.socket = socketIOClient(this.endpoint);
    }
    componentDidMount() {
       
        // this.socket.on("FromActivePollAPI", data => this.setState({ res: data }));
       this.socket.on("timer", data => this.setState({ time: data }));
    }  
    getPosition(string, subString, index) {
      return string.split(subString, index).join(subString).length;
   }
   
     handleSubmit = (event) => {
      // Prevent default behavior
      event.preventDefault();
    
      const data = new FormData(event.target);
      var answer = data.get('answer');
      var questionId = data.get('questionId');
       var url = 'http://localhost:4001/mcqAnswers/';
       
       const formData = {
        answer : answer,
        questionId : questionId
       }
     
       axios.post(url, formData)
       .then(res => {
         console.log(res);
         console.log(res.data);
         
        
       })
      // Do your Axios stuff here
    }
    
    render(){
        const {time } = this.state;
        const classes = useStyles;
        // console.log(time);
     console.log(time.data);
    
     var  questionData = [] ;
  
  
  for (let i in time.data){  
    questionData.push(time.data[i]) ;
  } 
var options = [];
  for (let i in questionData[3]){  
    options.push(questionData[3][i]) ;
  } 

  console.log(questionData[3])

  // for (let value of (questionData[3])) {
  //   options.push(value);
  // }


  return (
    
      <div style={{textAlign:'center', marginLeft : '20%', marginRight: '20%'}}>

     
      <Paper className={classes.root}>
        <h2>Question : {` ${questionData[1] }  `} </h2>
        <h2>Time Left : {` ${questionData[2]}  `} </h2>
      
      </Paper>
      <form onSubmit={this.handleSubmit} >
    
      <FormLabel component="legend" >Select Answer</FormLabel>
      <RadioGroup aria-label="gender" name="answer">
      {options.map(value => {
        return(
        
          <FormControlLabel                
                value={` ${value } `}
                control={<Radio />}
                label={` ${value } ` }
                // checked={this.state.selectedRadio == 'Manual'}
                // onChange={this.handleRadioChange}
                 />                
      
        )
      })};

        </RadioGroup>
                
        <input type="hidden" name="questionId" value={` ${questionData[0] }  `} />
        <Button type='submit'
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submitBtn}           
          >
            Submit
          </Button>
          </form>
      </div>
   
    
  )
    }
}
