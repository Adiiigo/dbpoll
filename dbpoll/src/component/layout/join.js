import React,{Component} from "react";
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default class Join extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pollId: ''
    }
  this.handleClick = this.handleClick.bind(this);
  }

//   componentDidMount() {
//     var url = 'http://localhost:4001/open/';
//     url = url.concat(this.props.match.params.pollId);
    
//     fetch(url)
//     .then(res => res.json())
//     .then((data) => {
//      console.log(data)
//     })
//     .catch(console.log)
// }

  handleClick = () =>  {
    var pid = this.state.pollId;
    console.log(pid) ;
    let path = `join/`;
    path = path.concat(pid) ;
    path=path.concat('/');
    console.log(path) ;  
    // window.location.href = path; 
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }  
  render(){
  
  const classes = useStyles;

  return (
    <Container style = {{marginTop : '6%'}}component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Join Poll
        </Typography>
        <form  action="http://localhost:4001/open" method ="post" className={classes.form}>
          <TextField
            variant="outlined"

            margin="normal"
            required
            fullWidth
            id="pollId"
            label="Poll Name"
            name="pollId"
            autoComplete="Poll ID"
            autoFocus
            onChange={this.handleChange}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button           
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            className={classes.submit}
            // onClick={this.handleClick}
          >
            Join
          </Button>
        </form>
      </div>
    </Container>
  );
        }
}
