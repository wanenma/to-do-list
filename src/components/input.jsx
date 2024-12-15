import React, { useState } from "react";

const Input = ({ taskList , setTaskList }) => {
  const [input,setInput]=useState("")
  const HandleAddEvent = (e)=>{
    e.preventDefault();
    setTaskList([...taskList,input]);
    setInput("");   
  }
  return (
    <div>
      <form>
        <input type="text" placeholder="add a task" value={input} onChange={(e)=>setInput(e.target.value)} />
        <button type="button" onClick={HandleAddEvent}>Add</button>
      </form>
    </div>
  )
}

export default Input
