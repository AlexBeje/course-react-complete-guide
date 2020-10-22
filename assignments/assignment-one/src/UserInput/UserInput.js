import React from "react";
import "./UserInput.css";

const userInput = (props) => {
  return (
    <div className="UserInput">
      <label>Change your username </label>
      <input type="text" onChange={props.change} value={props.userName} />
    </div>
  );
};

export default userInput;
