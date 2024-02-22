import React, { useEffect, useState } from "react";

const Todo = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");

  const addTodo = (todo) => {
    if (todo == '') return
    setTodos((currArr) => {
      return [...currArr, todo];
    });
    setTodo("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo(todo);
    }
  };

  const deleteTodo = (index) => {
    setTodos((currArr) => {
      return currArr.filter((currInd) => currInd !== index);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => addTodo(todo)}>Add Todo</button>
      {todos.map((todo, index) => (
        <div key={index}>
          <span>{todo}</span>
          <button onClick={() => deleteTodo(todo)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
