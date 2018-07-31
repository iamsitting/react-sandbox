import React from "react";

function Square(props) {
  const winning = false;
  return (
    <button
      className={"square " + (winning ? "winning-square" : "")} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square