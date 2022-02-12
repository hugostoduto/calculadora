import React from "react";
import "./Display.css";

export const Display = ({ value }) => {
  return (
    <div className="display">
      <p>{value}</p>
    </div>
  );
};
