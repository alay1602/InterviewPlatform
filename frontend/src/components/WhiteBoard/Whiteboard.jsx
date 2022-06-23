import React from 'react'
import Board from '../Board/Board'
import "./whiteboard.css"
const Whiteboard = () => {
  return (
   <div className="container">
     <div className="color-picker-conatiner">
      <input type="color" />
     </div>
     <div className="board-container">
        <Board/>
     </div>
   </div>
  )
}

export default Whiteboard