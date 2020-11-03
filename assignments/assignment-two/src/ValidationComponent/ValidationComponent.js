import React from "react";

const validationComponent = (props) => {
  let text = null;

  if (props.textLength === 0) {
  } else if (props.textLength < 5) {
    text = <p style={{ color: "red" }}>Text too short</p>;
  } else {
    text = <p style={{ color: "green" }}>Text long enough</p>;
  }

  return (
    <div>
      <p>Text size: {props.textLength}</p>
      {text}
    </div>
  );
};

export default validationComponent;
