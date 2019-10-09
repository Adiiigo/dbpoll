import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button} from 'react-bootstrap';
import { ButtonToolbar} from 'react-bootstrap'; 
import {Link}from 'react-router-dom';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Abc from '../../Abc';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
      <div>
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label=" IPV tolerance" {...a11yProps(0)}> </Tab>
          <Tab label="RAT Level Inclusion" {...a11yProps(1)} />
          <Tab label="RAT Risk" {...a11yProps(2)} />
          <Tab label="RAT Risk Attribution Mapping" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        

        <Abc />

        
      </TabPanel>
      <TabPanel value={value} index={1}>
        RAT Level Inclusion
      </TabPanel>
      <TabPanel value={value} index={2}>
        RAT Risk
      </TabPanel>
      <TabPanel value={value} index={3}>
        RAT Risk Attribution mapping
      </TabPanel>
    </div>

    </div>
  );
}