import React from 'react';
import './App.css';

import {BrowserRouter as Router,Route} from "react-router-dom";
// import Exceptions from './component/layout/Exceptions';
// import Financials from './component/layout/Financials';
// import Home from './component/layout/Home';
// import Reference from './component/layout/Reference';
import Contacts from './Contacts';
import { Component } from 'react'
     class Abc extends Component {

        state = {
        contacts: []
      }
      componentDidMount() {
        fetch('http://dbpalace-springboot-fabric-rocks-korrhar.f-az.uk.paas.intranet.db.com/api/v1/ReferenceData/RatRisk')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
      }

      columns () {
        return [
          {key: 'name', label: 'Name'},
            {key: 'email', label: 'Email'},
            {key: 'company', label: 'Company', cell: (obj, key) => {
                return <span>{ obj[key] }</span>;
            }}
        ];
      }

      render() {
        return (
         
    <Router>

        <Contacts contacts={this.state.contacts} />
        </Router>

        )
      }
    }
    
    //function App() {


export default Abc;

