import React from "react";
import "./Button.css";

export const Button = ({ label, op, operation, double, triple, click }) => {
  return (
    <button
      onClick={() => click(op)}
      className={`
    button
    ${operation ? "operation" : ""}
    ${double ? "double" : ""}
    ${triple ? "triple" : ""}
  `}
    >
      {label}
    </button>
  );
};
