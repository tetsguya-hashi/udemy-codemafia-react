import React from 'react'
import { useState } from 'react'

const Form = ({ createTodo }) => {
  const [enteredTodo, setdenteredTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (enteredTodo) {
      const newTodo = {
        id: Math.floor(Math.random() * 1e5),
        content: enteredTodo
      };
      createTodo(newTodo);
      setdenteredTodo('');
    }
  }
  return (
    <>
      <form onSubmit={addTodo}>
        <input type="text" onChange={(e) => setdenteredTodo(e.target.value)} value={enteredTodo} />
        <button onClick={addTodo}>追加</button>
      </form>
    </>
  )
}

export default Form