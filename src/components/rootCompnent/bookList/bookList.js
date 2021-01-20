import React, { Component } from "react";
import classes from "./bookList.css";
// import BookElem from "./bookElem/bookElem";
import ImageR from "./ImageR/ImageR";
import DataBooks from "../dataBooks/dataBooks"

class BookList extends Component {
  render() {
    return (
      <div className={classes.BookList}>
        <ImageR />
        <DataBooks />
      </div>
    );
  }
}

export default BookList;
