import React from "react";

export const HistoryList = (props) => {
  return (
    <li>
      <button onClick={props.jumpTo} className={props.bold ? "bold" : ""}>{props.description}</button>
    </li>
  );
}
