import { useState } from 'react'
import './App.css'
import Input from './components/input.jsx'
import Board from './components/board.jsx'

function App() {
  const [taskList,setTaskList] = useState([])
  
  return (
			<>
				<div className="cont">
					<h1>TO DO LIST</h1>
					<Input taskList={taskList} setTaskList={setTaskList} />
				</div>
				<div className="container">
					{taskList.map((task, index) => (
						<Board key={task} task={task} />
					))}
				</div>
			</>
		);
}

export default App
