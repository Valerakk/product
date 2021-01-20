import React, { Component } from "react";
import classes from "./bookElem.css";
import ModalWindow from "../../modalWindow/modalWindow";
import ButtonR from "../../../../UI/buttonR/buttonR";

class BookElem extends Component {
  state = { book :{ name:"",author:"",stars:""}, modalActive: false };

  componentDidMount() {
    this.setState({book: this.props.book})

  }

  handleSubmit = (value) => {
    value.author = value.author.replace(/[|&;$%@"<>()+,]/g, "");
    value.name = value.name.replace(/[|&;$%@"<>()+,]/g, "");
    value.author =
      value.author[0].toUpperCase() + value.author.slice(1).toLowerCase();
    value.name =
      value.name[0].toUpperCase() + value.name.slice(1).toLowerCase();
    this.setState({ book:{...value}, modalActive: false });
  };

  setModalActive = (value) => {
    this.setState({ modalActive: value });
  };

  render() {
    const { book } = this.state
    return (
      <div className={classes.BookElem}>
        <ul>
          Автор:
          <div className={classes.BookElemLI}>
            {book.author}

            <br />
          </div>
          Назва:
          <div className={classes.BookElemLI}>
            {book.name}
            <br />
          </div>
          Оцінка:
          <div className={classes.BookElemLI}>
            {book.stars}
            <br />
          </div>
        </ul>
        <ModalWindow
          active={this.state.modalActive}
          setActive={this.setModalActive}
          book={book}
          handleSubmit={this.handleSubmit}
        />
        <ButtonR onClick={() => this.setModalActive(true)} />
      </div>
    );
  }
}

export default BookElem;
