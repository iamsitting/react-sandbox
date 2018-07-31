import {Game} from "./components/Game";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {store} from "./reducers/reducers"

// ========================================

const render = () => {
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
