import React, { Component } from "react";
import classes from "./rootComponent.css";
import BookList from "./bookList/bookList";
import ButtonAdd from "../../UI/buttonR/buttonAdd/buttonAdd";
import ModalWindow from "./modalWindow/modalWindow"

class RootComponent extends Component {
  state = { name: "", author: "", stars: "", modalActive: false };
  setModalActive = (value) => {
    this.setState({ modalActive: value });
  };

  render() {
    
    return (
      <div className={classes.RootComponent}>
        <div className={classes.RootComponentLine}>
          <h1>BookHub</h1>
         <ButtonAdd onClick={() => this.setModalActive(true) }  /> 
        </div>
        <div className={classes.RootComponentWrapper}>
          <BookList />
          <ModalWindow
            active={this.state.modalActive}
            setActive={this.setModalActive}
            statee={this.state}
            handleSubmit={this.handleSubmit}
        />
        </div>
      </div>
    );
  }
}

export default RootComponent;
