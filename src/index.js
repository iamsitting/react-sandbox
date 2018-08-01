import {Game} from "./components/Game"
import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import "./index.css";
import {store} from "./utils/reducers"

// ========================================

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
)


