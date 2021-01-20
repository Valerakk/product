import React, { Component } from "react";
import BookElem from "../bookList/bookElem/bookElem";
import data from "./books.json"

class DataBooks extends Component {
   state = {}
    componentDidMount() {
       this.setState({books:data.books});
       console.log(this.state)
    };
    render() {
      const { books } = this.state
      console.log(this.state)
        return (
          <div>
          {books && books.map(book => (<BookElem book = {book} key = {book.id}/>)) }
          
          </div>
           
          
        )
      }
    }    
    
    export default DataBooks;