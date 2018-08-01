export const makeMove = (index) => {
  return {
    type: 'MOVE',
    index: index,
  }
}

export const jumpToMove = (index) => {
  return {
    type: 'JUMP',
    index: index,
  }
}

export const toggleReverse = () => {
  return {
    type: 'REVERSE',
  }
}