import React, { Component} from "react";
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
 
  


  handleSubmit = (value) => {
    

    this.setState({...value,modalActive:false})
    
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
          statee={this.state}
          handleSubmit={this.handleSubmit}
        />
        <ButtonR onClick={() => this.setModalActive(true)} />
      </div>
    );
  }
}

export default BookElem;
