import {GameContainer} from "./containers/GameContainer"
import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import "./index.css";
import {store} from "./utils/reducers"

// ========================================

// const render = () => {
//   ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
//   );
// };

render(
  <Provider store={store}>
    <GameContainer />
  </Provider>,
  document.getElementById('root')
)


