import React, { Component } from "react";
import classes from "./rootComponent.css";
import BookList from "./bookList/bookList";
import ButtonAdd from "../../UI/buttonR/buttonAdd/buttonAdd"
import ModalWindow from "./modalWindow/modalWindow"

class RootComponent extends Component {
  state = {name: "", author: "", stars: "", modalActive:false}

  setModalActive = (value) => {
    this.setState({ modalActive: value });
  };
  
  handleSubmit = (value) => {
    value.author = value.author.replace(/[|&;$%@"<>()+,]/g, "");
    value.name = value.name.replace(/[|&;$%@"<>()+,]/g, "");
    value.author = value.author[0].toUpperCase() +  value.author.slice(1).toLowerCase();
    value.name = value.name[0].toUpperCase() + value.name.slice(1).toLowerCase();
    this.setState({ ...value, modalActive: false });
  };
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    
    this.setState({
      
      [name]: value,
      errors: {
        ...this.state.errors,
        [name]: value ? "" : "Поле не повинно бути пустим",
      },
  
    });
    console.log(value.author)
  };
  

  render() {
    return (
      <div className={classes.RootComponent}>
         <div className={classes.RootComponentLine}>
          <h1>BookHub</h1>
          
          <ModalWindow
          active={this.state.modalActive}
          setActive={this.setModalActive}
          statee={this.state}
          handleSubmit={this.handleSubmit}
        />
          <ButtonAdd onClick={() => this.setModalActive(true)}/>
          </div>
          <div className={classes.RootComponentWrapper}>
          <BookList />
        </div>
      </div>
    );
  }
}

export default RootComponent;
