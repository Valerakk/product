import React from "react";
import classes from "./modalWindow.css";
import ModalWindowEL from "./modalWindowEl/modalWindowEl";

const ModalWindow = ({ active, setActive, statee,  handleSubmit }) => {
  const classs = classes.ModalActive + " " + classes.ModalWindow;
 
  return (
    <div
      className={active ? classs : classes.ModalWindow}
      onClick={() => setActive(false)}
    >
      <div
        className={classes.ModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalWindowEL
          handleSubmit={handleSubmit}
          onCancel={setActive}
          statee={statee}
        />
      </div>
    </div>
  );
};

export default ModalWindow;
