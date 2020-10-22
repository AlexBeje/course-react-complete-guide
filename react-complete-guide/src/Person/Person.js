import React from "react";

const person = (props) => {
  return (
    <div>
      <p>
        My name is {props.name} and I am {props.age} years old. My favorite
        number is {Math.floor(Math.random() * 30)}
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
