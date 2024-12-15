import React from 'react'
import'./board.css'

const Board = ({task}) => {
  return (
    <div className="task">
      <p>{task}</p>
    </div>
  )
}

export default Board
