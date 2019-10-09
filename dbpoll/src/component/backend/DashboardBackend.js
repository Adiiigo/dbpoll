import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import { Component } from 'react'
import DashBoard from '../layout/DashBoard'

class DashBoardBackend extends Component{

    state = {
                pollsStatus: []
        }

    componentDidMount() {
        fetch('http://localhost:4001/pollsStatus')
        .then(res => res.json())
        .then((data)=>{
            this.setState({pollsStatus: data})
        })
        .catch(console.log)
    }

    render() {
        console.log(this.state.pollsStatus) ;

        return(

            <Router>
                <DashBoard pollsStatus={this.state.pollsStatus}/>
            </Router>
        )
    }


}

export default DashBoardBackend