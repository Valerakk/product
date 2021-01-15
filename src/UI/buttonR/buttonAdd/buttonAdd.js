import React, { Component } from "react";
import { PlusCircleOutlined  } from "@ant-design/icons";
import classes from "./buttonAdd.css";
import { Button } from "antd";

class ButtonAdd extends Component {
  render() {
    return (
      <div className={classes.ButtonIcon}>
        <Button
          onClick={this.props.onClick}
          className={classes.ButtonAdd}
          type="primary"
          ghost
          icon={<PlusCircleOutlined />}
        />
      </div>
    );
  }
}

export default ButtonAdd;
