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


const PostForm = (props) => {
 
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }
 
  function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
 }
 
  const handleSubmitMCQ = (event) => {
  // Prevent default behavior
  event.preventDefault();

  const data = new FormData(event.target);
  var pathname = window.location.pathname;
  var i = getPosition(pathname, '/', 2);
   var pollId = pathname.substring(i+1);
   var url = 'http://localhost:4001/addMcqQuestion/' + pollId;

  
   const formData={
  question :data.get('question'),
  option1 : data.get('option1'),
  option2 : data.get('option2'),
  option3 : data.get('option3'),
  }

    axios.post(url, formData)
   .then(res => {
     console.log(res);
     console.log(res.data);

     if(res.data === 'done')
     {
        
      window.alert("Question Added successfully");

      data.set('question','');
      document.getElementById('question').value = '';
      document.getElementById('option1').value = '';
      document.getElementById('option2').value = '';
      document.getElementById('option3').value = '';
     }


   })
  // Do your Axios stuff here
}

const handleSubmitWC = (event) => {
  event.preventDefault() ;

  const data = new FormData(event.target) ;
  var pathname = window.location.pathname ;
  var i = getPosition(pathname, '/', 2) ;
  var pollId = pathname.substring(i+1);
  var url = 'http://localhost:4001/addWCQuestion/' + pollId;

  const formData={
    title: data.get('title') 
  }

  axios.post(url,formData)
  .then(res =>{
    console.log(res) ;
    console.log(res.data) ;

    if(res.data == 'done')
    {
      window.alert("Question Added successfully");
      data.set('title','');
      document.getElementById('title').value = '';

    }
  })
}
  
  return(         
    <div className={classes.root}>   
 
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Multiple Choice" {...a11yProps(0)} />
          <Tab label="Word Cloud" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
      <h2>Multiple Choice</h2>
      <form onSubmit={handleSubmitMCQ} >
         <TextField
           name = "question"                
           id="question"
           label="Question"
           className={clsx(classes.textField, classes.dense)}
           margin="dense"
         />
        <br/> <br/>
         <h4>Options</h4>

       <TextField
           name="option1"           
           id="option1"         
           label="Option 1"
           className={clsx(classes.textField, classes.dense)}
           margin="dense"
        />

         <br/>

        <TextField
           name = "option2"             
           id="option2"
           label="Option 2"
           className={clsx(classes.textField, classes.dense)}
           margin="dense"
        />

        <br/>

        <TextField
           name = "option3"    
           id="option3"
           label="Option 3"
           className={clsx(classes.textField, classes.dense)}
           margin="dense"
         />

        <br/><br/>

         {/* <Button variant="contained" className={classes.button}>
         + Add Option
         </Button> */}
         <br/><br/>

         <Button type="submit" variant="contained" color="primary" className={classes.button}>
           Add Question
         </Button>

          {/* <Button  variant="contained" color="primary" className={classes.button}>
           Create
         </Button> */}
         </form>
      </TabPanel>


      <TabPanel value={value} index={1}>
          <h2>Word Cloud</h2>
         <form onSubmit={handleSubmitWC}>
         {/* <form onS> */}
          <TextField
           id="standard-dense"
           name= "title"
           id="title"
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
      
    </div>
  );
}

export default class CreatePollTabs extends Component {

constructor(props){
  super(props);
  this.state = {
     title : '',
     option1 : '',
     option2 : ''
  };
}

  render(){
  return (
       <PostForm/>     
    );
  }
}