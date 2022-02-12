import React from "react";
import "./Button.css";

export const Button = ({ label, operation, double, triple, click }) => {
  return (
    <button
      onClick={() => click(label)}
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
