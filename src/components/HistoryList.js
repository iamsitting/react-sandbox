import React from "react";

function HistoryList(props) {
  return (
    <li key={props.move}>
      <button onClick={props.jumpTo} className={props.bold ? "bold" : ""}>{props.desc}</button>
    </li>
  );
}

export default HistoryList
