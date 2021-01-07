import React, { Component } from "react";
import classes from "./bookList.css";
import BookElem from "./bookElem/bookElem";
import ImageR from "./ImageR/ImageR";

class BookList extends Component {
  render() {
    return (
      <div className={classes.BookList}>
        <ImageR />
        <BookElem />
      </div>
    );
  }
}

export default BookList;
