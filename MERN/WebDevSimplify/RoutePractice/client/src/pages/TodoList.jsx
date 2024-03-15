import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { getTodos } from "../api/todos";

const TodoList = () => {
  const todos = useLoaderData();
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`${todo.completed ? "strike-through" : null}`}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
};

const loader = ({ request: { signal } }) => {
  return axios
    .get("http://localhost:3000/todos", { signal })
    .then((res) => res.data);

  // return getTodos({ signal });
};

export const todoListRoute = {
  loader,
  element: <TodoList />,
};
