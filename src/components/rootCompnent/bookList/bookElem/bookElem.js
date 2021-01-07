import React, { Component, useState } from "react";
import classes from "./bookElem.css";
import getData from "../../../../dataJSON";
import ModalWindow from "../../modalWindow/modalWindow";
import ButtonR from "../../../../UI/buttonR/buttonR";

class BookElem extends Component {
  state = { name: "", author: "", stars: "", modalActive: false };

  componentDidMount() {
    getData().then((res) => {
      const book = res.books.find((book) => book.id === 1);
      this.setState(book);
    });
  }

  handleCange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    console.log(this.state);
    this.setModalActive(false);
  };

  setModalActive = (value) => {
    this.setState({ modalActive: value });
  };

  render() {
    return (
      <div className={classes.BookElem}>
        <ul>
          Автор:
          <div className={classes.BookElemLI}>
            {this.state.author}

            <br />
          </div>
          Назва:
          <div className={classes.BookElemLI}>
            {this.state.name}
            <br />
          </div>
          Оцінка:
          <div className={classes.BookElemLI}>
            {this.state.stars}
            <br />
          </div>
        </ul>
        <ModalWindow
          active={this.state.modalActive}
          setActive={this.setModalActive}
          state={this.state}
          onChange={this.handleCange}
          handleSubmit={this.handleSubmit}
        />
        <ButtonR onClick={() => this.setModalActive(true)} />
      </div>
    );
  }
}

export default BookElem;
