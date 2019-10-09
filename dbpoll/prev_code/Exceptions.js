import React, {Component} from 'react';
import {Doughnut,Bar} from 'react-chartjs-2';
import { truncateSync } from 'fs';
class Exceptions extends Component
{
    constructor(props){
        super(props);
        
        this.state={
            charData:{
               labels: ['Reopened systematically', 'open','closed systemativally','closed manually'],
               datasets:[
                   {
                       label:'exceptions',
                       data:[100,255,323,123],
                       backgroundColor:[
                           'rgba(255,99,132,0.6)',
                           'rgba(54,162,235,0.6)',
                           'rgba(255,206,86,0.6)',
                           'rgba(75,192,192,0.6)',

                       ]
                    }
                 
               ]
            }
        }
    }
    render()
    {
        return(
            <div className="chart" style={{height:'250px'}}>
                
                <Doughnut
                data={this.state.charData}
                options={{
                    maintainAspectRatio:false,
                    cutoutPercentage:80,
                    title:{
                        display:true,
                        text:'Exceptions'
                    },
                    legend:{
                        display:true,
                        position:'right'
                    },
                    innerRadius:"70%"
                }}
                />,
                 <Bar
                data={this.state.charData}
                options={{
                    maintainAspectRatio:false,
                    title:{
                        display:true,
                        text:'Levels'
                    },
                    legend:{
                        display:true,
                        position:'right'
                    },
                     scales:{
                        xAxes:[{
                            stacked:true
                        }],
                        yAxes:[{
                            stacked:true
                        }]
                    }
                  
                }}
/>
            </div>
        )
    }
}
export default Exceptions;