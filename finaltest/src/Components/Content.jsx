import React, {useState} from 'react'

const Content = () => {
  const [tasks, setTasks] = useState([
    { text: 'Do coding challenge', completed: false },
    { text: 'Do coding challenge', completed: false },
    { text: 'Do coding challenge', completed: false }
  ]) 
  const handleCompleteTask = (index) => {
    const updatedTasks = [...tasks] 
    updatedTasks[index].completed = !updatedTasks[index].completed 
    setTasks(updatedTasks) 
  }

  return (
    <div>
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

  
 
    
  


export default Content