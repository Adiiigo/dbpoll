import React, { Component } from "react";
import moment from "moment";
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

import DateFnsUtils from "@date-io/date-fns";

const EndDateTimePicker = ({ enableDT }) => {
  var today = new Date();

  const [selectedDate, setSelectedDate] = React.useState(new Date(today));

  const handleDateChange = date => {
    setSelectedDate(date);
  };
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
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          fullWidth
          disabled={enableDT}
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="endDate"
          name="endDate"
          label="End Date"
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
          id="endTime"
          name="endTime"
          label="End Time"
          value={selectedDate}
          onChange={handleDateChange}
          minTime={calculateMinTime(new Date())}
          KeyboardButtonProps={{
            "aria-label": "change time"
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};
export default EndDateTimePicker;
