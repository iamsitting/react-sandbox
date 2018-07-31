import React from "react";

export const Square = (props) => {

  const winning = false;
  return (
    <button
      className={"square " + (winning ? "winning-square" : "")} onClick={props.handleClick}>
      {props.value}
    </button>
  );
}
