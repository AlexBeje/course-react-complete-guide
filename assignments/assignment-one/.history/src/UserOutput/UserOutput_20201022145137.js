import React from "react";

const userOutput = (props) => {
  return (
    <div>
      <p>Username: {props.user}</p>
      <p>Password: **********</p>
    </div>
  );
};

export default userOutput;
