import React from 'react';
import './App.css';

import {BrowserRouter as Router,Route} from "react-router-dom";
import UserData from './component/layout/UserData';
import { Component } from 'react'
     class Abc extends Component {
        state = {
            userData: {}
         }
       
         componentDidMount() {
           fetch('http://localhost:4001/authenticate/')
           .then(res => res.json())
           .then((data) => {
             this.setState({ userData: data })
           })
           .catch(console.log)
         }
       
  

      render() {
        return (
         
    <Router>

        <UserData userData={this.state.userData} />
        </Router>

        )
      }
    }
    

export default Abc;

