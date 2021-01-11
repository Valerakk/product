import React, { Component } from "react";
import classes from "./rootComponent.css";
import BookList from "./bookList/bookList";


class RootComponent extends Component {
  render() {
    return (
      <div className={classes.RootComponent}>
        <div className={classes.RootComponentWrapper}>
          <h1>Книги</h1>
          <BookList />
         
        </div>
      </div>
    );
  }
}

export default RootComponent;
