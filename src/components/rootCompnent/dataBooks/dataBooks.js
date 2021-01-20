import React, { Component } from "react";
import data from "./books.json"

class dataBooks extends Component {

    componentDidMount() {
       this.setState(data);
       console.log(this.states)
    };
    render() {
        return (
          <div/>
           
          
        )
      }
    }    
    
    export default dataBooks;