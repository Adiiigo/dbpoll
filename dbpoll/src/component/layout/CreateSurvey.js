import React, { Component } from "react";
// For Contaimer
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
//For selection of mcqs,...
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import AddBoxTwoToneIcon from "@material-ui/icons/AddBoxTwoTone";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";

import DateFnsUtils from "@date-io/date-fns";
import StartDateTimePicker from "./StartDateTimePickerSurvey";
import EndDateTimePicker from "./EndDateTimePicker";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import axios from "axios";

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
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default class CreateSurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      selectedRadio: "Manual",
      selectedDate: ""
    };
  }

  handleRadioChange = evt => {
    this.setState({
      selectedRadio: evt.target.value
    });

    if (this.state.selectedRadio == "Manual") {
      this.state.disabled = false;
    } else {
      this.state.disabled = true;
    }
  };

  render() {
    const classes = useStyles;

    const time = [
      {
        value: "t15",
        label: "15s"
      },
      {
        value: "t20",
        label: "20s"
      },
      {
        value: "t30",
        label: "30s"
      },
      {
        value: "t40",
        label: "40s"
      }
    ];

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Create Survey
          </Typography>
          <form
            action="http://localhost:4001/createSurvey"
            method="post"
            className={classes.form}
            noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="surveyName"
              label="Survey Name"
              name="surveyName"
              autoComplete="surveyName"
              autoFocus
            />

            <FormLabel component="legend">Select Way</FormLabel>
            <RadioGroup aria-label="gender" name="selectWay">
              <FormControlLabel
                value="Manual"
                control={<Radio />}
                label="manual"
                checked={this.state.selectedRadio == "Manual"}
                onChange={this.handleRadioChange}
              />
              <FormControlLabel
                value="Automatic"
                control={<Radio />}
                checked={this.state.selectedRadio == "Automatic"}
                onChange={this.handleRadioChange}
                label="automatic"
              />
            </RadioGroup>

            <StartDateTimePicker enableDT={this.state.disabled} />

            <EndDateTimePicker enableDT={this.state.disabled} />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Next
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}
