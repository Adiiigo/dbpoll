import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
//import Modal from '@material-ui/core/Modal';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import CreatePoll from './CreatePollTabs';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  paper: {
    backgroundColor:'#ffffff',
    border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

  },
  root: {
    width: '100%',
    maxWidth: 360,
    display : 'block',
    backgroundColor: theme.palette.background.paper,
  }
}));


function MyVerticallyCenteredModal(props) {
  const onHide=() => {
  //  setModalShow(false);
    window.location.reload();
  }
 
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <CreatePoll/>
      </Modal.Body>
      
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


const PollQuestions = ({pollQuestions})=> {
 
 
  const classes = useStyles;
  const [modalShow, setModalShow] = React.useState(false);

  var questions = [];
  var questionIds = [];
  
 if(pollQuestions.pollQuestions) {
  for(var i in pollQuestions.pollQuestions){
    questions.push(pollQuestions.pollQuestions[i]);
  }

  for (let value of Object.keys(pollQuestions.pollQuestions)) {
    questionIds.push(value);
  }
}

function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}

const handleClicks = () =>{
  var pathname = window.location.pathname;
  var i = getPosition(pathname, '/', 2);
   var pollId = pathname.substring(i+1);

  var url = 'http://localhost:4001/activate/';
  url = url.concat(pollId);
  axios.get(url)
    .then(response => console.log(response))
  };
  var num=0;
  var url = '/results/';

  console.log(pollQuestions ) ;

  return (
    <div>
      
    <h2> {` ${ pollQuestions.pollName } `}  </h2>
    <Button onClick= {handleClicks} variant="primary" >
        Activate
      </Button>
      
      <ButtonToolbar>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add Questions
      </Button>   


      <MyVerticallyCenteredModal
        show={modalShow}        
      />
    </ButtonToolbar>
   
      
    <List component="nav" dense className={classes.root}>

{questions.map(value => {
  const labelId = `checkbox-list-label-${value}`;
   num++;

  return (
  
  // <Link button to ={`${url}${ pollIds[num]}`}>
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
      <Link button to ={`${url}${ questionIds[num]}`} >
      <Button variant="primary" >
        Show Results
      </Button>
      </Link>
    </ListItem>         
   
  // </Link>       

  );
})}
</List>
 
  
    </div>
    );
  };

  export default PollQuestions