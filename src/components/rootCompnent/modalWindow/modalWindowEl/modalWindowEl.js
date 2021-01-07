import React, { Component } from "react";
import classes from "./modalWindowEl.css";
import getData from "../../../../dataJSON";

class ModalWindowEL extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, onChange, handleSubmit, onCancel } = this.props;
    return (
      <div className={classes.BookElemLI}>
        <form>
          <b> Автор:</b>
          <input
            type="text"
            name="author"
            value={state.author}
            onChange={onChange}
          />
          <b>Назва:</b>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={onChange}
          />
          <b>Оцінка:</b>
          <input
            type="number"
            name="stars"
            value={state.stars}
            onChange={onChange}
          />
          <button type="button" onClick={handleSubmit}>
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
