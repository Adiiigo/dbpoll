import React,{Component} from 'react';
// For Contaimer
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
//For selection of mcqs,...
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import axios from 'axios';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography 
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
  paper: {
    height: 60,
    width: 100,
  
    backgroundColor: "#f1f1f1"
  },
  control: {
    padding: theme.spacing(2),
  },
  input: {
 
    // flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const state = {
  title : '',
  option1 : '',
  option2 : ''
};
const PostForm = () => {
 
 
 function  onChange(e) {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    e.target.name= e.target.value;
    
  }
 


  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return(

         
<div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Multiple Choice" {...a11yProps(0)} />
          <Tab label="Word Cloud" {...a11yProps(1)} />
          <Tab label="Tocuh Images" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <h2>Multiple Choice</h2>
      <form action='http://localhost:4001/createPollMCQ' method="post">
         <TextField
           name = "title"
        
     
           id="standard-dense"
           label="Title"
           className={clsx(classes.textField, classes.dense)}
           margin="dense"
         />

         <h4>Options</h4>

       <TextField
           name="option1"
          
           id="standard-dense"
           label="Option 1"
           className={clsx(classes.textField, classes.dense)}
           margin="dense"
         />
         <br/>
         <TextField
           name = "option2"
      
           id="standard-dense"
           label="Option 2"
           className={clsx(classes.textField, classes.dense)}
           margin="dense"
         />
         <br/> <br/>

         <Button variant="contained" className={classes.button}>
         + Add Option
         </Button>
         <br/> <br/>
          <Button type="submit" variant="contained" color="primary" className={classes.button}>
           Create
         </Button>
         </form>
      </TabPanel>


      <TabPanel value={value} index={1}>
          <h2>Word Cloud</h2>
         <form action='http://localhost:4001/createPollWC' method="post">
          <TextField
           id="standard-dense"
           name= "title"
           label="Title"
           className={clsx(classes.textField, classes.dense)}
           margin="dense"
         />
        
         <br/> <br/>


          <Button type="submit" variant="contained" color="primary" className={classes.button}>
           Create
         </Button>
           </form>
     </TabPanel>
      <TabPanel value={value} index={2}>
        Tocuh Images
      </TabPanel>
    </div>
  );
}



export default class CreatePoll extends Component {

constructor(){
  super();
  this.state = {
     title : '',
     option1 : '',
     option2 : ''
  };
}
onChange = (e) => {
  /*
    Because we named the inputs to match their
    corresponding values in state, it's
    super easy to update the state
  */
  this.setState({ [e.target.name]: e.target.value });
}

onSubmit = (e) => {
    e.preventDefault();
    axios
     .post('http://localhost:4001/createPoll',this.state)
     .then(response => {
       console(response);
     })
     .catch(error => {
       console.log(error);
     })
  } 
  
  render(){

    const { title, option1, option2} = this.state;
  return (

       <PostForm/>
     
    );
  }

}