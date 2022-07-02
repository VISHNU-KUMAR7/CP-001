import React from "react";
import styles from "./ErrorMsg.module.css";

export default class ErrorMsg extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="text-danger">{this.props.children}</div>;
  }
}
