import React, { useState } from 'react'

const Search = () => {
  const [tasks, setTasks] = useState([]) 
  const [newTask, setNewTask] = useState('') 

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObject = { text: newTask, completed: false } 
      setTasks([...tasks, newTaskObject]) 
      setNewTask('') 
    }
  }

  const handleCompleteTask = (index) => {
    const updatedTasks = [...tasks] 
    updatedTasks[index].completed = !updatedTasks[index].completed 
    setTasks(updatedTasks) 
  }

  const handleChange = (e) => {
    setNewTask(e.target.value) 
  }

  return (
    <div>
      <div class="searchCont">
        <input class="searchBar" type="text" placeholder="add detail" value={newTask} onChange={handleChange} />
        <button class="btn" onClick={handleAddTask}>Add</button>
      </div>
      {tasks.map((task, index) => (
        <div key={index}>
          <input type="checkbox" checked={task.completed} onChange={() => handleCompleteTask(index)} />
          <label style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</label>
          <br />
        </div>
      ))}
    </div>
  )
}

export default Search