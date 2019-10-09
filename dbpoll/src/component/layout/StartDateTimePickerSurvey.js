import React, { Component } from "react";
// For Contaimer
//For selection of mcqs,...
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import DateFnsUtils from "@date-io/date-fns";
import moment from "moment";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const StartDateTimePicker = ({ enableDT }) => {
  var today = new Date();

  const [selectedDate, setSelectedDate] = React.useState(today);

  const classes = useStyles();
  const [values, setValues] = React.useState({
    timePerQuestion: ""
    // name: 'hai',
  });

  const handleChangeSelect = event => {
    console.log();
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  // add these two functions to your component
  const calculateMinTime = date => {
    let isToday = moment(date).isSame(moment(), "day");
    if (isToday) {
      let nowAddOneHour = moment(new Date())
        .add({ hours: 1 })
        .toDate();
      return nowAddOneHour;
    }
    return moment()
      .startOf("day")
      .toDate(); // set to 12:00 am today
  };

  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            fullWidth
            disabled={enableDT}
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="startDate"
            name="startDate"
            label="Start Date"
            value={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />

          <KeyboardTimePicker
            margin="normal"
            fullWidth
            disabled={enableDT}
            id="startTime"
            name="startTime"
            label="StartTime"
            value={selectedDate}
            minTime={calculateMinTime(new Date())}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <FormControl className={classes.formControl}></FormControl>
    </div>
  );
};
// export default StartDateTimePicker.selectedDate
export default StartDateTimePicker;
