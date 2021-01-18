import React, { Component } from "react";
import classes from "./modalWindow.css";

class ModalWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.statee,
      errors: { name: "", author: "", stars: "" },
    };
  }

  classs = classes.ModalActive + " " + classes.ModalWindow;

  componentDidUpdate(prevProps) {
    if (prevProps.statee !== this.props.statee)
      this.setState({ ...this.props.statee });
  }

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
      <div
        className={this.active ? this.classs : classes.ModalWindow}
        onClick={() => this.setActive(false)}
      >
        <div
          className={classes.ModalContent}
          onClick={(e) => e.stopPropagation()}
        />

        <div className={classes.BookElemLI}>
          <form>
            <b> Автор:</b>
            <input
              type="text"
              name="author"
              value={this.state.author}
              onChange={this.handleChange}
            />
            {this.state.errors.author &&
              this.state.errors.author.length > 0 && (
                <span>{this.state.errors.author}</span>
              )}
            <br />
            <b>Назва:</b>
            <input
              type="text"
              name="name"
              value={this.state.name}
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
              value={this.state.stars}
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
          </form>
        </div>
      </div>
    );
  }
}

export default ModalWindow;
