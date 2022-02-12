import React from "react";
import { Component } from "react/cjs/react.development";
import { Button } from "../components/Button";
import { Display } from "../components/Display";
import "./Calculator.css";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }
  clearMemory() {
    console.log("limpar");
  }
  setOperation(operation) {
    console.log(operation);
  }
  addDigit(n) {
    console.log(n);
  }
  render() {
    return (
      <div className="calculator">
        <Display value="100" />
        <Button click={this.clearMemory} label="ac" triple />
        <Button click={this.setOperation} label="/" operation />
        <Button click={this.addDigit} label="7" />
        <Button click={this.addDigit} label="8" />
        <Button click={this.addDigit} label="9" />
        <Button click={this.setOperation} label="*" operation />
        <Button click={this.addDigit} label="4" />
        <Button click={this.addDigit} label="5" />
        <Button click={this.addDigit} label="6" />
        <Button click={this.setOperation} label="-" operation />
        <Button click={this.addDigit} label="1" />
        <Button click={this.addDigit} label="2" />
        <Button click={this.addDigit} label="3" />
        <Button click={this.setOperation} label="+" operation />
        <Button click={this.addDigit} label="0" double />
        <Button click={this.addDigit} label="." />
        <Button click={this.setOperation} label="=" operation />
      </div>
    );
  }
}
