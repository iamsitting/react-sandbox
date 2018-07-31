import {GameContainer} from "./containers/GameContainer";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./reducers/reducers"

// ========================================

const render = () => {
  ReactDOM.render(
    <GameContainer />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();

