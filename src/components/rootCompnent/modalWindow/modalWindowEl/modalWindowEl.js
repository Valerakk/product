import React, { Component } from "react";
import classes from "./modalWindowEl.css";


class ModalWindowEL extends Component {
  constructor(props) {
    super(props);
    this.state = {...props.statee};

  }
  componentDidUpdate(prevProps){
    if (prevProps.statee !== this.props.statee )
    this.setState({...this.props.statee})
  }
  
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  render() {
    const {  handleSubmit, onCancel } = this.props;
    return (
      <div className={classes.BookElemLI}>
        <form>
          <b> Автор:</b>
          <input
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
          />
          <b>Назва:</b>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <b>Оцінка:</b>
          <input
            type="number"
            name="stars"
            value={this.state.stars}
            onChange={this.handleChange}
          />
          <button type="button" onClick={() => handleSubmit(this.state)}>
            Зберегти
          </button>{" "}
          {""}
          <button type="reset" onClick={() => onCancel(false)}>
            Скасувати
          </button>
        </form>
      </div>
    );
  }
}

export default ModalWindowEL;
