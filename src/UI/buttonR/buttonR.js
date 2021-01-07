import React, { Component } from "react";
import { EditOutlined } from "@ant-design/icons";
import classes from "./buttonR.css";
import { Button } from "antd";

class ButtonR extends Component {
  render() {
    return (
      <div className={classes.ButtonIcon}>
        <Button
          onClick={this.props.onClick}
          className={classes.ButtonR}
          type="primary"
          ghost
          icon={<EditOutlined />}
        />
      </div>
    );
  }
}

export default ButtonR;
