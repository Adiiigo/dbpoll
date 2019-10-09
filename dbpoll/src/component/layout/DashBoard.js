import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ResponsiveContainer, PieChart, Pie } from "recharts";
import { sizing } from '@material-ui/system';

// const data = [{ name: "Active", value: 2 }, { name: "Inactive", value: 5 }, { name: "Complete", value: 7 } ];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  main: {
    justifyContent: 'center',
    height:"100%",
    width:"100%",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1)
   
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));



const DashBoard = ({pollsStatus})=> {
  const classes = useStyles();

  var pollsStatusvalue = [] ;
  var pollDisplay = 1 ;
  var polldata = [] ;

  console.log(pollsStatus)
  for (let i in pollsStatus){  
 
    pollsStatusvalue.push(pollsStatus[i]) ;
  } 

  for (var i = 0 ; i<3 ;i ++){
   console.log(pollsStatusvalue[i]) ;
  }

  var active_polls = parseInt(pollsStatusvalue[0]) ;
  var inactive_polls = parseInt(pollsStatusvalue[1]) ;
  var completed_polls = parseInt(pollsStatusvalue[2]) ;

  if(active_polls != 0 && active_polls > 0)
  {
    polldata.push({
        name: "Active Polls",
        value: active_polls
    })
  }
  
  if(inactive_polls != 0 && inactive_polls > 0)
  {
    polldata.push({
        name: "Inactive Polls",
        value: inactive_polls
    })
  }

  if(completed_polls != 0 && completed_polls > 0)
  {
    polldata.push({
        name: "Completed Polls",
        value: completed_polls
    })
  }

  if(active_polls == 0 && inactive_polls == 0 && completed_polls == 0)
  {
    pollDisplay = 0 ;
  }

  // console.log(typeof(completed) )
  // if(active_polls > 0 )
  // {
  //   polldata.push("")
  // }

  //  polldata_all = [{ name: "Active", value: active_polls }, { name: "Inactive", value: inactive_polls }, { name: "Complete", value: completed_polls } ];

    return (
    <div>
      <Grid className={classes.main} container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
             <h2>My Polls</h2>
             {  pollDisplay == 1 &&
                  <ResponsiveContainer height={300} width={500}>
                  <PieChart height={250}>
                    <Pie
                      data={polldata}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({
                        cx,
                        cy,
                        midAngle,
                        innerRadius,
                        outerRadius,
                        value,
                        index
                      }) => {
                        console.log("handling label?");
                        const RADIAN = Math.PI / 180;
                        // eslint-disable-next-line
                        const radius = 25 + innerRadius + (outerRadius - innerRadius);
                        // eslint-disable-next-line
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        // eslint-disable-next-line
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);

                        return (
                          <text
                            x={x}
                            y={y}
                            fill="#8884d8"
                            textAnchor={x > cx ? "start" : "end"}
                            dominantBaseline="central"
                          >
                            {polldata[index].name} ({value})
                          </text>
                        );
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>  
            }                 

            {  pollDisplay == 0 &&
              <p>
                Not yet created Polls .?? <br/> 
                Start creating and see their status here. <br/>
                (--- Go to Create Button ---)
              </p>
            }
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>
           <h2>My Surveys</h2>
            <ResponsiveContainer height={300} width={500}>
              <PieChart height={250}>
                <Pie
                  data={polldata}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    value,
                    index
                  }) => {
                    console.log("handling label?");
                    const RADIAN = Math.PI / 180;
                    // eslint-disable-next-line
                    const radius = 25 + innerRadius + (outerRadius - innerRadius);
                    // eslint-disable-next-line
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    // eslint-disable-next-line
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);

                    return (
                      <text
                        x={x}
                        y={y}
                        fill="#8884d8"
                        textAnchor={x > cx ? "start" : "end"}
                        dominantBaseline="central"
                      >
                        {polldata[index].name} ({value})
                      </text>
                    );
                  }}
                />
              </PieChart>
            </ResponsiveContainer>              
          </Paper>
        </Grid>
       </Grid>
    </div>
  );
}

export default DashBoard