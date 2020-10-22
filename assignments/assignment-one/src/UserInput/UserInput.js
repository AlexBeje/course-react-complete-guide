import React from "react";

const userInput = (props) => {
  return (
    <p>
      <input type="text" onChange={props.change} value={props.userName} />
    </p>
  );
};

export default userInput;
