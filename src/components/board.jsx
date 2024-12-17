import React from 'react'
import'./board.css'

const Board = ({task ,taskList , setTaskList,index}) => {
    const HandleDelete=()=>{
            setTaskList((prevTaskList) => prevTaskList.filter((_, i) => i !== index));


    }
  return (
    <div className="task">
      <p>{task}</p>
      <button className ="delbut"onClick ={HandleDelete}type="button">Delete</button>
    </div>
  )
}

export default Board
