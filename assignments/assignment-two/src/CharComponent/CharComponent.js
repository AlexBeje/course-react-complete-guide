import React from "react";

const charComponent = (props) => {
  const style = {
    border: "1px solid black",
    cursor: "pointer",
    display: "inline-block",
    margin: 16,
    padding: 16,
    textAlign: "center",
    width: 20,
  };

  const splitedText = props.text.split("").map((text, i) => {
    return (
      <div style={style} key={text + i}>
        {text}
      </div>
    );
  });

  return <div style={{ display: "flex", flexWrap: "wrap" }}>{splitedText}</div>;
};

export default charComponent;
