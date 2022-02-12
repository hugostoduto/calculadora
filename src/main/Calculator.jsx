import React from "react";
import { Component } from "react/cjs/react.development";
import { Button } from "../components/Button";
import { Display } from "../components/Display";
import "./Calculator.css";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};
export default class Calculator extends Component {
  state = { ...initialState };

  constructor(props) {
    super(props);
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }
  clearMemory() {
    this.setState({ ...initialState });
  }
  setOperation(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      const equals = operation === "=";
      const currentOperation = this.state.operation;

      const values = [...this.state.values];

      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
        if (isNaN(values[0]) || !isFinite(values[0])) {
          this.clearMemory();
          return;
        }
      } catch (e) {
        values[0] = this.state.values[0];
      }

      values[1] = 0;

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  }

  addDigit(n) {
    if (n === "." && this.state.displayValue.includes(".")) {
      return;
    }
    const clearDisplay =
      this.state.displayValue === "0" || this.state.clearDisplay;
    const currentValue = clearDisplay ? "" : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({ displayValue, clearDisplay: false });

    if (n !== ".") {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({ values });
    }
  }

  render() {
    return (
      <div className="calculator">
        <div className="main-display">
          <Display value={this.state.displayValue} />
        </div>
        <div className="keyboard">
          <div className="keys">
            <Button click={this.clearMemory} label="AC" triple />
            <Button click={this.setOperation} op="/" label="÷" operation />
            <Button click={this.addDigit} op="7" label="7" />
            <Button click={this.addDigit} op="8" label="8" />
            <Button click={this.addDigit} op="9" label="9" />
            <Button click={this.setOperation} op="*" label="x" operation />
            <Button click={this.addDigit} op="4" label="4" />
            <Button click={this.addDigit} op="5" label="5" />
            <Button click={this.addDigit} op="6" label="6" />
            <Button click={this.setOperation} op="-" label="-" operation />
            <Button click={this.addDigit} op="1" label="1" />
            <Button click={this.addDigit} op="2" label="2" />
            <Button click={this.addDigit} op="3" label="3" />
            <Button click={this.setOperation} op="+" label="+" operation />
            <Button click={this.addDigit} op="0" label="0" double />
            <Button click={this.addDigit} op="." label="." />
            <Button click={this.setOperation} op="=" label="=" operation />
          </div>
        </div>
      </div>
    );
  }
}
