import React from "react";
import Square from "./Square"

class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  makeRows() {
    let row = [];
    for (let j=0; j<3; j++){
      let sqs = [];
      for (let k=0; k<3; k++){
        sqs.push(this.renderSquare((j+k) + (j*2)))
      }
      row.push(<div key={j} className="board-row">{sqs}</div>)
    }
    return row;
  }

  render() {
    return (
      <div>
        {this.makeRows()}
      </div>
    );
  }
}

export default Board
