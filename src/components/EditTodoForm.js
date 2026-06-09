
import React, {useState} from 'react'

export const EditTodoForm = ({ editTodo, task }) => {

const [value, setValue] = useState(task.task)

const handleSubmit = (e) => {
  e.preventDefault();   // Handle form submission

  editTodo(value, task.id);  // Call the addTodo function with the current value

  setValue("");  // Clear the input field after submission
}

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>

      <input type="text" placeholder="Update todo" className="todo-input" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit" className="todo-btn">Update Task</button>
    </form>
  )
}
