import React from 'react'

const List = ({ todosList, setTodoList }) => {

  return (
    todosList.map((todo, index) => {
      return (
        <div key={todo.id}>
          <button onClick={() => {
            const newTodoList = [...todosList];
            const deleteTodoList = newTodoList.splice(index, 1);
            setTodoList(newTodoList);
          }}>
            完了
          </button>
          <span>{todo.content}</span>
        </div>
      )
    })
  )
}

export default List