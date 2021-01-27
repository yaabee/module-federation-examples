import React from "react";

const style = {
  background: "#800",
  color: "black",
  padding: 12,
};

const Button = () => (
  <button onClick={() => console.log(" endlich weredn")} style={style}>
    App 1 Button
  </button>
);

export default Button;
