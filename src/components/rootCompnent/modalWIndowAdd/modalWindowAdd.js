import React, { Component } from "react";
import classes from "./modalWindowAdd.css";
import ModalWindow from "../modalWindow/modalWindow"

class ModalWindowAdd extends Component {
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
  };
  

  render() {
    const { handleSubmit, onCancel } = this.props;
    return (
        <div className={classes.BookElemLI}>
        <form/>
        <b> Автор:</b>
        <input
          type="text"
          name="author"
          value={}
          onChange={this.handleChange}
        />
        {this.state.errors.author && this.state.errors.author.length > 0 && (
          <span>{this.state.errors.author}</span>
        )}
        <br />
        <b>Назва:</b>
        <input
          type="text"
          name="name"
          value={}
          onChange={this.handleChange}
        />
        {this.state.errors.name && this.state.errors.name.length > 0 && (
          <span>{this.state.errors.name}</span>
        )}
        <br />
        <b>Оцінка:</b>
        <input
          type="number"
          name="stars"
          value={}
          onChange={this.handleChange}
        />
        {this.state.errors.stars && this.state.errors.stars.length > 0 && (
          <span>{this.state.errors.stars}</span>
        )}
        <br />
        <button
          type="button"
          disabled={
            !this.state.author || !this.state.name || !this.state.stars
          }
          onClick={() => handleSubmit(this.state)}
        >
          Зберегти
        </button>{" "}
        {""}
        <button type="reset" onClick={() => onCancel(false)}>
          Скасувати
        </button>    
        

  
         <ModalWindow
          active={this.state.modalActive}
          setActive={this.setModalActive}
          statee={this.state}
          handleSubmit={this.handleSubmit}
        />
    </div>
    );
  }
}

export default ModalWindowAdd;