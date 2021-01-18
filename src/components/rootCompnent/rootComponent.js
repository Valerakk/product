import React, { Component } from "react";
import classes from "./rootComponent.css";
import BookList from "./bookList/bookList";
import ButtonAdd from "../../UI/buttonR/buttonAdd/buttonAdd";

class RootComponent extends Component {
  render() {
    return (
      <div className={classes.RootComponent}>
        <div className={classes.RootComponentLine}>
          <h1>BookHub</h1>

          <ButtonAdd onClick={() => this.setModalActive(true)} />
        </div>
        <div className={classes.RootComponentWrapper}>
          <BookList />
        </div>
      </div>
    );
  }
}

export default RootComponent;
