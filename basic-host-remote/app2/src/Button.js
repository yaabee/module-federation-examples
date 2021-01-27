import React from "react";

const Button = () => {
  const [Show, setShow] = React.useState(false);

  return (
    <>
      <button onClick={() => setShow(!Show)}>{`${Show}`}</button>
    </>
  );
};

export default Button;
