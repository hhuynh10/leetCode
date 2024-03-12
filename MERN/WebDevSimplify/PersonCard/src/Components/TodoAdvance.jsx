import React, { useState } from "react";
import { useLocalStorage } from "../Customs/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

const TodoAdvance = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useLocalStorage("todos", []);
  const [isEdit, setIsEdit] = useState(false);
  const [editTodoId, setEditTodoId] = useState(null);
  const [filterName, setFilterName] = useState("");
  const [hideCheckbox, setHideCheckbox] = useState(false);

  const addTodo = (todoName) => {
    setTodoList((currentList) => [
      ...currentList,
      { name: todoName, completed: false, id: uuidv4() },
    ]);
  };

  const deleteTodo = (id) => {
    setTodoList((currentList) => currentList.filter((todo) => todo.id !== id));
  };

  const checkTodo = (id, completed) => {
    setTodoList((currentList) =>
      currentList.map((todo) =>
        todo.id === id ? { ...todo, completed: completed } : todo
      )
    );
  };

  const updateTodo = (id, newName) => {
    setTodoList((currentList) =>
      currentList.map((todo) =>
        todo.id === id ? { ...todo, name: newName } : todo
      )
    );
  };

  const filterTodo = todoList.filter((todo) => {
    if (hideCheckbox && todo.completed) return false;
    return todo.name.toLowerCase().includes(filterName.toLowerCase());
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    addTodo(todo);
    setTodo("");
  };

  const handleEdit = (id, name) => {
    setIsEdit(true);
    setEditTodoId(id);
    setTodo(name);
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    updateTodo(editTodoId, todo);
    setIsEdit(false);
    setTodo("");
  };

  return (
    <div>
      <div>
        <label>Search</label>
        <input
          type="text"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
        />
        <labe>
          <input
            type="checkbox"
            checked={hideCheckbox}
            onChange={(e) => setHideCheckbox(e.target.checked)}
          />
          Hide
        </labe>
      </div>
      <br />
      {isEdit ? (
        <div>
          <form onSubmit={handleSubmitEdit}>
            <label>Edit Todo</label>
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <input type="submit" value="Save" />
          </form>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <label>New Todo</label>
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <input type="submit" value="Add Todo" />
          </form>
          <div>
            {filterTodo.map((todo) => (
              <div key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => {
                    checkTodo(todo.id, e.target.checked);
                  }}
                />
                <span
                  style={
                    todo.completed ? { textDecoration: "line-through" } : null
                  }
                >
                  {todo.name}
                </span>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                <button onClick={() => handleEdit(todo.id, todo.name)}>
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoAdvance;
