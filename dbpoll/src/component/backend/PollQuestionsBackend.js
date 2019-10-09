import React from 'react';

import {BrowserRouter as Router,Route} from "react-router-dom";

import PollQuestions from '../layout/PollQuestions';
import { Component } from 'react'

class PollQuestionsBackend extends Component {

    constructor(props){
        super(props)
        this.state = {
         pollQuestions :false,
        }
       
      }
    
      

    componentDidMount() {
        var url = 'http://localhost:4001/pollQuestions/';
        url = url.concat(this.props.match.params.pollId);
        
        fetch(url)
        .then(res => res.json())
        .then((data) => {
          this.setState({ pollQuestions: data })
          this.state.pollQuestions.pollId = this.props.match.params.pollId;
        })
        .catch(console.log)
    }
       
    render() {
     
    return(
        //  <p> {this.state.response }</p>
       <Route>
         <PollQuestions pollQuestions={this.state.pollQuestions}  />
         </Route>

    )
  }
}
    

export default  PollQuestionsBackend;

