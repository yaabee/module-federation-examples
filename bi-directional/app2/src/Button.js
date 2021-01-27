import React from "react";

const style = {
  background: "#00c",
  color: "#fff",
  padding: 12,
};

const Button = () => (
  <button onClick={() => console.log("werden")} style={style}>
    App 2 Button
  </button>
);

export default Button;
