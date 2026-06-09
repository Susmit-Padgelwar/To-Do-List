import React, {useState} from 'react'

export const TodoForm = ({ addTodo }) => {

const [value, setValue] = useState('')

const handleSubmit = (e) => {
  e.preventDefault();   // Handle form submission

  addTodo(value);  // Call the addTodo function with the current value

  setValue("");  // Clear the input field after submission
}

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>

      <input type="text" placeholder="Add a new todo" className="todo-input" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit" className="todo-btn">Add Task</button>
    </form>
  )
}
