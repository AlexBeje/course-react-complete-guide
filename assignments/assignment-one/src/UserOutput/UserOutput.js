import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
  return (
    <div class="UserOutput">
      <p>Username: {props.userName}</p>
      <p>Password: {props.userPassword}</p>
    </div>
  );
};

export default userOutput;
