import { useState } from "react";
import Form from "./Form";
import List from "./List";

const Todo = () => {
  const [todosList, setTodoList] = useState([
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ]);
  const createTodo = (todo) => {
    setTodoList([...todosList, todo])
  }
  return (
    <>
      <List todosList={todosList} setTodoList={setTodoList} />
      <Form createTodo={createTodo} />
    </>
  )
};
export default Todo;
