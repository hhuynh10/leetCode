import { useState } from "react";
import Test from "./Components/UseEffect";
import Width from "./Components/Width";
import User from "./Components/User";
import Todo from "./Components/Todo";
import { useToggle } from "./Customs/useToggle";
import UseFetch from "./Components/UseFetch";
import UseArray from "./Components/UseArray";
import UserLocalStorage from "./Components/UserLocalStorage";
import FormValidation from "./Components/FormValidation";
import ReactHookForm from "./Components/ReactHookForm";
import UseReducer from "./Components/UseReducer";
import TodoAdvance from "./Components/TodoAdvance";

export default function App() {
  const [isShown, SetIsShown] = useState(true);
  const [isDarkMode, toggleDarkMode] = useToggle(false);

  return (
    <div
      style={{
        background: isDarkMode ? "#333" : "white",
        color : isDarkMode ? "white" : "#333"
      }}
    >
      {/* use effect */}
      <button onClick={() => SetIsShown((s) => !s)}>Show/Hide</button>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <hr />
      {isShown ? <Test /> : null}
      <hr />
      <Width />
      <hr />
      <User />
      <hr />
      <Todo />
      <hr />
      <UseFetch />
      <hr />
      <UseArray />
      <hr />
      <UserLocalStorage />
      <hr />
      <FormValidation />
      <hr />
      <ReactHookForm />
      <hr />
      <UseReducer />
      <hr />
      <TodoAdvance />
    </div>
  );
}
