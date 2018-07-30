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

class Board extends React.Component {

  renderSquare(i) {
    console.log('no');
    console.log(this.props.winningSquares);
    if(this.props.winningSquares.filter(n => n).length){
      console.log('hi');
    }

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
