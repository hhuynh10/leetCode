import { useState } from "react";
import Test from "./UseEffect";
import Width from "./Width";
import User from "./User";
import Todo from "./Todo";

export default function App() {
  const [isShown, SetIsShown] = useState(true);
  const [todos, setTodos] = useState([]);

  return (
    <div>
      {/* use effect */}
      <button onClick={() => SetIsShown((s) => !s)}>Show/Hide</button>
      <hr />
      {isShown ? <Test /> : null}
      <hr />
      <Width />
      <hr />
      <User />
      <hr />
      <Todo todos={todos} setTodos={setTodos} />
    </div>
  );
}
