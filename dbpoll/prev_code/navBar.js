import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  button: {
    //margin: theme.spacing(1),
  
  },
  input: {
    display: 'none',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  margins : {
    marginRight : '60%',
  },
  marginss : {
    marginRight : '5%',
  },
  title: {
    flexGrow: 1,
    display: 'none',
    color : 'white',
   
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div style={{ color: 'white'}}>
     <AppBar position="static">
        <Toolbar>
          <Link className={classes.margins} exact to="/">
            <li>
              
                <img
                  border="0"
                  alt="Deutsche Bank"
                  src="https://www.johnkay.com/wp-content/uploads/2016/07/Deutsche_Bank_logo_without_wordmark.png"
                  width = "40"
                  height = "30"
                />
                   <Typography variant="h6" className={classes.title}  noWrap> dbPoll </Typography>
            
            </li>
          </Link>
               <Link className={classes.marginss} to="/login">
            <li>
              <img
                border="0"
                src="https://image.flaticon.com/icons/svg/295/295128.svg"
                width="30"
                height="20"
              />{" "}
               <Typography variant="h6" className={classes.title}  noWrap>  Login</Typography>
            
            </li>
          </Link>

          <Link className={classes.marginss}  to="/signup">
            <li>
              <img
                border="0"
                src="https://image.flaticon.com/icons/svg/295/295128.svg"
                width="30"
                height="20"
            /> {" "}
            <Typography variant="h6" className={classes.title}  noWrap>  Sign Up</Typography>
            </li>
          </Link>

         <Link to="/joinPresentation">
            <li>
            <img 
                border = "0"
                src = "http://www.easyschoolsoftware.net/images/icons/signup.svg"
                width="30"
                height="20"
            /> {" "}
             <Typography variant="h6" className={classes.title}  noWrap> Join</Typography>
            </li>
          </Link>
       </Toolbar>
       </AppBar>
    </div>
  );
};

export default NavBar;
