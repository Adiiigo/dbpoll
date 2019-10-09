import React,{Component} from 'react';
// For Contaimer
//For selection of mcqs,...
import { makeStyles } from '@material-ui/core/styles';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import MenuItem from '@material-ui/core/MenuItem';
  import FormHelperText from '@material-ui/core/FormHelperText';
  import FormControl from '@material-ui/core/FormControl';
  import Select from '@material-ui/core/Select';

import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment'


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const StartDateTimePicker = ({enableDT})=> { 
    
    var today = new Date() ;

    const [selectedDate, setSelectedDate] = React.useState(today);

    const classes = useStyles();
    const [values, setValues] = React.useState({
        timePerQuestion: '',
      // name: 'hai',
    });
   
    const handleChangeSelect = event => {
        console.log()
        setValues(oldValues => ({
          ...oldValues,
          [event.target.name]: event.target.value,
        }));
      };


    const handleDateChange = date => {
        setSelectedDate(date);
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
                    'aria-label': 'change date',
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
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
                />
            </Grid>
          </MuiPickersUtilsProvider>

          <FormControl className={classes.formControl}>
          <Select
            value={values.timePerQuestion}
            onChange={handleChangeSelect}
            displayEmpty
            name="timePerQuestion"
            className={classes.selectEmpty}
          >
          
            <MenuItem value="">10 sec</MenuItem>
            <MenuItem value={20}>20 sec</MenuItem>
            <MenuItem value={30}>30 sec</MenuItem>
            <MenuItem value={60}>1 min</MenuItem>
            <MenuItem value={300}>5 min</MenuItem>
          </Select>
          <FormHelperText>Please Select Time Per Question</FormHelperText>
        </FormControl>
        </div>
         
     
    );
  
}
// export default StartDateTimePicker.selectedDate
export default StartDateTimePicker
