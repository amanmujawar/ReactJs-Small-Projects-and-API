import React, { useState } from 'react'

const Form = () => {
    
    const [todo, setTodo] = useState([]);
    const [ inputValue, setInputValue] = useState('');

    const handleChange=(event)=>{
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        
    }




  return (
    <div>
    <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add a new to-do"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        <li>
            Hii there
             <button>Delete</button>
        </li>
      </ul>
    </div>
  )
}

export default Form