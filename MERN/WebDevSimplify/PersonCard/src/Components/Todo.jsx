import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo == "") return;
    setTodos((currTodos) => {
      return [
        ...currTodos,
        { name: todo, completed: false, id: crypto.randomUUID() },
      ];
    });
    setTodo("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const deleteTodo = (id) => {
    setTodos((currTodos) => {
      return currTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggleTodo = (todoId, completed) => {
    setTodos((currTodos) => {
      return currTodos.map((todo) => {
        if (todo.id === todoId) return { ...todo, completed };
        return todo;
      });
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
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            checked={todo.completed}
            type="checkbox"
            onChange={(e) => toggleTodo(todo.id, e.target.checked)}
          />
          <span
            style={todo.completed ? { textDecoration: "line-through" } : null}
          >
            {todo.name}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
