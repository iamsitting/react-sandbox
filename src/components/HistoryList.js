import React from "react";
import store from "../reducers/reducers"

export const HistoryList = (props) => {
  return (
    <li key={props.move}>
      <button onClick={props.jumpTo} className={props.bold ? "bold" : ""}>{props.description}</button>
    </li>
  );
}
